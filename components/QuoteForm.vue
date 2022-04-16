<template>
    <div class="quoteForm">
        <form @submit.stop.prevent="addQuote">
            <div class="form-group">
                <input v-model="text" type="text" class="form-control" placeholder="Enter text">
                <p v-if="errors.textError" class="form_error">{{ errors.textError }}</p>
            </div>
            <button type="submit" class="btn btn-primary">Add</button>
            <p v-if="errors.error" class="form_error">{{ errors.error }}</p>
            <p v-if="success" class="form_success">{{ success }}</p>
        </form>
    </div>
</template>

<style lang="scss">
    .QuoteForm{
        width: 300px;
        height: 160px;
        background-color: $secondary;
    }
</style>

<script>
export default {
    name: 'QuoteForm',

    data: () => ({
      text: '',
      errors: {
        error: '',
        textError: ''
      },
      success: ''
    }),

    methods: {
      async addQuote() {
        try {
            const payload = { text: this.text }
            const res = await this.$store.dispatch('quotation/createQuotation', payload)
            this.success = res.message
        } catch(error) {
          this.errors.textError = error.textError
        }
      }
    },
}
</script>