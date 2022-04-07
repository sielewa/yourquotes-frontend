<template>
  <div>
    <b-form @submit.stop.prevent="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Username:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.username"
          type="text"
          placeholder="Enter username"
        ></b-form-input>
        <p v-if="errors.usernameError">{{ errors.usernameError }}</p>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          placeholder="Enter password"
        ></b-form-input>
        <p v-if="errors.passwordError">{{ errors.passwordError }}</p>
      </b-form-group>

      <b-button type="submit" variant="primary">Log in!</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
      <p v-if="errors.error">{{ errors.error }}</p>
    </b-form>
  </div>
</template>

<script>

  export default {
    layout: 'register',

    data() {
      return {
        form: {
          username: '',
          password: '',
        },
        errors: {
          usernameError: null,
          passwordError: null,
          error: null
        },
        show: true
      }
    },

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
</script>
<!--
<script>
  import { validationMixin } from 'vuelidate'
  import { required } from 'vuelidate/lib/validators'

  export default {
    layout: 'register',

    mixins: [validationMixin],

    validations: {
      username: { required },
      password: { required }

    },

    data: () => ({
      username: '',
      password: '',
    }),

    computed: {
      usernameErrors () {
        const errors = []
        if (!this.$v.username.$dirty) return errors
        !this.$v.username.required && errors.push('Username is required.')
        return errors
      },
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.required && errors.push('Password is required.')
        return errors
      },
    },

    methods: {
      clear () {
        this.$v.$reset()
        this.username = ''
        this.password = ''
      },
      async login() {
          try {
              const user = {
                username: this.username,
                password: this.password
              }
              const payload = user
              const token = await this.$store.dispatch('users/login', payload)
              await this.$store.dispatch('users/authme', token)
              this.$router.push('/')
          } catch(e) {
              this.e = 'Logowanie nie powiodło się...'
              console.log(e)
          }
      }
    },
  }

</script>-->
