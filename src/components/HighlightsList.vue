<template>
    <h2 class = "header"> EXPIRING SOON</h2>
    <div>
        <table id = "table" style="text-align: center">
            <tr>
                <th> Index </th>
                <th>Items</th>
                <th>Quantity
                    <button id='quantityorder' v-on:click='quantityOrder()'> V </button>
                </th>
                <th>
                    <div>
                        <button id="dropdown" v-on:click="filterUpdate()"> Storage Location: {{selected}} </button>
                        <div class="dropdown-content" v-if="dropdown">
                            <input type="radio" v-model="selected" name="Store" id="non" value="None">
                            <label for="none">None</label>
                            <input type="radio" v-model="selected" name="Store" id="fridge" value="Fridge" >
                            <label for="fridge">Fridge</label>
                            <input type="radio" v-model="selected" name="Store" id="freezer" value="Freezer">
                            <label for="freezer"> Freezer </label>
                            <input type="radio" v-model="selected" name="Store" id="cabinet" value="Cabinet">
                            <label for="cabinet">Cabinet</label>
                        </div>
                    </div>
                </th>
                <th>Expiry Date
                    <button id='expiryorder' v-on:click='expiryOrder()'> I </button>
                </th>
            </tr>
        </table>
    </div>
    
    <button class='linktocalendar' type = 'button' onclick='document.getElementById("calendar").style.display = "block"'> Export Calendar </button> 

    <div id='calendar' class = 'modal'>
        <div class = 'content'>
            <header id = 'modal-header'>
                <slot name="header">
                    Choose your calendar!
                </slot>
                <button class = 'close' onclick="document.getElementById('calendar').style.display = 'none'">X</button>
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

    <div id="delete" class="modal">
        <span onclick="document.getElementById('delete').style.display = none" class="close" title="Close Modal">&times;</span>
        <form class="modal-content">
            <div class='content' id='deleteContent'>
                <h1> Delete Item? </h1>
                <p> Do you want to delete this item? </p>

                <div class='confirmation'>
                    <button type="button" id="cancel"> Cancel </button>
                    <button type='button' id='confirm'  > Delete </button>
                </div>
            </div>
        </form>
    </div>

    <div>
        <button type='button' v-on:click="run()">  Click to filter </button>
        <button type='button' v-on:click='calendar()'>Cal Filter</button>
    </div>
</template>

<script>
import firebaseApp from "../firebase.js"
import { getFirestore } from "firebase/firestore"
import { collection, getDocs, doc, deleteDoc, query, where} from "firebase/firestore"
import * as ics from 'ics'

const db = getFirestore(firebaseApp);

export default {
    data(){
        return{
            dropdown: false,
            selected: "None",
            orderByDict: {},
            orderByItems: false,
            orderByQuantity: 0, 
            orderByStorage: false,
            orderByExpiry: 0
        }
    },
    methods: { 
        filterUpdate(){
            this.dropdown = !this.dropdown
        },

        quantityOrder() {
            this.orderByQuantity += 1;
            if (this.orderByQuantity % 3 == 1) {
                this.orderByDict['quantity'] = 'asc'
            } else if (this.orderByQuantity % 3 == 2) {
                this.orderByDict['quantity'] = 'desc'
            } else {
                delete this.orderByDict.quantity;
            }
            this.run()
        },

        expiryOrder() {
            this.orderByExpiry += 1;
            if (this.orderByExpiry % 3 == 1) {
                this.orderByDict['expiry'] = 'asc'
            } else if (this.orderByExpiry % 3 == 2) {
                this.orderByDict['expiry'] = 'desc'
            } else {
                delete this.orderByDict.expiry;
            }
            this.run()
        },

        clearEntry() {
            var table = document.getElementById('table')
            while (table.rows.length > 1) {
                table.deleteRow(1)
            }
        },

        calendar() {
            var calEntry = []
            var calarr = [];
            var table = document.getElementById('table')
            for (let i = 1; i < table.rows.length; i++) {
                let cells = table.rows[i].cells;
                for (let c = 0; c < 5; c++) {
                    calarr.push(cells[c].innerHTML)
                }
                let date = String(calarr[4])
                let moddate = date.split('-').map(function(x) {
                    return parseInt(x, 10)
                })
                moddate.push(0)
                moddate.push(0)
                let name = "You have " + calarr[2] + " " + calarr[1] + " expiring today!"
                let entry = {
                    title: name,
                    start: moddate,
                    duration: {hours: 24, minutes: 0}
                }
                calEntry.push(entry)
                calarr = []
            }
            console.log(calEntry)
            ics.createEvents(calEntry, (error, value) => {
                if (error) { 
                    console.log(error)
                }

                console.log(value)
            });
                   
        },

        async run() { 
            this.clearEntry()
            var foodList;
            if (this.selected == "None") {
                foodList = await getDocs(collection(db, "Food"))
            } else {
                const q = query(collection(db, "Food"), where("storage", "==", this.selected))
                foodList = await getDocs(q)
            }

            //let dictSize = Object.keys(this.orderByDict).length
            //if (dictSize > 0) { 
            //    const q = query(collection(db, "Food"), orderBy("expiry"))   
            //    foodList = await getDocs(q)
            //} else {
            //    foodList = await getDocs(collection(db, "Food"))
            //}
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
                deleteBut.onclick = async function() { 
                    document.getElementById('delete').style.display = 'block'
                    document.getElementById('confirm').onclick = function() {
                        this.deleteItem(data.item)
                        console.log("deleted")
                        document.getElementById('delete').style.display = 'none'
                    }

                }

                cell6.appendChild(editBut)
                cell7.appendChild(deleteBut)
                index += 1

                async function editItem(item) {
                    this.$emit('edit', item)
                }
            })
        },

        async deleteItem(item) {
            var i = item 
            await deleteDoc(doc(db, "Food", i))
            let tb = document.getElementById("table")
            while (tb.rows.length > 1) {
                tb.deleteRow(1)
             }
         },
    },

    mounted() { 
        this.run()
    }
}

</script>

<style>
#calendar {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
     top: 0;
    width: 100%; /* Full width */
     height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
     background-color: #474e5d;
     padding-top: 50px;
}
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: #474e5d;
  padding-top: 50px;
}

</style>