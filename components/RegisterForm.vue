<template>
  <div class="register_form_container">
    <div class="register_form">
      <div class="title">
        <span>Register to YourQuotes!</span>
      </div>
      <form @submit.stop.prevent="onSubmit">
        <div class="inputs">
          <div class="input_form">
            <span>Username:</span>
            <input
              v-model="form.username"
              type="username"
              class=""
              placeholder="Enter username"
            />
          </div>
          <div class="input_form">
            <span>Password:</span>
            <input
              v-model="form.password"
              type="password"
              class=""
              placeholder="Enter Password"
            />
          </div>
          <div class="input_form">
            <span>E-mail:</span>
            <input
              v-model="form.email"
              type="email"
              class=""
              placeholder="Enter E-mail"
            />
          </div>
        </div>
        <div class="submit">
          <Button element="submit" value="Register" />
        </div>
      </form>
    </div>
    <p v-if="errors.usernameError" class="error">{{ errors.usernameError }}</p>
    <p v-if="errors.passwordError" class="error">{{ errors.passwordError }}</p>
    <p v-if="errors.emailError" class="error">{{ errors.emailError }}</p>
    <p v-if="errors.error" class="error">{{ errors.error }}</p>
  </div>
</template>

<style lang="scss">
.register_form_container {
	& > p {
    text-align: center;
    padding-top: 15px;
    font-size: 1.5rem;
    color: red;
  }

  .register_form {
    min-width: 300px;
    padding: 10px 10px 10px 10px;
    background-color: $secondary;
    border: 2px solid black;
    border-radius: 20px;

    .title {
      font-size: 2.5rem;
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
      justify-content: space-between;

      span {
        font-size: 1.4rem;
      }

      input {
        width: 70%;
        font-size: 1.4rem;
        border: 1px solid $secondary;
        border-radius: 10px;
        padding-left: 5px;

        &:focus {
          outline: none !important;
          border: 1px solid $primary;
        }
      }
    }
  }
}

@media screen and (min-width: $screen-sm) {
	.register_form_container > .register_form {
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
}

@media screen and (min-width: $screen-md) {
	.register_form_container > .register_form {
		min-width: 600px;

		.title {
			font-size: 4rem;
		}

		.input_form {
			span {
				font-size: 3rem;
			}

			input {
				font-size: 2.5rem;
			}
		}
	}
}
</style>

<script>
export default {
  name: "RegisterForm",

  data: () => ({
    form: {
      username: "",
      password: "",
      email: "",
    },
    errors: {
      usernameError: "",
      passwordError: "",
      emailError: "",
      error: "",
    },
    show: true,
  }),

  methods: {
    async onSubmit() {
      const user = {
        username: this.form.username,
        password: this.form.password,
        email: this.form.email,
      };
      this.createUser(user);
    },

    async createUser(user) {
      try {
        const payload = user;
        const result = await this.$store.dispatch("users/createUser", payload);
        this.$router.push("/login");
      } catch (error) {
        this.errors.error = error.frontendMessage;
        this.errors.usernameError = error.usernameError;
        this.errors.passwordError = error.passwordError;
        this.errors.emailError = error.emailError;
      }
    },
    resetStatus() {
      this.errors.error = "";
      this.errors.usernameError = "";
      this.errors.passwordError = "";
      this.errors.emailError = "";
    },
  },
};
</script>
