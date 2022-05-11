<template>
  <section class="section container-add">
    <AddQuoteContainer />
  </section>
</template>

<style lang="scss">
</style>

<script>
export default {
  name: "addQuotePage",
  middleware: "is-logged-in",
};
</script>

<style lang="scss">
.container-add {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
	padding-top: 10vh;
}

</style>

