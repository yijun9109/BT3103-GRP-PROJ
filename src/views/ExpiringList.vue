<template>

    <h1>Expiring Soon</h1>

    <p>View all Items</p>
    <table id = "table" class="auto-index"> 
        <tr>
            <th>S/N</th>
            <th>Image</th>
            <th>Items</th>
            <th>Quantity</th>
            <th>Storage Location</th>
            <th>Expiry Date</th>
        </tr>
    </table><br><br>

    <a href="/AddModal">+ Add Item</a>

</template>

<script>
import firebaseApp from '../firebase.js';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

const db = getFirestore(firebaseApp)

export default {
    name: "ExpiringList",
    mounted() {
        async function display() {
            let idx = 1
            let z = await getDocs(collection(db, "Portfolio"))

            z.forEach((docs) => {
                let yy = docs.data()
                var table = document.getElementById("table")
                var row = table.insertRow(idx)

            // Name: a, Quantity: b, Expiry: c, Location: d, Image: e - saved fmor AddItem.vue
                var name = (yy.Name)
                var quant = (yy.Quantity)
                var exp = (yy.Expiry)
                var loc = (yy.Location)
                var img = (yy.Image)

                var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2); var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4); var cell6 = row.insertCell(5);
                var cell7 = row.insertCell(6);

                cell1.innerHTML = idx; cell2.innerHTML = name; 
                cell3.innerHTML = quant; cell4.innerHTML = exp;
                cell5.innerHTML = loc; cell6.innerHTML = img;

                var bu = document.createElement("button")
                bu.className = "bwt"
                bu.id = String(name)
                bu.innerHTML = "Delete"
                bu.onclick = function() {
                    deleteinstrument2(name)
                }
                cell7.appendChild(bu)
                idx ++
            })
        }
        display()
        async function deleteinstrument2(name) {
            var x = name
            alert("You are deleting " + x + ". Confirm?")
            await deleteDoc(doc(db, "Portfolio", x))
            console.log("Document successfully deleteed!", x);
            let tb = document.getElementById("table")
            while (tb.rows.length > 1) {
                tb.deleteRow(1)
            }
            display()
        }
    }
}
</script>

<style scoped>
</style>