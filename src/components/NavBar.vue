<template>
  <div id = "logged" v-if = "user">
      <div id = "nav">
          <router-link to="/Home"> Home </router-link> |
          <router-link to="/Tips"> Tips </router-link> |
          <router-link to="/ShoppingList"> ShoppingList </router-link> |
          <LogOut />
      </div>
  </div>
</template>

<script>
import {getAuth, onAuthStateChanged} from "firebase/auth";
import LogOut from '@/components/LogOut.vue'
export default {
    name:"NavBar",

    components: {
        LogOut,
    },

    data( {
        return {
            user:false,
        }
    },

    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user)=> {
            if(user) {
                this.user = user;
            }
        })
    }
}
</script>

<style scoped>
#nav {
    padding: 30px;
    text-align: end;
    background-color: orange;
}

#nav a {
    font-weight: bold;
    color: aliceblue;
}

#nav a.router-link-exact-active {
    color: skyblue;
}
</style>