<template>

    <!-- might need to do sth about min-width and max-width for differing screensizes -->
    <!-- best at 1580x812 -->
    <div class = "bg">

    <div class = "board">
        <h2>xx ITEMS EXPIRING SOON</h2>
        <!-- <img src = "../assets/warning.png"> not working -->

        <div class = "btn listview">
            <a href="/ExpiringList">LIST VIEW</a>  <!-- CHANGE THIS TO CORRECT LINK -->
        </div>


        <div class = "tile first">
            <p>Apple</p>
        </div>
        <div class = "tile second">
            <p>Raw Beef</p>
        </div>
        <div class = "tile third">
            <p>Milk</p>
        </div>
        <div class = "tile fourth">
            <p>More..</p>
        </div>

    </div>


    <section class = "drawers">
        <div class ="btn">
            <a href="/AddModal">ALL ITEMS</a>  <!-- CHANGE THIS TO CORRECT LINK -->
        </div>

        <div class ="btn" >
            <a href="/AddModal">ADD ITEMS</a> 
        </div>

        <button @click="add()">ADD TEST</button> <!-- how to get component to show up in centre -->
    </section>

    </div>
    <!-- <h1> This is the home page </h1> -->

    <div class = 'container' v-if="showModal">
        <AddItem/>
    </div>

</template>

<script>

import AddItem from "../components/AddItem.vue"

export default {
    name: "Home",
    components: {
        AddItem
    },
    data() {
        return {
            showModal: false,
        }
    }, 
    methods: {
        add() {
            this.showModal = true;
        }
    }
}
</script>

<style scoped>

.bg {
    background-image: url("../assets/fridge.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 85vh;
    text-align: center;
    vertical-align: middle;
    padding: 20px;
    margin-left: -10px;
    margin-right: -40px;
    overflow: hidden; /* prevents scrolling down the abyss of nothginness */
}

.btn {
    background-color: #FBD09E;
    height: 50px;
    width: 200px;
    border-radius: 30px;
    text-align: center;
    float: left;
    filter:drop-shadow(1px 1px 2px #4a4a4a)
}

.btn:nth-child(1) { 
    /* setting for first button */
    margin-left: 280px;
    margin-right: 650px;
}

button { /* for add test 2 temp button */
    background-color: #FBD09E;
    height: 50px;
    width: 200px;
    border-radius: 30px;
    text-align: center;
    float: left;
    filter: drop-shadow(1px 1px 2px #4a4a4a);
    border: 0px;
    font-size: 25px;
    font-weight: bold;
    color: white;
    line-height: 50px;
}

.listview {
    float: right;
    margin-top: -60px;
    margin-right: 40px;
}

.btn a {
    font-size: 25px;
    font-weight: bold;
    color: white;
    line-height: 50px;
}

.drawers {
    box-sizing: border-box;
    width: 100%;
    height: 30%;
    padding-top: 150px;
}

h2 {
    color: #c41d1d;
    padding-top: 25px;
    padding-left: 30px;
    font-size: 30px;
}

.board {
    background-color: rgba(255,255,255,0.5); /* 0.5 opacity for bg only */
    height: 400px;
    width: 90%;
    border-radius: 20px;
    margin: auto;
    text-align: left;
    padding-left:
}

.tile {
    height: 250px;
    width: 250px;
    background-color: white;
    margin: 50px;
    margin-top: 30px;
    overflow: hidden;
    float: left;
}

.tile:nth-child(1) {
    margin-left: 100px;
}

.tile p {
    color: black;
    font-size: 30px;
    margin-top: 180px;
    text-align: center;
}

/* HOVER DIM */
.tile:after {
    /* add button for edit and delete */
    /* content: 'Expiring on 15/10/21 \a Storage Location: Fridge';
    white-space: pre;
    color:#fff;
    position: absolute;
    width:100%; height:100%; */ /* why does it not take the whole width of tile but almost the whole screen */
    /*top:0; left:0;
    background:rgba(0,0,0,0.6);
    opacity:0;
    transition: all 0.5s;
    -webkit-transition: all 0.5s; */
}

.tile:hover:after {
    /* opacity: 1; */
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh; 
}

</style>