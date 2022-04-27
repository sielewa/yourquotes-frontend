<template>
    <div class="container section">
      <QuotationsContainer :quotations="itemsForList"/>
      <div class="pagination_container">
        <Pagination 
        :totalPages="pagination.totalPages"
        :perPage="pagination.perPage"
        :currentPage="currentPage"
        @pagechanged="onPageChange"
      />
      </div>
    </div>
</template>

<script>

export default {

  name: "HomePage",

  data: () => ({
    perPage: 7,
    currentPage: 1
  }),

  computed: {
    itemsForList(){
      return this.quotations
    }
  },

  methods: {
    async onPageChange(page) {
      this.currentPage = page;
      
      const requestQuery = {
        page: this.currentPage,
        limit: this.perPage
      }
      
      const res = await this.$store.dispatch('quotation/getQuotations', requestQuery)
      const quotations = res.quotations
      this.quotations = quotations
    }
  },

  async asyncData({query, store}){

    const defaultQuery = {
      page: 1,
      limit: 7
    }

    const userQuery = query
    const requestQuery = {
      ...defaultQuery,
      ...userQuery
    }

    const res = await store.dispatch('quotation/getQuotations', requestQuery)
    const quotations = res.quotations
    const pagination = res.pagination
    return { quotations, pagination }
  }
}
</script>

<style lang="scss">
  .pagination_container {
    display: flex;
    justify-content: center;
  }
</style>