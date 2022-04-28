<template>
  <div>
    <QuotesContainer :quotes="quotes" />
  </div>
</template>

<script>
export default {
  name: "UserQuotes",

  props: {
    quotes: {},
  },
};
</script>
