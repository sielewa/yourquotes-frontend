<template>
  <div class="quote_form_container">
    <form class="quote_form" @submit.prevent="addQuote($event)">
      <textarea v-model="text" placeholder="Enter text"></textarea>
      <Button element="submit" value="Add" @click="addQuote" />
    </form>
    <p v-if="errors.textError" class="error">{{ errors.textError }}</p>
    <p v-if="errors.error" class="error">{{ errors.error }}</p>
    <p v-if="success" class="success">{{ success }}</p>
  </div>
</template>

<style lang="scss">
.quote_form_container {
  text-align: center;

  & > p {
    padding-top: 15px;
    font-size: 1.5rem;
  }
  & > .error {
    color: red;
  }

  & > .success {
    color: green;
  }
}

.quote_form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
	min-width: 240px;
  height: 200px;
  background-color: $secondary;
  border: 2px solid black;

  & > textarea {
    font-size: 1.5rem;
    width: 80%;
    height: 100px;
    padding: 10px 15px;
    border-radius: 4px;
    border: 1px solid black;
    resize: none;
  }
}

@media screen and (min-width: $screen-sm) {
	.quote_form {
		min-width: 380px;
    textarea {
      font-size: 2rem;
    }
	}
}

@media screen and (min-width: $screen-md) {
  .quote_form {
		min-width: 480px;
		textarea {
      font-size: 2.5rem;
    }
	}
}
</style>

<script>
export default {
  name: "QuoteForm",

  data: () => ({
    text: "",
    errors: {
      error: "",
      textError: "",
    },
    success: "",
  }),

  methods: {
    async addQuote(e) {
      this.resetStatus();
      try {
        const payload = { text: this.text };
        const res = await this.$store.dispatch(
          "quotes/createQuote",
          payload
        );
        this.success = res.message;
        this.text = "";
      } catch (error) {
        this.errors.textError = error.textError;
      }
    },
    resetStatus() {
      this.errors.textError = "";
      this.success = "";
    },
  },
};
</script>
