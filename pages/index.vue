<template>
  <div class="container section">
    <QuotesContainer :quotes="itemsForList" />
    <Pagination
      :totalPages="pagination.totalPages"
			:perPage="pagination.perPage"
			:currentPage="currentPage"
			@pagechanged="onPageChange"
    />
  </div>
</template>

<script>
export default {
  name: "HomePage",

  data: () => ({
    perPage: 7,
    currentPage: 1,
  }),

  computed: {
    itemsForList() {
      return this.quotes;
    },
  },

  methods: {
    async onPageChange(page) {
      this.currentPage = page;

      const requestQuery = {
        page: this.currentPage,
        limit: this.perPage,
      };

      const res = await this.$store.dispatch(
        "quotes/getQuotes",
        requestQuery
      );
      const quotes = res.quotes;
      this.quotes = quotes;
    },
  },

  async asyncData({ query, store }) {
    const defaultQuery = {
      page: 1,
      limit: 7,
    };

    const userQuery = query;
    const requestQuery = {
      ...defaultQuery,
      ...userQuery,
    };

    const res = await store.dispatch("quotes/getQuotes", requestQuery);
    const quotes = res.quotes;
    const pagination = res.pagination;
    return { quotes, pagination };
  },
};
</script>
