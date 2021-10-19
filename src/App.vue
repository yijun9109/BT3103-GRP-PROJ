<template>
  <div id="nav">
    <router-link to= "/Home">Home</router-link>
    <router-link to="/editlist">Edit List</router-link>
    <router-link to= "/Tips">Tips</router-link>
    <router-link to= "/ShoppingList">Shopping List</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav {
  padding: 30px;
  text-align: center;
  background: rgb(241, 220, 150);
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
