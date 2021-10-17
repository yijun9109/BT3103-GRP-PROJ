<template>
    <!-- Basic intro for users who have not logged in -->
    <h1> This is the shopping list page </h1>
    <h2> Plan for your shopping trips here! </h2>

    <div id = "logged" v-if="user">
        <!-- Enable features for users who are logged in -->
    </div>
</template>

<script>
export default {
    name : "ShoppingList"
}
</script>

<style>

</style>