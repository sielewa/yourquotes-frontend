/*export default ({ store, $axios })  => {
   setInterval(() => {
      // Check if user has any token stored
      const oldToken = store.getters['users/getToken'];
      const username = store.getters['users/getUser'];
      console.dir(username)
      console.dir(oldToken)
      //if (!oldToken) return;
      console.dir('wykonuje sie dalej')
      // Refresh token
      //store.dispatch('users/checkRefreshToken');
      //console.dir('wykonuje sie')
      // Set new token
      //const accessToken = store.getters['users/getToken'];
      //if (token) $axios.setToken(token, 'Bearer');
    }, 6000000);
  };*/

  export default (ctx) => {
    setInterval(async () => {
      const username = ctx.store.getters['users/getUser'];
      console.dir(username)
      await ctx.store.dispatch('users/checkRefreshToken', ctx);
    }, 30000)
  };
  