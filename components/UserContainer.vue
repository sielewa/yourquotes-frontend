<template>
  <div class="container">
    <UserInfo :username="username" :quotes_count="quotes_count" />
    <UserQuotes :quotes="quotes" />
  </div>
</template>

<script>
export default {
  name: "UserContainer",

  props: {
    username: {
      type: String,
    },
    quotes_count: {
      type: Number,
    },
    quotes: {},
  },
};
</script>
