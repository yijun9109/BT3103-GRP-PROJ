<template>
<!-- Basic intro for users who have not logged in -->
    <h1> This is the tips page </h1>
    <h2> View your suggested storage guides and recipe inspirations here! </h2>

    <div id = "logged" v-if="user">
        <!-- enable features for users who are logged in -->
    </div>
</template>

<script>
export default {
    name : "Tips"
}
</script>

<style>

</style>