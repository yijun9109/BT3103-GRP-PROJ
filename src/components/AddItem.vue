<template>
<!-- failed modal code -->
  <!-- <div class="container mt-5"> -->
    <!-- <div> -->
      <!-- <b-button v-b-modal.modal-1>button text</b-button>  -->

      <!-- <b-modal id="modal-1" title="Add Item"> -->
        <!-- <p class="my-4">Content goes here...</p> -->
        <!-- form for name, quantity, expiry date, dropdown menu for storage location. then save/cancel buttons -->
      <!-- </b-modal> -->
    <!-- </div>     -->
  <!-- </div> -->


    <form id="myform">

    <br>    
        <h2> ADD A NEW ITEM </h2> <br>

            <div class = "formli">

            <label for="name">Item Name: </label>
            <input type="text" id = "name" required="" placeholder="Milk"> <br><br>

            <label for="quant">Item Quantity: </label>
            <input type="text" id = "quant" required="" placeholder="2"> <br><br>

            <label for="expdate">Expiry Date: </label>
            <input type="date" id = "expdate" required=""> <br><br>

            <label for="loc">Storage Location: </label>
            <select id="loc">
                <option disabled value="">Choose a location</option>
                <option value="Fridge">Fridge</option>
                <option value="Freezer">Freezer</option>
                <option value="Cabinet">Cabinet</option>
            </select> <br><br>

            <label for="img">Select image: </label>
            <input type="file" id="img" name="img" accept="image/*">
            <br><br>

        </div>

        <div>
            <span class="save">
                <button id ="savebutton" type="button" v-on:click="savetofs()">Save</button>
            </span>

            <span class="cancel">
                <button id="cancelbutton" type="button" @click="childParent()">Cancel</button>
                <!-- the emit doesnt work child (add item comp) to parent (home view) -->
            </span>

        </div>
        <br>
    </form>


</template>

<script>
import firebaseApp from '../firebase.js';
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
const db = getFirestore(firebaseApp);

  export default {
    name: "AddItem",
    emits: ["offModal"],
    methods: {
        async savetofs() {
            var a = document.getElementById("name").value
            var b = document.getElementById("quant").value
            var c = document.getElementById("expdate").value
            var d = document.getElementById("loc").value
            var e = document.getElementById("img").value
            alert("Saving item: " + b + "x " + a)
            try {
                const docRef = await setDoc(doc(db, "Portfolio", a), {
                    Name: a, Quantity: b, Expiry: c, Location: d, Image: e
                })
                console.log(docRef)
                document.getElementById('myform').reset(); 
                this.$emit("added") 
            } catch(error) {
                console.error("Error adding document: ", error);
            }
        }, 
        goToSummary() {
            this.$router.push('/Summary');  // older
            // need to fix this part when i get the router hyperlink to summary

        },
        childParent() { // test
            this.$emit("offModal");
            // or tell parent in Home that showModal = false?? wld be better i think
        }

    }
    , data() {
      return {
      
      }
    }
  }
</script>



<style scoped>
/* b-button {
    color:blue;
    width: 500px;
    height: 150px;
} */

* { 
    /* new modal implementation */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
    /* new modal implementation */
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
}


h2 { 
    /* background-color: rgb(129,184,99); */
}

.formli {
    display: inline-block;
    text-align: left;
}

form {
    text-align: center;
    align-items: center;
    margin: auto;
    border: 1px solid #2c3e50;
    border-radius: 20px;
    /* width: 30%;  -- if full page used */
    width: 100%; /* to fit inside modal */
}

input {
    height: 20px;
}

input:hover {
    /* box-shadow: 3px 3px #FBD09E; */
    border-radius: 5px;
}

select {
    height: 25px;
}

select:hover {
    border-radius: 5px;
}


.save + .cancel {
    text-align: center;
    margin: 10px;
}

button {
    background-color: #90B3F5;
    color: white;
    height: 30px;
    width: 100px;
    border-radius: 30px;
    border: 0px;
    font-weight: bold;
    text-transform: uppercase;
}

#savebutton:hover {
    background-color: #5a7dbd;
}

#cancelbutton {
    background-color: #B5D5E3;
}

#cancelbutton:hover {
    background-color: #6a8e9e;
}



</style>
