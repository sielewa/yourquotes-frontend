export default (ctx) => {
	setInterval(async () => {
		await ctx.store.dispatch('users/checkRefreshToken', ctx);
	}, 30000)
};
