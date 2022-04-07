import Cookie from 'js-cookie'
import * as jwt_decode from 'jwt-decode';

export const state = () => ({
    user: null,
    accessToken: null
})

export const mutations = {
    SET_TOKEN (state, data) {
        state.accessToken = data.accessToken
    },
    SET_USER (state, user) {
        state.user = user
    }
}

export const getters = {
    isLoggedIn (state) {
        return !!state.user
    },
    getUser (state) {
        return state.user
    },
    getToken (state) {
        return state.accessToken
    }
}

export const actions = {
    async checkRefreshToken({ dispatch, commit }, { res, app, redirect }) {
        try{
            const accessToken = this.$cookiz.get('access_token');
            const refreshToken = this.$cookiz.get('refresh_token');
            
            if(!accessToken){
                console.log('nie ma accessTokena')
                await dispatch('refreshToken', res)
                return
            }
        
            let decodeToken = accessToken.split('.')[1];
            decodeToken = JSON.parse(Buffer.from(decodeToken, 'base64').toString())
            const accessTokenExpiresAt = decodeToken.exp - 30

            let Datenow = Date.now() / 1000
            if(Datenow > accessTokenExpiresAt){
                console.dir('wygasł')
                await dispatch('refreshToken', res)
                return
            }

            this.$axios.setToken(accessToken, 'Bearer');
            this.$axios.setToken(refreshToken, 'Bearer');
            commit('SET_TOKEN', accessToken);

            if (res) {
                await dispatch('authMe')
            }
        } catch(error) {
            console.log(error)
        }
    },

    async authMe({ dispatch, commit }){
        try{
            const result = await this.$axios.get('/api/auth/me')
            commit('SET_USER', result.data.username)
        } catch(error){
            console.log(error)
        }
    },

    async refreshToken ({ state, dispatch }, res) {
        /*if (Date.now() < state.accessTokenExpiresAt - 60000) return;*/
        const result = await this.$axios.post('/api/auth/refreshToken');
        await dispatch('setTokens', {
            cookies: result.headers['set-cookie'],
            data: result.data,
            res,
        })
        if (res){
            await dispatch('authMe')
        }
    },

    async setTokens ({ commit }, { res, cookies, data }) {
        if (res) res.setHeader('set-cookie', cookies);
        commit('SET_TOKEN', data.accessToken);
    },

    async logout ({ commit }) {
        this.$cookies.remove('access_token');
        this.$cookies.remove('refresh_token');
        await this.$axios.delete('/api/auth/refreshToken');
        commit('SET_USER', null)
        window.location = '/login';
    },

    async createUser ({ commit }, payload) {
        const response = await this.$axios.post('/api/users', payload);
    },

    async login ({ commit, dispatch }, payload) {
        const res = await this.$axios.post('api/auth/login', payload);
    },
}