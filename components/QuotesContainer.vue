<template>
  <div class="quotes_container">
    <Quote
      id="quote"
      v-for="quote in itemsForList"
      :key="quote.id"
      :text="quote.text"
      :author="quote.username"
      :date="quote.date"
      :time="quote.time"
      :isAuthor="quote.isAuthor"
      :quoteId="quote.id"
    />
  </div>
</template>

<script>
export default {
  name: "QuotesContainer",
  props: {
    quotes: {},
  },

  data: () => ({
    quotesData: null,
  }),

  computed: {
    itemsForList() {
			this.quotesData = this.quotes;
			this.quotesData.map((quote) => {
				let dateComponents = quote.created_at.split("T");
        let date = dateComponents[0];
        let time = dateComponents[1].split(".")[0];
        quote.date = date;
        quote.time = time;
        quote.isAuthor = false;

        if (this.$store.getters["users/getUser"]) {
					if (quote.user_id === this.$store.getters["users/getUser"].id) {
						quote.isAuthor = true;
					}
        }
			})

			return this.quotesData;
			/*
      this.quotesData = this.quotes;
      for (const quote of this.quotesData) {
        let dateComponents = quote.created_at.split("T");
        let date = dateComponents[0];
        let time = dateComponents[1].split(".")[0];
        quote.date = date;
        quote.time = time;
        quote.isAuthor = false;

        if (quote.username === this.$store.getters["users/getUser"]) {
          quote.isAuthor = true;
        }
      }
      return this.quotesData;*/
    },
  },
};
</script>


<style lang="scss" scoped>
.quotes_container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
