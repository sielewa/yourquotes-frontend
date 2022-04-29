<template>
  <div class="section container-register">
		<RegisterForm />
  </div>
</template>

<script>
export default {
  layout: "register",
};
</script>

<style lang="scss" scoped>
.container-register {
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  position: relative;
  background-color: #fff;
}
</style>
