<template>
    <section class="section">
        <AddQuoteContainer />
    </section>
</template>

<style lang="scss">

</style>

<script>
export default {
    name: 'addQuotePage',
    middleware: 'is-logged-in'

}
</script>

