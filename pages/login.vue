<template>
  <div class="section container-login">
    <LoginForm />
  </div>
</template>

<script>
export default {
  name: "loginPage",
};
</script>

<style lang="scss">
.container-login {
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
