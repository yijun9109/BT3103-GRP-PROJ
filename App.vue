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
</style>
