export const state = () => ({
    userIp: null,
  });
  
  export const mutations = {
    SET_IP (state, ip) {
      state.userIp = ip;
    }
  };
  
  export const getters = {
    getIp (state) {
      return state.userIp;
    }
  }

export const actions = {
    async nuxtServerInit ({ dispatch, commit }, ctx) {
        //const req = ctx.req;
        //const headers = (req && req.headers) ? Object.assign({}, req.headers) : {}
        //const xForwardedFor = headers['x-forwarded-for'];
        //const xRealIp = headers['x-real-ip'];
        //commit('SET_IP', xForwardedFor || xRealIp);
        try {
          await dispatch('users/checkRefreshToken', ctx);
        } catch (error) {
          ctx.redirect('/login');
        }
      }
};