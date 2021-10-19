<template>
  <div id = "container" >
      <!-- <div id = "logged" v-if = "user"> -->
      <div id = "nav">
          <router-link to="/Home"> Home </router-link> 
          <router-link to="/Tips"> Tips </router-link> 
          <router-link to="/ShoppingList"> ShoppingList </router-link> 
          <router-link to = "/LogIn"> Log In </router-link>
           <!-- <LogInComponent /> -->
          
         
          
        </div>
        <!-- <div id = "login">
            <LogInComponent />
        </div> -->

      <div id = "nav" v-if = "user">
          <router-link to="/Home"> Home </router-link> 
          <router-link to="/Tips"> Tips </router-link> 
          <router-link to="/ShoppingList"> ShoppingList </router-link> 
          <router-link to="/LogOut"> Log Out </router-link> 
          <!-- <LogOut /> -->
      </div>
  </div>
</template>

<script>
import {getAuth, onAuthStateChanged} from "firebase/auth";
//import LogOut from '@/components/LogOut.vue'
// import LogInComponent from '@/components/LogIn.vue'
export default {
    name:"NavBar",

    components: {
       // LogOut,
        // LogInComponent,
    },

    data(){
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
    background-color:rgb(247, 183, 65);
}

#nav a {
    font-weight: bold;
    color: white;
}

#nav a.router-link-exact-active {
    color: rgb(119, 192, 221);
}
</style>