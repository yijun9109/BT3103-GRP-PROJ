<template>    
  <div id = "firebaseui-auth-container"></div>
</template>

<script>
import firebase from '@/uifire.js'
import 'firebase/compat/auth';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

export default {
    name:"Login",

  mounted() {
      
        var ui = firebaseui.auth.AuthUI.getInstance();
        console.log("first ui is",ui)
        if (!ui){
        ui = new firebaseui.auth.AuthUI(firebase.auth());
        console.log("Inside !ui is ", ui)
        }      

        var uiConfig = {
            signInSuccessUrl: '/Home',
            // signInSuccessUrl: this.$router.replace("/profile"),
            signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,

            ]
            
        };
        ui.start("#firebaseui-auth-container", uiConfig)    

}
}
</script>

<style scoped>
#page {
    background-color: orange;
}
#firebaseui-auth-container{
    margin-top: 50px;
    margin-bottom: 50px;
    background-color: white;
}

</style>