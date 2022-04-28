<template>
  <section class="section">
    <UserContainer
      :username="user.username"
      :quotes_count="user.quotes_count"
      :quotes="user.quotes"
    />
  </section>
</template>

<script>
export default {
  async asyncData({ store, route }) {
    const username = route.params.user;
    const user = await store.dispatch("users/getUser", username);
    return { user };
  },
};
</script>

<style lang="scss" scoped>
</style>
