<template>
  <div class="limiter">
    <div class="container-login">
      <div class="warp-login">
        <RegisterForm />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "register",
};
</script>

<style lang="scss" scoped>
.limiter {
  width: 100%;
  margin: 0 auto;
  background-color: red;
}

.container-login {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  position: relative;
  background-color: #fff;
}

.wrap-login {
  width: 500px;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
}
</style>
