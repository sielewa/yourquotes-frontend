<template>
    <section class="section">
        <UserContainer 
            :username="user.username" 
            :quotations_count="user.quotations_count" 
            :last_quotations="user.quotations" 
        />
    </section>
</template>

<script>

    export default {

        async asyncData({ store, route }){
            const username = route.params.user
            const user = await store.dispatch('users/getUser', username)
            return { user }
        }
    }
</script>

<style lang="scss" scoped>

</style>