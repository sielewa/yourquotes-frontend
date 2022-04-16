<template>
    <div class="container">
      <QuotationsContainer :quotations="quotations"/>
    </div>
</template>

<script>
export default {
  name: "HomePage",

  async asyncData({query, store}){

    const defaultQuery = {
      page: 1,
      limit: 5
    }

    const userQuery = query
    const requestQuery = {
      ...defaultQuery,
      ...userQuery
    }

    const quotations = store.dispatch('quotation/getQuotations', requestQuery)
    return quotations
  }
}
</script>
