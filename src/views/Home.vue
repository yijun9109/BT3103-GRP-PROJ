<template>
<!-- Basic intro for users who have not logged in -->
    <h1> This is the home page </h1>
    <h2> View your expiring products here! </h2>

    <div id = "logged" v-if="user">
        <!-- Add summary for users who are logged in -->
    </div>
</template>

<script>
export default {
    name: "Home"
}
</script>

<style>

</style>