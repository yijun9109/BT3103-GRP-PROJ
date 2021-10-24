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
                    <option value="Fridge">Fridge</option>
                    <option value="Freezer">Freezer</option>
                    <option value="Cabinet">Cabinet</option>
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
import { collection, query, doc, setDoc, where, getDocs }  from 'firebase/firestore'
const db = getFirestore(firebaseApp);

export default {
    methods: {
        async saveData() {
            var item = document.getElementById('item1').value
            var quantity = parseInt(document.getElementById('quantity1').value)
            var expiry = document.getElementById('expiry1').value.toLowerCase()
            var storage = document.getElementById('storage1').value

            const food = collection(db, "Food");
            const q = query(food, where('item', '==', item), where('expiry', '==', expiry), where('storage', '==', storage))
            const que = await getDocs(q)

            que.forEach((docs) => {
                let data = docs.data()
                quantity += data.quantity;
            })


            try {
                const docRef = await setDoc(doc(db, "Food", item), {
                    item: item, quantity: quantity, expiry: expiry, storage: storage
                })
                document.getElementById('input').reset();
                console.log(docRef)
                this.$emit("added")
            }
            catch (error) {
                console.error("Error adding item: " + item)
                console.log(error)
            }
        }
    }
}

</script>

<style>

</style>