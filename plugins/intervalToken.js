import isLoggedIn from "~/middleware/is-logged-in";

export default (ctx) => {
	setInterval(async () => {
		if (isLoggedIn) {
			await ctx.store.dispatch('users/checkRefreshToken', ctx);
		}
	}, 30000)
};
