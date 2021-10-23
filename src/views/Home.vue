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
            <a href="/Home">ALL ITEMS</a>  <!-- CHANGE THIS TO CORRECT LINK -->
        </div>

        <button class = "button" @click="showModal=true">ADD ITEM</button> <!-- how to get component to show up in centre -->
        <transition name = "fade" appear>
            <div class = "modal-overlay" v-if="showModal" @click="showModal=false"></div>
        </transition>

        <transition name = "slide" appear>
            <div class="modal" v-if="showModal" @offModal="toggle()">
                <!-- <h1>lorem ipsum</h1>
                <p>lorem ipsum</p> -->
                <AddItem/>
                <!-- <button class = "button" @click = "showModal=false">X</button> -->
            </div>
        </transition>
    </section>

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
        toggle() {
            this.showModal= false
        }
    }
}
</script>

<style scoped>

.button {
    /* new modal implementation */
    appearance: none;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;

    display: inline-block;
    padding: 15px 25px;
    background-image: linear-gradient(to right, #CC2E5D, #FF5858);
    border-radius: 30px;

    color: #FFF;
    font-size: 18px;
    font-weight: 700;
    box-shadow: 3px 3px rgba(0,0,0,0.2);
    filter: drop-shadow(1px 1px 2px #4a4a4a);
    transition: 0.4s ease-out;
    
    font-size: 25px;
    font-weight: bold;
    color: white;
    height: 50px;
    width: 200px;
    line-height: 6px;
    text-align: center;
}


&:hover {
    box-shadow: 6px 6px rgba(0,0,0,0.6);
}

.modal-overlay {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 98;
    background-color: rgba(0,0,0, 0.3);
}

.modal {
    position: fixed;
    top: 50%; left: 50%; 
    transform: translate(-50%, -50%);
    z-index: 99;
    width: 100%;
    max-width: 400px;
    background-color: #FFF;
    border-radius: 16px;
    padding: 25px;
}

.modal .button {
    width: 60px;
}

.fade-enter-active, .fade-leave-active {
    /* transition: opacity 1s; */
    transition: transform .5s opacity 1s;
}

.fade-enter, .fade-leave-to {
    opacity: 0; 
    transform: translateY(50%) translateX(50vw);
}

.slide-enter-active, .slide-leave-active {
    transition: transform .5s;
}

.slide-enter, .slide-leave-to {
    transform: translateY(-50%) translateX(100vw);
}

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
    box-shadow: 3px 3px rgba(0,0,0,0.2);
    filter:drop-shadow(1px 1px 2px #4a4a4a);
}

.btn:nth-child(1) { 
    /* setting for first button */
    margin-left: 280px;
    margin-right: 650px;
}

.btn a {
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