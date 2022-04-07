export default function ({ $axios, redirect }) {
  $axios.onResponse(response => {
    console.dir(`[${response.status}] ${response.request.path}`);
  });

  $axios.onError(error => {
    console.log(`[${err.response && err.response.status}] ${err.response && err.response.request.path}`);
    console.log(err.response && err.response.data);
    if(error.response.status === 401){
      error.frontendMessage = error.response.data.message;
    }
    if(error.response.status === 400){
      for (const errorMessage of error.response.data.message.errors){
        if(errorMessage.param === 'username'){
          error.usernameError = errorMessage.msg
        }
        if(errorMessage.param === 'password'){
          error.passwordError = errorMessage.msg
        }
      }
    }
  })
}