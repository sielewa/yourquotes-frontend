export const state = () => ({
    quotations: []
})

export const mutations = {
    SET_QUOTATIONS (state, quotations){
        state.quotations = quotations
    }
}

export const getters = {
    getQuotations (state) {
        return state.quotations
    }
}

export const actions = {
    async createQuotation ({commit, disptach}, payload) {
        return await this.$axios.$post('/api/quotations', payload)
    },
    
    async getQuotations ({commit}, requestQuery){
        return await this.$axios.$get('/api/quotations', {params: requestQuery})
        // {params: requestQuery}
    },
    async deleteQuote ({commit}, payload){
        return await this.$axios.$delete(`/api/quotations/${payload}`)
    }
}