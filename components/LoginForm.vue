<template>
    <div class="loginForm border border-dark">
        <form @submit.stop.prevent="onSubmit">
            <div class="form-group">
                <label>Username:</label>
                <input v-model="username" type="username" class="form-control" placeholder="Enter username">
                <p v-if="errors.usernameError" class="form_error">{{ errors.usernameError }}</p>
            </div>
            <div class="form-group">
                <label>Password:</label>
                <input v-model="password" type="password" class="form-control" placeholder="Enter Password">
                <p v-if="errors.passwordError" class="form_error">{{ errors.passwordError }}</p>
            </div>
            <button type="submit" class="btn btn-primary">Log in</button>
            <p v-if="errors.error" class="form_error">{{ errors.error }}</p>
        </form>
    </div>
</template>

<style lang="scss">

.loginForm{
    width: 300px;
    height: 160px;
    padding: 10px 10px 10px 10px;
    background-color: #ffff;
}

</style>

<script>
export default {
    name: 'LoginForm',

    data: () => ({
      username: '',
      password: '',
      errors: {
        error: '',
        usernameError: '',
        passwordError: '',
      }
    }),

    methods: {
      async onSubmit() {
        const user = {
            username: this.username,
            password: this.password,
        }
        this.login(user)
      },

      async login(user) {
        try {
          const payload = user
          await this.$store.dispatch('users/login', payload)
          window.location = '/'; // to ci odswiezy strone
        } catch(error) {
          this.errors.error = error.frontendMessage
          this.errors.usernameError = error.usernameError
          this.errors.passwordError = error.passwordError
        }
      },

      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.username = ''
        this.form.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },
}
</script>