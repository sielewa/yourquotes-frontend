export default function ({ $axios, redirect }) {
	$axios.onResponse(response => {
		console.dir(`[${response.status}] ${response.request.path}`);
	});

	$axios.onError(error => {
		console.log(`[${error.response && error.response.status}] ${error.response && error.response.request.path}`);
		console.log(error.response && error.response.data);
		if (error.response.status === 401) {
			error.frontendMessage = error.response.data.message;
		}
		if (error.response.status === 400) {
			for (const errorMessage of error.response.data.message.errors) {
				if (errorMessage.param === 'username') {
					error.usernameError = errorMessage.msg;
				}
				if (errorMessage.param === 'password') {
					error.passwordError = errorMessage.msg;
				}
				if (errorMessage.param === 'text') {
					error.textError = errorMessage.msg;
				}
				if (errorMessage.param === 'email') {
					error.emailError = errorMessage.msg;
				}
			}
		}
	})
}
