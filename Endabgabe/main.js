"use strict";
var magicalCanvas;
(function (magicalCanvas) {
    let editBox;
    //setting up arrays for every symbol that is empty for now; every symbol has its own type
    let symbols = [];
    //this is related to the bg, but not quite sure what it does with move here
    let day = true;
    let scale;
    let move = false;
    //initiating the very first page to choose either start or load, loading canvas, drawing style and the bar with symbols
    //also installing buttons, getting all elements by ID
    function handleLoad() {
        magicalCanvas.canvas = document.querySelector("canvas");
        magicalCanvas.crc2 = magicalCanvas.canvas.getContext("2d");
        editBox = document.getElementById("edit");
        let start = document.getElementById("start");
        let load = document.getElementById("load");
        start.addEventListener("click", chooseBG);
    }
    //getting elements by ID, putting the title page on not-visible, showing bg page
    //first defining the choice of day bg, then night by putting day on false
    function chooseBG() {
        let startScreen = document.getElementById("title-page");
        startScreen.style.display = "none";
        let bgScreen = document.getElementById("show-bg");
        bgScreen.style.display = "flex";
        let bgDay = document.getElementById("day");
        bgDay.addEventListener("click", function () {
            startPicture();
        });
        let bgNight = document.getElementById("night");
        bgNight.addEventListener("click", function () {
            day = false;
            startPicture();
        });
    }
    //not sure
    let type;
    //after choosing bg and drawing it, load canvas, hide choose bg page
    function startPicture() {
        let startScreen = document.getElementById("canvas");
        startScreen.style.display = "block";
        let bgScreen = document.getElementById("show-bg");
        bgScreen.style.display = "none";
        drawBG();
        //resizing the entire canvas
        scale = document.getElementById("scale");
        scale.addEventListener("input", resizeCanvas);
        //installing click listener to the symbols at mousedown and keeping the left mouse button pressed down
        //placeSymbol not super sure
        document.getElementById("moon")?.addEventListener("mousedown", function () {
            type = "moon";
            placeSymbol();
        });
        document.getElementById("cloud")?.addEventListener("mousedown", function () {
            type = "cloud";
            placeSymbol();
        });
        document.getElementById("house")?.addEventListener("mousedown", function () {
            type = "house";
            placeSymbol();
        });
        document.getElementById("star")?.addEventListener("mousedown", function () {
            type = "star";
            placeSymbol();
        });
        document.getElementById("sun")?.addEventListener("mousedown", function () {
            type = "sun";
            placeSymbol();
        });
        document.getElementById("tree")?.addEventListener("mousedown", function () {
            type = "tree";
            placeSymbol();
        });
        //left mouse button released, symbol won't move anymore
        magicalCanvas.canvas.addEventListener("mouseup", function () {
            move = false;
        });
        //mouse is moving, moving symbol with it, own function
        magicalCanvas.canvas.addEventListener("mousemove", moveSymbol);
        //finding symbol? checking if the event listener is being run when you click on a symbol, I guess
        magicalCanvas.canvas.addEventListener("click", findSymbol);
        //installing event listener for the editing box that pops up when clicking on a set symbol
        document.getElementById("clear")?.addEventListener("click", deletePicture);
        document.getElementById("close")?.addEventListener("click", closeEdit);
        document.getElementById("delete")?.addEventListener("click", deleteSymbol);
        document.getElementById("newPosition")?.addEventListener("click", rePositionSymbol);
        document.getElementById("rotate")?.addEventListener("input", rotateSymbol);
        document.getElementById("scale-symbol")?.addEventListener("input", scaleSymbol);
        document.getElementById("save")?.addEventListener("click", sendImage);
        update();
    }
    let selectedSymbol;
    //creating functions for the editing box 
    function scaleSymbol() {
        selectedSymbol.setScale = Number(document.getElementById("scale-symbol").value);
    }
    function rotateSymbol() {
        selectedSymbol.setRotation = Number(document.getElementById("rotate").value);
    }
    function rePositionSymbol() {
        type = "rePosition";
        move = true;
        closeEdit();
    }
    function deleteSymbol() {
        let index = symbols.indexOf(selectedSymbol);
        symbols.splice(index, 1);
        closeEdit();
    }
    function closeEdit() {
        selectedSymbol.selected = false;
        editBox.style.display = "none";
    }
    //complicated function, got to do with repositioning the symbol when you've already put it down 
    //cloud got an extra function
    function findSymbol(_event) {
        if (move == true && type == "rePosition") {
            move = true;
        }
        else {
            for (let i = 0; symbols.length > i; i++) {
                if (symbols[i].name == "cloud") {
                    if (_event.offsetX > (symbols[i].x) && _event.offsetX < (symbols[i].x + symbols[i].size)) {
                        if (_event.offsetY > (symbols[i].y - symbols[i].size / 2) && _event.offsetY < (symbols[i].y + symbols[i].size / 2)) {
                            if (selectedSymbol != undefined) {
                                selectedSymbol.selected = false;
                            }
                            selectedSymbol = symbols[i];
                            selectedSymbol.selected = true;
                            document.getElementById("rotate").value = "0";
                            document.getElementById("scale-symbol").value = "1";
                            editBox.style.display = "block";
                            editBox.style.left = (symbols[i].x + symbols[i].size) + "px";
                            editBox.style.top = (symbols[i].y + symbols[i].size) + "px";
                        }
                    }
                }
                else if (symbols[i].name == "tree" || symbols[i].name == "house") {
                    if (_event.offsetX > (symbols[i].x - symbols[i].size / 2) && _event.offsetX < (symbols[i].x + symbols[i].size)) {
                        if (_event.offsetY > (symbols[i].y - symbols[i].size * 1.25) && _event.offsetY < (symbols[i].y)) {
                            if (selectedSymbol != undefined) {
                                selectedSymbol.selected = false;
                            }
                            selectedSymbol = symbols[i];
                            selectedSymbol.selected = true;
                            document.getElementById("rotate").value = "0";
                            document.getElementById("scale-symbol").value = "1";
                            editBox.style.display = "block";
                            editBox.style.left = (symbols[i].x + symbols[i].size) + "px";
                            editBox.style.top = (symbols[i].y + symbols[i].size) + "px";
                        }
                    }
                }
                else {
                    if (_event.offsetX > (symbols[i].x - symbols[i].size) && _event.offsetX < (symbols[i].x + symbols[i].size)) {
                        if (_event.offsetY > (symbols[i].y - symbols[i].size) && _event.offsetY < (symbols[i].y + symbols[i].size)) {
                            if (selectedSymbol != undefined) {
                                selectedSymbol.selected = false;
                            }
                            selectedSymbol = symbols[i];
                            selectedSymbol.selected = true;
                            document.getElementById("rotate").value = "0";
                            document.getElementById("scale-symbol").value = "1";
                            editBox.style.display = "block";
                            editBox.style.left = (symbols[i].x + symbols[i].size) + "px";
                            editBox.style.top = (symbols[i].y + symbols[i].size) + "px";
                        }
                    }
                }
            }
        }
    }
    //deleting all symbols in their specific array, then drawing the bg new
    function deletePicture() {
        symbols = [];
        drawBG();
    }
    //creating variables with their respective type
    let moon;
    let cloud;
    let house;
    let star;
    let sun;
    let tree;
    //playing symbols in their specific array
    function placeSymbol() {
        if (type == "moon") {
            moon = new magicalCanvas.Moon();
            moon.name = "moon";
            symbols.push(moon);
        }
        if (type == "cloud") {
            cloud = new magicalCanvas.Cloud();
            cloud.name = "cloud";
            symbols.push(cloud);
        }
        if (type == "house") {
            house = new magicalCanvas.House();
            house.name = "house";
            symbols.push(house);
        }
        if (type == "star") {
            star = new magicalCanvas.Star();
            star.name = "star";
            symbols.push(star);
        }
        if (type == "sun") {
            sun = new magicalCanvas.Sun();
            sun.name = "sun";
            symbols.push(sun);
        }
        if (type == "tree") {
            tree = new magicalCanvas.Tree();
            tree.name = "tree";
            symbols.push(tree);
        }
        move = true;
    }
    //if clicked on symbol, the symbol is being attached to the mouses position and moves with it
    function moveSymbol(_event) {
        if (move == true) {
            if (type == "rePosition") {
                selectedSymbol.x = _event.offsetX;
                selectedSymbol.y = _event.offsetY;
            }
            if (type == "moon") {
                moon.x = _event.offsetX;
                moon.y = _event.offsetY;
            }
            if (type == "cloud") {
                cloud.x = _event.offsetX;
                cloud.y = _event.offsetY;
            }
            if (type == "house") {
                house.x = _event.offsetX;
                house.y = _event.offsetY;
            }
            if (type == "star") {
                star.x = _event.offsetX;
                star.y = _event.offsetY;
            }
            if (type == "sun") {
                sun.x = _event.offsetX;
                sun.y = _event.offsetY;
            }
            if (type == "tree") {
                tree.x = _event.offsetX;
                tree.y = _event.offsetY;
            }
            drawBG();
            drawSymbol();
        }
    }
    //easy loop, if i is larger than 0, add one symbol into the array
    function drawSymbol() {
        for (let i = 0; symbols.length > i; i++) {
            symbols[i].draw();
        }
    }
    function resizeCanvas() {
        let width = 500;
        let height = 300;
        magicalCanvas.canvas.width = width * Number(scale.value);
        magicalCanvas.canvas.height = height * Number(scale.value);
    }
    function drawBG() {
        magicalCanvas.crc2.clearRect(0, 0, magicalCanvas.canvas.width, magicalCanvas.canvas.height);
        if (day == true) {
            //sky
            magicalCanvas.crc2.fillStyle = "skyblue";
            magicalCanvas.crc2.fillRect(0, 0, magicalCanvas.canvas.width, magicalCanvas.canvas.height);
            //background
            magicalCanvas.crc2.fillStyle = "limegreen";
            magicalCanvas.crc2.strokeStyle = "limegreen";
            magicalCanvas.crc2.lineWidth = 2;
            magicalCanvas.crc2.beginPath();
            magicalCanvas.crc2.moveTo(0, magicalCanvas.canvas.height);
            magicalCanvas.crc2.lineTo(0, magicalCanvas.canvas.height - 50);
            magicalCanvas.crc2.quadraticCurveTo(magicalCanvas.canvas.width / 2, magicalCanvas.canvas.height - 250, magicalCanvas.canvas.width, magicalCanvas.canvas.height - 50);
            magicalCanvas.crc2.lineTo(magicalCanvas.canvas.width, magicalCanvas.canvas.height);
            magicalCanvas.crc2.closePath();
            magicalCanvas.crc2.fill();
            magicalCanvas.crc2.stroke();
            //foreground
            magicalCanvas.crc2.fillStyle = "forestgreen";
            magicalCanvas.crc2.strokeStyle = "forestgreen";
            magicalCanvas.crc2.beginPath();
            magicalCanvas.crc2.moveTo(0, magicalCanvas.canvas.height);
            magicalCanvas.crc2.lineTo(0, magicalCanvas.canvas.height - 150);
            magicalCanvas.crc2.bezierCurveTo(20, magicalCanvas.canvas.height - 150, 20, magicalCanvas.canvas.height - 20, magicalCanvas.canvas.width / 2, magicalCanvas.canvas.height - 20);
            magicalCanvas.crc2.bezierCurveTo(magicalCanvas.canvas.width - 20, magicalCanvas.canvas.height - 20, magicalCanvas.canvas.width - 20, magicalCanvas.canvas.height - 150, magicalCanvas.canvas.width, magicalCanvas.canvas.height - 150);
            magicalCanvas.crc2.lineTo(magicalCanvas.canvas.width, magicalCanvas.canvas.height);
            magicalCanvas.crc2.closePath();
            magicalCanvas.crc2.fill();
            magicalCanvas.crc2.stroke();
        }
        else {
            //sky
            magicalCanvas.crc2.fillStyle = "#252D3F";
            magicalCanvas.crc2.fillRect(0, 0, magicalCanvas.canvas.width, magicalCanvas.canvas.height);
            //background
            magicalCanvas.crc2.fillStyle = "#142615";
            magicalCanvas.crc2.strokeStyle = "#142615";
            magicalCanvas.crc2.lineWidth = 2;
            magicalCanvas.crc2.beginPath();
            magicalCanvas.crc2.moveTo(0, magicalCanvas.canvas.height);
            magicalCanvas.crc2.lineTo(0, magicalCanvas.canvas.height - 30);
            magicalCanvas.crc2.quadraticCurveTo(magicalCanvas.canvas.width / 2, magicalCanvas.canvas.height - 270, magicalCanvas.canvas.width, magicalCanvas.canvas.height - 30);
            magicalCanvas.crc2.lineTo(magicalCanvas.canvas.width, magicalCanvas.canvas.height);
            magicalCanvas.crc2.closePath();
            magicalCanvas.crc2.fill();
            magicalCanvas.crc2.stroke();
        }
    }
    function update() {
        drawBG();
        for (let i = 0; symbols.length > i; i++) {
            if (symbols[i].name == "star" || symbols[i].name == "sun" || symbols[i].name == "moon") {
                symbols[i].rescale();
            }
            if (symbols[i].name == "tree") {
                symbols[i].rotate();
            }
            if (symbols[i].name == "cloud") {
                symbols[i].move();
            }
            symbols[i].draw();
        }
        window.requestAnimationFrame(update);
    }
    ////////////////////////////
    let url = "https://eiabalance.herokuapp.com/";
    async function sendImage(_event) {
        console.log("Send order");
        let formData = new FormData();
        formData.append("draw", JSON.stringify(symbols));
        if (day == true) {
            formData.append("bg", "Day");
        }
        else {
            formData.append("bg", "Night");
        }
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        alert(responseText);
    }
    window.addEventListener("load", handleLoad);
})(magicalCanvas || (magicalCanvas = {}));
//# sourceMappingURL=main.js.map