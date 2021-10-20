<template>

    <!-- might need to do sth about min-width and max-width for differing screensizes -->
    <!-- best at 1580x812 -->
    <div class = "bg">

    <div class = "board">
        <h2>xx ITEMS EXPIRING SOON</h2>
        <!-- <img src = "../assets/warning.png"> not working -->

        <div class = "btn listview">
            <p>LIST VIEW</p>
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
            <p>ALL ITEMS</p>
        </div>

        <div class ="btn">
            <p>ADD ITEMS</p> 
                <!-- <AddItem/> -->

        </div>
    </section>

    </div>
    <!-- <h1> This is the home page </h1> -->
</template>

<script>
// import AddItem from '../components/AddItem.vue'


export default {
    name: "Home",
    components: {
        // AddItem
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

.listview {
    float: right;
    margin-top: -60px;
    margin-right: 40px;
}

.btn p {
    font-size: 25px;
    font-weight: bold;
    color: white;
    padding-bottom: 20px;
    line-height: 5px;
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

</style>