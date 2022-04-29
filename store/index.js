export const state = () => ({
	userIp: null,
});

export const mutations = {
	SET_IP(state, ip) {
		state.userIp = ip;
	}
};

export const getters = {
	getIp(state) {
		return state.userIp;
	}
}

export const actions = {
	async nuxtServerInit({ dispatch, commit }, ctx) {
		try {
			await dispatch('users/checkRefreshToken', ctx);
		} catch (error) {
			ctx.redirect('/login');
		}
	}
};
