<template>
  <NavBar />
  <router-view />
  <!-- <div id="nav"> -->
    
    
    <!-- <router-link to= "/Home">Home</router-link>
    <router-link to= "/Tips">Tips</router-link>
    <router-link to= "/ShoppingList">Shopping List</router-link>
    <router-link to= "/LogIn"> Log in</router-link> -->

    <!-- <div id="logo">
        <a href="/App">
            <div id="logo-img" alt="Logo image"></div>
        </a>
    </div> -->

    <!-- need to add a button for login and also display the user name when logged in under "nav" -->

  <!-- </div> -->
  <!-- <router-view /> -->
</template>

<script>
import NavBar from "@/components/NavBar.vue"
export default {
  name: "App",
  components: {
    NavBar,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
/* #nav {
  padding-top: 30px;
  padding-bottom:30px;
  padding-right: 50px;
  text-align: right;
  background: rgb(241, 220, 150);
  margin-top: -10px;
  margin-left: -10px;
  width: 100%;
} */
#logo-img {
  background: url('/src/assets/icon.png') no-repeat;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  /* width: 20%; */
  /* width: 30px;
  height: 30px; */
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding-left: 10px;
  padding-right: 10px;
}
#nav a.router-link-exact-active {
  color: aliceblue;
  
}
</style>