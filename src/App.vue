<template>
    <div id="app">
        <navi></navi>
        <router-view></router-view>
    </div>
</template>


<script>
import navi from './components/Navbar.vue'

export default {
  name: "App",
  components: {
      navi
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
