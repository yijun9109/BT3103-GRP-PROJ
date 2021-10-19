<template>
    <h1> Welcome to MyFridge </h1>
    <h2> Log in or register to continue</h2> 
    <!-- <LogIn /> -->
    <div id = "login">
        <LogInComponent />
    </div>

</template>

<script>
import LogInComponent from "@/components/LogIn.vue"
export default {
    name : "LogIn",
    components: {
        LogInComponent
    },
    // methods: {
    //     signIn() => {

    //     }
    // }

}
</script>

<style scoped>
#login {
    background-color: aqua;
    margin-top: 50px;
    margin-bottom: 50px;
}
</style>