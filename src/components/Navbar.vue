<template>
    <div id="nav">
        <a href="/" class="brand">myfridge</a>
        <!-- <p class="brand">myfridge</p> -->
        <router-link to= "/Home">Home</router-link>
        <router-link to= "/Tips">Tips</router-link>
        <router-link to= "/ShoppingList">Shopping List</router-link>
        <router-link to= "/LogOut" v-if="this.LoggedIn">Logout</router-link>
        <router-link to= "/LogIn" v-else>Login</router-link>
    </div>

</template>

<script>
export default {
  name: "navi",
  mounted() {
      this.setupFirebase();
  },
  data() {
      return {
          loggedIn: false,
          currentUser: false,
          url: false,
          id: false
      }
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

#nav {
  padding-top: 30px;
  padding-bottom:30px;
  padding-right: 50px;
  text-align: right;
  /* background: rgb(241, 220, 150); */
  background: white;
  margin-top: -10px;
  margin-left: -10px;
  width: 100%;
  position: relative;
}

a {
    text-decoration: none; /* removes the underline in the hyperlinks*/
}

#nav .brand {
    position: absolute;
    font-size: 180%;
    font-weight: bolder;
    /* top: -5px;  */ /* for use if p tag for brandname */
    top: 20px;
    left: 30px;
}

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
  /* color: #2c3e50; */
  color: #FFA235;
  padding-left: 10px;
  padding-right: 10px;
}

#nav a.router-link-exact-active {
  /* color: aliceblue; */
  color: #2c3e50;

  
}

</style>
