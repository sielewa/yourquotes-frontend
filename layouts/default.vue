<template>
  <div>
    <Navbar />
		<div class="background">
			<Nuxt />
		</div>
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
  background-color: $primary;
  font-family: "Source Sans Pro", sans-serif;
	color: white;
}

html {
  scroll-behavior: smooth;
  height: 100%;
}

.section {
  margin-top: 80px;
	background-color: rgba($primary, 0.8);
	width: 80%;
	padding-top: 10px;
	min-height: 90vh;
}

a {
  color: #fff;
  text-decoration: none;

  display: inline-block;
  position: relative;
}

.background {
	background-image: url('../assets/img/background.jpg');
	background-position: center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;

	display: flex;
	justify-content: center;
}

@media screen and (min-width: $screen-sm) {
	.section {
		width: 70%;
	}
}

@media screen and (min-width: $screen-md) {
	.section {
		width: 60%;
	}
}

@media screen and (min-width: $screen-lg) {
	.section {
		width: 50%;
	}
}
</style>
