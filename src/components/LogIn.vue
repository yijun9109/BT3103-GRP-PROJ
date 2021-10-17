<template>
    <!-- <button id = "LogInButton" @click = "signIn()"> Log In </button> -->
  <div id = "firebaseui-auth-container"></div>
</template>

<script>
import firebase from '@/uifire.js'
import 'firebase/compat/auth';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

export default {
    name: "LogIn",

    mounted() {
        var ui = firebase.auth.AuthUI.getInstance();
        if(!ui) {
            ui = new firebaseui.auth.AuthUI(firebase.auth());
        }

        var uiConfig = {
            signInSucessUrl: '/Home',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
            ]
        };
        ui.start('#firebaseui-auth-container', uiConfig)
    }
}
</script>

<style scoped>
#firebaseui-auth-container{
    margin-top: 50px;
    margin-bottom: 50px;
    background-color: coral;
}

</style>