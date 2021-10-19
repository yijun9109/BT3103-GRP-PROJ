<template>
    <h1> Thank you for using MyFridge </h1>
    <h2> Click on the Log Out Button to proceed</h2>
    <div id = "logout">
        <LogOutComponent />
    </div>
</template>

<script>
import LogOutComponent from "@/components/LogOut.vue"
export default {
    name : "LogOut",
    components: {
        LogOutComponent
    }
}
</script>

<style>

</style>