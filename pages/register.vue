<template>
  <section class="section">
    <div class="container">
        <h3 class="pt-4 text-2xl text-center">Create an Account!</h3>
        <form>
            <v-text-field
            v-model="username"
            :error-messages="usernameErrors"
            :counter="10"
            label="username"
            required
            @input="$v.username.$touch()"
            @blur="$v.username.$touch()"
            ></v-text-field>

            <v-text-field
            v-model="password"
            :error-messages="passwordErrors"
            label="password"
            required
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            ></v-text-field>

            <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
            ></v-text-field>

            <v-btn
            class="mr-4"
            @click="submit"
            >
            submit
            </v-btn>
            
            <v-btn @click="clear">
            clear
            </v-btn>
        </form>
    </div>
  </section>
</template>


<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, minLength, email } from 'vuelidate/lib/validators'

  export default {
    layout: 'register',

    mixins: [validationMixin],

    validations: {
      username: { required, maxLength: maxLength(10) },
      password: { required, minLength: minLength(7) },
      email: { required, email },
    },

    data: () => ({
      username: '',
      email: '',
      password: '',
    }),

    computed: {
      usernameErrors () {
        const errors = []
        if (!this.$v.username.$dirty) return errors
        !this.$v.username.maxLength && errors.push('Username must be at most 10 characters long')
        !this.$v.username.required && errors.push('Username is required.')
        return errors
      },
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.minLength && errors.push('Password must be longer than 6 characters')
        !this.$v.password.required && errors.push('Password is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    },

    methods: {
      clear () {
        this.$v.$reset()
        this.username = ''
        this.password = ''
        this.email = ''
      },
      async submit() {
          try {
              const user = {
                username: this.username,
                password: this.password,
                email: this.email
              }
              const payload = user
              await this.$store.dispatch('users/createUser', payload)
          } catch(e) {
              this.e = 'Rejestracja nie powiodła się...'
              console.log(e)
          }
      }
    },
  }

</script>
