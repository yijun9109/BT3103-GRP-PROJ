<template>
    <h2 class = "header"> EXPIRING SOON</h2>
    <div>
        <table id = "table">
            <tr>
                <th>Items</th>
                <th>Quantity</th>
                <th>Storage Location</th>
                <th>Expiry Date</th>
            </tr>
        </table>

        <button class='calendar' type = 'button' v-on:click='calendar()'> Link to my calendar </button> 
    </div>

    <div class = 'modal'>
        <div class = 'content'>
            <span class = 'close' v-on:click='close()'>&times;</span>
            <input type="radio" name = 'selection' id = 'apple'>
            <label for="apple"> Apple </label>
            <input type="radio" name = 'selection' id = 'outlook'>
            <label for="outlook">Outlook</label>
            <input type="radio" name = 'selection' id="google">
            <label for="google">Google</label>
        </div>
    </div>
</template>

<script>
import firebaseApp from "../firebase.js"
import { getFirestore } from "firebase/firestore"
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore"

const db = getFirestore(firebaseApp);

export default {
    methods: { 
        calendar() {
            this.modal.style.display = "block";
        },
        close() {
            this.modal.style.display = 'none';
        }
    },
    mounted() {
        async function display() {
            let foodList = await getDocs(collection(db, "Food"))
            let index = 1

            foodList.forEach((docs) => {
                let data = docs.data()
                var table = document.getElementById("table")
                var row = table.insertRow(index)

                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);
                var cell7 = row.insertCell(6);

                cell1.innerHTML = index;
                cell2.innerHTML = data.items;
                cell3.innerHTML = data.quantity;
                cell4.innerHTML = data.storage;
                cell5.innerHTML = data.expiryDate;

                var editBut = document.createElement('button')
                editBut.className = 'editbwt'
                editBut.id = String(data.items)
                editBut.innerHTML = 'Edit'
                editBut.onclick = function() { 
                    editItem(data.items)
                }

                var deleteBut = document.createElement('button')
                deleteBut.className = 'deletebwt'
                deleteBut.id = String(data.items)
                deleteBut.innerHTML = 'Edit'
                deleteBut.onclick = function() { 
                    let b = false
                    b = confirmDelete()
                    if (b) {
                        deleteItem(data.items)
                    }
                }

                cell6.appendChild(editBut)
                cell7.appendChild(editBut)

                function confirmDelete() {
                     return confirm("Are you sure you want to delete this item?")
                }

                async function editItem(item) {
                    this.$emit('edit', item)
                }

                async function deleteItem(item) {
                    var i = item 
                    await deleteDoc(doc(db, "Food", i))
                    let tb = document.getElementById("table")
                    while (tb.rows.length > 1) {
                       tb.deleteRow(1)
                    }
                }
            })
        }
        display()
    }
}

</script>

<style>

</style>