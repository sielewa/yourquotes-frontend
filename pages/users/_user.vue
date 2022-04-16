<template>
    <section class="section">
        <div class="container">
            <h2 class="title">User Profile</h2>
            <div class="content">
                <p>
                    <strong>Username:</strong>
                    {{ username }}
                </p>
            </div>
        </div>
    </section>
</template>

<script>

    export default {
        middleware: ['is-logged-in'],

        async asyncData({ store, route }){
            const username = route.params.user
            return { username }
        }
    }
</script>

<style lang="scss" scoped>

</style>