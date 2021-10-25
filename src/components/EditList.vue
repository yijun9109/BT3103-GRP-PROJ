<template>
    <form id = "input">
        <h2 class = 'subheader'>Add Items</h2>
            <div class = 'inForm'>
                <label for="item"> Item Name </label>
                <input type="text" id = 'item1' required = "" placeholder="Please enter item name">
                <label for="quantity">Item Quantity</label>
                <input type="number" id="quantity1" required="" placeholder="Please enter item quantity">
                <label for="expiry">Expiry Date</label>
                <input type="date" id = "expiry1" required="" placeholder="dd/mm/yyyy">
                <label for="storage"> Storage Location </label>
                <select id="storage1">
                    <option disabled value="">Please select one</option>
                    <option>Fridge</option>
                    <option>Freezer</option>
                    <option>Cabinet</option>
                </select>
            </div>

            <div class = 'save'>
                <button class = 'savebutton' type = 'button' v-on:click ='saveData()'> Save </button>
            </div>
    </form>
</template>

<script>
import firebaseApp from '../firebase.js'
import { getFirestore } from 'firebase/firestore'
import { doc, setDoc }  from 'firebase/firestore'
const db = getFirestore(firebaseApp);

export default {
    name: "EditList",

    methods: {
        async SaveData() {
            var item = document.getElementById('item1').value
            var quantity = document.getElementById('quantity1').value
            var expiry = document.getElementById('expiry1').value
            var storage = document.getElementById('storage1').value

            try {
                const docRef = await setDoc(doc(db, "Portfolio", item), {
                    Item: item, Quantity: quantity, Expiry_Date: expiry, Storage_Location: storage
                })
                console.log(docRef)
                document.getElementsById('input').reset();
                this.$emit("edited")
            }
            catch (error) {
                console.error("Error editing item: " + item)
            }
        }
    }
}
</script>

<style>

</style>