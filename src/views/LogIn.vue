<template>
    <h1> this is the log in page </h1>
    <!-- <LogIn /> -->
    <div id = "login">
        <LogIn />
    </div>

</template>

<script>
import LogIn from "@/components/LogIn.vue"
export default {
    name : "LogIn",
    components: {
        LogIn
    }

}
</script>

<style scoped>
#login {
    background-color: aqua;
    margin-top: 50px;
    margin-bottom: 50px;
}
</style>