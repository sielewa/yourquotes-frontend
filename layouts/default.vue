<template>
  <div>
    <Navbar />
    <Nuxt />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  border: 0;
}

body {
  max-width: 100%;
  height: 100%;
  background-color: #ffff;
  font-family: "Source Sans Pro", sans-serif;
}

html {
  scroll-behavior: smooth;
  height: 100%;
}

.section {
  margin-top: 90px;
}

a {
  color: #fff;
  text-decoration: none;

  display: inline-block;
  position: relative;
}

a:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #fff;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

a:hover:after {
  width: 100%;
  left: 0;
}
</style>
