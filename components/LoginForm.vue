<template>
  <div class="login_container">
    <div class="login_form">
      <div class="title">
        <span>Log in to YourQuotes!</span>
      </div>
      <form @submit.stop.prevent="onSubmit">
        <div class="inputs">
          <div class="input_form">
            <span>Username:</span>
            <input
              v-model="username"
              type="username"
              class=""
              placeholder="Enter username"
            />
          </div>
          <div class="input_form">
            <span>Password:</span>
            <input
              v-model="password"
              type="password"
              class=""
              placeholder="Enter Password"
            />
          </div>
        </div>
        <div class="submit">
          <Button element="submit" value="Log in" />
        </div>
      </form>
    </div>
    <p v-if="errors.usernameError" class="error">{{ errors.usernameError }}</p>
    <p v-if="errors.error" class="error">{{ errors.error }}</p>
    <p v-if="errors.passwordError" class="error">{{ errors.passwordError }}</p>
  </div>
</template>

<style lang="scss">
.login_container {
  .login_form {
    min-width: 600px;

    padding: 10px 10px 10px 10px;
    background-color: #ffff;
    border: 2px solid black;
    border-radius: 20px;

    .title {
      font-size: 4rem;
      text-align: center;
    }

    form {
      padding-top: 5px;
    }

    .submit {
      padding: 20px 0;
    }

    .input_form {
      padding: 10px 20px;
      display: flex;
      justify-content: space-around;

      span {
        font-size: 3rem;
      }

      input {
        width: 70%;
        font-size: 2.5rem;
        border: 1px solid $secondary;
        border-radius: 10px;
        padding-left: 5px;

        &:focus {
          outline: none !important;
          border: 1px solid $primary;
        }
      }
    }

    @media (max-width: $screen-md) {
      min-width: 450px;

      .title {
        font-size: 3.2rem;
      }

      .input_form {
        span {
          font-size: 2rem;
        }

        input {
          font-size: 2rem;
        }
      }
    }

    @media (max-width: $screen-sm) {
      min-width: 300px;

      .title {
        font-size: 2.8rem;
      }

      .input_form {
        span {
          font-size: 1.4rem;
        }

        input {
          font-size: 1.4rem;
        }
      }
    }
  }

  & > p {
    text-align: center;
    padding-top: 15px;
    font-size: 1.5rem;
    color: red;
  }
}
</style>

<script>
export default {
  name: "LoginForm",

  data: () => ({
    username: "",
    password: "",
    errors: {
      error: "",
      usernameError: "",
      passwordError: "",
    },
  }),

  methods: {
    async onSubmit() {
      const user = {
        username: this.username,
        password: this.password,
      };
      this.login(user);
    },

    async login(user) {
      try {
        const payload = user;
        await this.$store.dispatch("users/login", payload);
        window.location = "/";
      } catch (error) {
        this.errors.error = error.frontendMessage;
        this.errors.usernameError = error.usernameError;
        this.errors.passwordError = error.passwordError;
      }
    },
  },
};
</script>
