<template>
  <div class="nav-container">
    <nav class="nav">
      <NuxtLink to="/">YourQuotes</NuxtLink>
      <div class="nav-bar">
        <font-awesome-icon class="menu_toggle_icon" icon="bars" />
      </div>
      <ul class="nav-links hide">
        <li class="list_item">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li v-if="isLoggedIn" class="list_item">
          <NuxtLink to="/add">Add Quote</NuxtLink>
        </li>

        <li v-if="isLoggedIn" class="list_item">
          <NuxtLink :to="`/users/${$store.getters['users/getUser'].username}`">
            My Profile
          </NuxtLink>
        </li>
        <li v-if="isLoggedIn" class="list_item">
          <a @click="logout">Log out</a>
        </li>
        <li v-if="!isLoggedIn" class="list_item">
          <NuxtLink :to="{ name: 'login' }">Log in</NuxtLink> /
          <NuxtLink :to="{ name: 'register' }">Register</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",

  data: () => ({
    username: "",
    isLoggedIn: false,
  }),

  mounted() {
    if (this.$store.getters["users/isLoggedIn"]) {
      this.isLoggedIn = true;
      this.username = this.$store.getters["users/getUser"];
    }

    const bar = document.querySelector(".nav-bar");
    const navLink = document.querySelector(".nav-links");

    bar.addEventListener("click", () => {
      navLink.classList.toggle("hide");
    });

    window.onscroll = function () {
      scrollFunction();
    };
  },

  methods: {
    async logout() {
      try {
        await this.$store.dispatch("users/logout");
        window.location = "/";
      } catch (err) {
        console.log(err);
      }
    },
    scrollFunction() {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        document.querySelector(".nav").style.padding = "30px 10px";
        document.querySelector(".nav-logo").style.fontSize = "25px";
      } else {
        document.querySelector(".nav").style.padding = "80px 10px";
        document.querySelector(".nav-logo").style.fontSize = "35px";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: white;
  cursor: pointer;
}

/* nav styles */

.navbar-container {
  background-color: $primary;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $primary;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 30px 30px;
  transition: 0.4s;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99;
}

.nav-logo {
  font-size: 1.8rem;
  color: white;
  padding-left: 20px;
}

.nav-bar {
  margin-right: 20px;
  cursor: pointer;

  & > svg {
    font-size: 2rem;
    color: white;
    background: none;
  }
}

.nav-links {
  list-style: none;
  position: fixed;
  text-align: center;
  width: 94%;
  top: 5rem;
  left: 18px;
  background-color: $primary;
  padding-bottom: 10px;

  & > li {
    padding-top: 10px;
  }
}

.hide {
  display: none;
}

@media (min-width: $screen-md) {
  .nav-links {
    display: block;
    position: static;
    width: auto;
    list-style: none;
    padding: 0;

    & > li {
      display: inline;
      padding-right: 25px;
    }
  }

  .nav-bar {
    display: none;
  }
}
</style>
