<template>
    <h2 class = "header"> EXPIRING SOON</h2>
    <div>
        <table id = "table" style="text-align: center">
            <tr>
                <th>Items</th>
                <th>Quantity</th>
                <th>
                    <div>
                        <button id="dropdown" v-on:click="filterUpdate()"> Storage Location: {{selected}} </button>
                        <div class="dropdown-content" v-if="dropdown">
                            <input type="radio" v-model="selected" name="None" id="none">
                            <label for="none">None</label>
                            <input type="radio" v-model="selected" name="Fridge" id="fridge" >
                            <label for="fridge">Fridge</label>
                            <input type="radio" v-model="selected" name="Freezer" id="freezer">
                            <label for="freezer"> Freezer </label>
                            <input type="radio" v-model="selected" name="Cabinet" id="cabinet">
                            <label for="cabinet">Cabinet</label>
                        </div>
                    </div>
                </th>
                <th>Expiry Date</th>
            </tr>
        </table>

        <button class='calendar' type = 'button' v-on:click='calendar()'> Link to my calendar </button> 
    </div>

    <div class = 'modal' v-if="showModal">
        <div class = 'content'>
            <header id = 'modal-header'>
                <slot name="header">
                    Choose your calendar!
                </slot>
                <button class = 'close' v-on:click='close()'>X</button>
            </header>
            <div id="modal-body">
                <input type="radio" name = 'selection' id = 'apple'>
                <label for="apple"> Apple </label>
                <input type="radio" name = 'selection' id = 'outlook'>
                <label for="outlook">Outlook</label>
                <input type="radio" name = 'selection' id="google">
                <label for="google">Google</label>
            </div>
        </div>
    </div>
</template>

<script>
import firebaseApp from "../firebase.js"
import { getFirestore } from "firebase/firestore"
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore"

const db = getFirestore(firebaseApp);

export default {
    data(){
        return{
            dropdown: false,
            selected: "None",
            showModal: false,
        }
    },
    methods: { 
        filterUpdate(){
            this.dropdown = !this.dropdown
        },
        calendar() {
            this.showModal = true;
        },
        close() {
            this.showModal = false;
        },
    },

    mounted() {
        async function display() {
            var foodList;
            foodList = await getDocs(collection(db, "Food"))
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
                cell2.innerHTML = data.item;
                cell3.innerHTML = data.quantity;
                cell4.innerHTML = data.storage;
                cell5.innerHTML = data.expiry;

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
                deleteBut.innerHTML = 'delete'
                deleteBut.onclick = function() { 
                    let b = false
                    b = confirmDelete()
                    if (b) {
                        deleteItem(data.items)
                    }
                }

                cell6.appendChild(editBut)
                cell7.appendChild(deleteBut)

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