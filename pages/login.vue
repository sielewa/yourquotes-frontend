<template>
  <div class="limiter">
    <div class="container-login">
      <div class="warp-login">
        <!--<form class="login_form" @submit.stop.prevent="onSubmit"> 
          <input v-model="username" type="text" placeholder="Username" label="Username" name="username"><br>
          <p v-if="errors.usernameError" class="form_error">{{ errors.usernameError }}</p>
          <input v-model="password" type="text" placeholder="Password" label="Password" name="password"><br>
          <p v-if="errors.passwordError" class="form_error">{{ errors.passwordError }}</p>
          <button type="button" class="btn btn-success">Log in</button>
          <p v-if="errors.error" class="form_error">{{ errors.error }}</p>
        </form>-->
        <LoginForm/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'register'
  }
</script>

<style lang="scss" scoped>
  .limiter {
    width: 100%;
    margin: 0 auto;
    background-color: red;
  }

  .container-login{
    width: 100%;  
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
    position: relative;
    background-color: #fff;
  }

  .wrap-login{
    width: 500px;
    background: #fff;
    border-radius: 20px;
    overflow: hidden;
  }
</style>


<!--<script>

  export default {
    layout: 'register',

    data: () => ({
          valid: false,
          username: '',
          password: '',
          nameRules: [
            v => !!v || 'Name is required'
          ],
          passwordRules: [
            v => !!v || 'Password is required'
          ]
        }),

    methods: {
      async onSubmit() {
        const user = {
            username: this.form.username,
            password: this.form.password,
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
    }
  }
</script>-->
