<template>
    <div class="container add_container">
        <QuoteForm class="add_conent"/>
    </div>
</template>

<style lang="scss">

    .add_container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        min-height: 50vh;

        & > .add_contnet{
            width: 500px;
        }
    }
</style>

<script>
export default {
    name: 'addQuotePage',

}
</script>

