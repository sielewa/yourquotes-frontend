<template>
  <div class="nav-container">
    <nav class="nav">
      <a class="nav-logo" href="#">Logo</a>
      <div class="nav-bar">
        <font-awesome-icon class="menu_toggle_icon" icon="bars"/>
      </div>
      <ul class="nav-links hide">
        <li class="list_item">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li class="list_item">
          <NuxtLink to="/add">Add Quote</NuxtLink>
        </li>

        <li v-if="isLoggedIn" class="list_item">
          <NuxtLink :to="`/users/${$store.getters['users/getUser']}`"> My Profile </NuxtLink>

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

  export default{
    name: 'Navbar',

    data: () => ({
      username: '',
      isLoggedIn: false
    }),

    mounted(){
      if (this.$store.getters['users/isLoggedIn']){
          this.isLoggedIn = true
          this.username = this.$store.getters['users/getUser']
      }

      const bar = document.querySelector('.nav-bar');
      const navLink = document.querySelector('.nav-links');

      bar.addEventListener('click', () => {
        navLink.classList.toggle('hide');
      });
    },

    methods:{
      async logout(){
        try {
          await this.$store.dispatch('users/logout');
          window.location = '/'

        } catch (err) {
          console.log(err);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  * {
    margin:0;
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
    padding: 20px 20px;
    background-color: $primary;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .nav-logo{
    font-size: 1.8rem;
    color: white;
    padding-left: 20px;
  }

  .nav-bar{
    margin-right: 20px;
    cursor: pointer;

    & > svg {
      font-size: 2rem;
      color: white;
      background: none;
    }
  }

  .nav-links{
    list-style: none;
    position: fixed;
    text-align: center;
    width: 94%;
    top: 5rem;
    left: 18px;
    background-color: $primary;
    padding-bottom: 10px;
    
    & > li{
      padding-top: 10px;
    }
  }

  .hide{
    display: none;
  }

  @media (min-width: $screen-md){
    .nav-links{
      display: block;
      position: static;
      width: auto;
      list-style: none;
      padding: 0;

      & > li{
        display: inline;
        padding-right: 25px;
      }
    }

    .nav-bar{
      display: none;
    }
  }


</style>