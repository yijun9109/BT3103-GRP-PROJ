<template>
    <h1> This is where you edit/add to List. </h1>
    <HighlightsList :key="refreshComp"/>
    <AddList @added="change"/>
</template>

<script>
import AddList from '@/components/AddList.vue'
import HighlightsList from '@/components/HighlightsList.vue'
export default {
    Name: "Edit",

    components: {
        AddList,
        HighlightsList
    },

    data() {
        return {
            refreshComp: 0
        }
    },

    methods: {
        change() { 
            this.refreshComp += 1
        }
    }

}
</script>

<style>

</style>