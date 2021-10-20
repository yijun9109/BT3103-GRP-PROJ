<template>
  <div class="container mt-5">
    <div>
      <b-button v-b-modal.modal-1>Add Item</b-button> <!-- button text !-->

      <b-modal id="modal-1" title="Add Item">
        <p class="my-4">Content goes here...</p>
        <!-- form for name, quantity, expiry date, dropdown menu for storage location. then save/cancel buttons -->
      </b-modal>
    </div>    
  </div>
</template>

<script>
  export default {
    name: "AddItem",
    mounted() {
        this.setupFirebase()
    },

    data() {
      return {
      
      }
    }
  }
</script>

<style>
b-button {
    color:blue;
    width: 500px;
    height: 150px;
}

</style>