<template>
  <div id="nav">
    <router-link to = "/Home"> Home </router-link>
    <router-link to = "/Tips"> Tips </router-link>
    <router-link to = "/ShoppingList"> Shopping List </router-link>
  </div>
  <router-view/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
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
</style>
