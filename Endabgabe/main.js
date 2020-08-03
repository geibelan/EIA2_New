"use strict";
var magicalCanvas;
(function (magicalCanvas) {
    //load data that has been saved saved and reloaded from the database
    let loadData;
    //box that gives functions to edit placed symbols on canvas
    let editBox;
    //setting up an array for the symbols that is empty for now; every symbol has its own Class
    let symbols = [];
    //this is related to the bg
    let day = true;
    //input element with which one can change the size of the canvas
    let scale;
    //symbol cannot be moved (drag and drop)
    let move = false;
    //initiating the very first page to choose either start or load, getting canvas, drawing style 
    //also installing buttons, getting all elements by ID
    function handleLoad() {
        magicalCanvas.canvas = document.querySelector("canvas");
        magicalCanvas.crc2 = magicalCanvas.canvas.getContext("2d");
        editBox = document.getElementById("edit");
        let start = document.getElementById("start");
        let load = document.getElementById("load");
        start.addEventListener("click", chooseBG);
        load.addEventListener("click", loadFromDB);
    }
    //getting elements by ID, putting the title page on not-visible, showing bg page
    //decision between choosing the day or night bg; if one chooses night then day will be false
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
    //name of symbol from mousedown on symbol bar
    let type;
    //After showing the canvas and the bar with symbols, the bg is drawn. Hide choose bg page
    function startPicture() {
        let startScreen = document.getElementById("canvas");
        startScreen.style.display = "block";
        let bgScreen = document.getElementById("show-bg");
        bgScreen.style.display = "none";
        let loadScreen = document.getElementById("show-load");
        loadScreen.style.display = "none";
        drawBG();
        //resizing the entire canvas, own function
        scale = document.getElementById("scale");
        scale.addEventListener("input", resizeCanvas);
        //installing click listener to the symbols at mousedown and keeping the left mouse button pressed down
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
        //Drag and Drop as in: https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event
        //mouse is moving, moving symbol with it, own function
        magicalCanvas.canvas.addEventListener("mousemove", moveSymbol);
        //left mouse button released on Canvas, symbol won't move anymore
        magicalCanvas.canvas.addEventListener("mouseup", function () {
            move = false;
        });
        //check if symbol is being clicked on, own function
        magicalCanvas.canvas.addEventListener("click", findSymbol);
        document.getElementById("clear")?.addEventListener("click", deletePicture);
        //installing event listener for the editing box that pops up when clicking on a set symbol
        document.getElementById("close")?.addEventListener("click", closeEdit);
        document.getElementById("delete")?.addEventListener("click", deleteSymbol);
        document.getElementById("newPosition")?.addEventListener("click", rePositionSymbol);
        document.getElementById("rotate")?.addEventListener("input", rotateSymbol);
        document.getElementById("scale-symbol")?.addEventListener("input", scaleSymbol);
        //saves the symbols array and bg picture, own function
        document.getElementById("save")?.addEventListener("click", savePicture);
        update();
    }
    //clicked on symbol that is marked red
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
        let index = symbols.indexOf(selectedSymbol); //index is needed to remove symbol from array https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
        symbols.splice(index, 1); //method to remove symbol from symbols array https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
        closeEdit();
    }
    function closeEdit() {
        selectedSymbol.selected = false;
        editBox.style.display = "none";
    }
    //checks if you click on a symbol
    //if symbol is clicked, open edit box and highlight symbol
    //symbols have different methods to check if clicked
    function findSymbol(_event) {
        if (move == true) {
            move = false; //drop symbol on new position after edit
        }
        else {
            for (let i = 0; symbols.length > i; i++) { //goes through every symbol to check if clicked on
                if (symbols[i].name == "cloud") {
                    if (_event.offsetX > (symbols[i].x) && _event.offsetX < (symbols[i].x + symbols[i].size)) { //check if click was inbetween left and right end of symbol 
                        if (_event.offsetY > (symbols[i].y - symbols[i].size / 2) && _event.offsetY < (symbols[i].y + symbols[i].size / 2)) { //check if click was inbetween upper and lower end of symbol 
                            if (selectedSymbol != undefined) {
                                selectedSymbol.selected = false; //previously selected symbol is deselected
                            }
                            selectedSymbol = symbols[i]; //set selected symbol to clicked on symbol
                            selectedSymbol.selected = true; //new symbol is highlighted
                            editBox.style.display = "block"; //show edit box
                            editBox.style.left = (symbols[i].x + symbols[i].size) + "px"; //position of edit box relative to symbol
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
    //deleting all symbols in their specific array so symbols won't be drawn in the update function
    //then drawing the bg anew
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
    //place symbols in the symbols array 
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
        if (move == true) { //false if left mouse button released on Canvas
            if (type == "rePosition") {
                selectedSymbol.x = _event.offsetX; //_event.offsetX is current position of mouse on canvas
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
        }
    }
    function resizeCanvas() {
        let width = 500;
        let height = 300;
        magicalCanvas.canvas.width = width * Number(scale.value);
        magicalCanvas.canvas.height = height * Number(scale.value);
    }
    //canvas cleared, draw chosen bg
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
    //bg is drawn
    //adds specific animation to the symbol accordingly as long as there's more than 0 symbols in the array
    //symbols are drawn on canvas
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
        window.requestAnimationFrame(update); //function that calls upon update after every frame 
    }
    //See https://github.com/JirkaDellOro/EIA2-Inverted/blob/master/X00_Code/L07_Database/CocktailBar/Client/CocktailBar.ts
    //And the coresponding lecture
    let url = "https://eiabalance.herokuapp.com/";
    async function savePicture(_event) {
        console.log("Send");
        let formData = new FormData();
        formData.append("draw", JSON.stringify(symbols)); //save symbols array
        if (day == true) { //save chosen bg
            formData.append("bg", "Day");
        }
        else {
            formData.append("bg", "Night");
        }
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        alert("Saved: " + responseText);
    }
    async function loadFromDB(_event) {
        let formData = new FormData();
        formData.append("load", "all");
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        loadPicture(responseText);
    }
    //hide title page show saved pictures
    function loadPicture(_load) {
        loadData = JSON.parse(_load); //data of loaded pictures
        let startScreen = document.getElementById("title-page");
        startScreen.style.display = "none";
        let loadScreen = document.getElementById("show-load");
        loadScreen.style.display = "block";
        for (let i = 0; i < loadData.length; i++) { //loop trough every loaded picture
            let image = document.createElement("div"); //create div for image
            image.innerHTML = "Load Image " + (i + 1) + " | " + loadData[i]["bg"];
            image.setAttribute("id", i + "");
            loadScreen.appendChild(image); //add div to parent div (load screen)
            image.addEventListener("click", continuePicture);
        }
    }
    //reload selected picture, redraw saved bg and redraw symbols with saved data
    //startPicture similar as if new picture
    function continuePicture(_event) {
        let index = Number(_event.target.getAttribute("id"));
        let load = loadData[index];
        if (load["bg"] == "Day") {
            day = true;
        }
        else {
            day = false;
        }
        startPicture();
        let loadedSymbols = JSON.parse(load["draw"]);
        for (let i = 0; loadedSymbols.length > i; i++) {
            if (loadedSymbols[i].name == "star") {
                star = new magicalCanvas.Star();
                star.name = "star";
                star.rotateRight = loadedSymbols[i].rotateRight;
                star.rotation = loadedSymbols[i].rotation;
                star.scale = loadedSymbols[i].scale;
                star.scaleUp = loadedSymbols[i].scaleUp;
                star.setRotation = loadedSymbols[i].setRotation;
                star.setScale = loadedSymbols[i].setScale;
                star.size = loadedSymbols[i].size;
                star.x = loadedSymbols[i].x;
                star.y = loadedSymbols[i].y;
                symbols.push(star);
            }
            if (loadedSymbols[i].name == "moon") {
                moon = new magicalCanvas.Moon();
                moon.name = "moon";
                moon.rotateRight = loadedSymbols[i].rotateRight;
                moon.rotation = loadedSymbols[i].rotation;
                moon.scale = loadedSymbols[i].scale;
                moon.scaleUp = loadedSymbols[i].scaleUp;
                moon.setRotation = loadedSymbols[i].setRotation;
                moon.setScale = loadedSymbols[i].setScale;
                moon.size = loadedSymbols[i].size;
                moon.x = loadedSymbols[i].x;
                moon.y = loadedSymbols[i].y;
                symbols.push(moon);
            }
            if (loadedSymbols[i].name == "sun") {
                sun = new magicalCanvas.Sun();
                sun.name = "sun";
                sun.rotateRight = loadedSymbols[i].rotateRight;
                sun.rotation = loadedSymbols[i].rotation;
                sun.scale = loadedSymbols[i].scale;
                sun.scaleUp = loadedSymbols[i].scaleUp;
                sun.setRotation = loadedSymbols[i].setRotation;
                sun.setScale = loadedSymbols[i].setScale;
                sun.size = loadedSymbols[i].size;
                sun.x = loadedSymbols[i].x;
                sun.y = loadedSymbols[i].y;
                symbols.push(sun);
            }
            if (loadedSymbols[i].name == "tree") {
                tree = new magicalCanvas.Tree();
                tree.name = "tree";
                tree.rotateRight = loadedSymbols[i].rotateRight;
                tree.rotation = loadedSymbols[i].rotation;
                tree.scale = loadedSymbols[i].scale;
                tree.scaleUp = loadedSymbols[i].scaleUp;
                tree.setRotation = loadedSymbols[i].setRotation;
                tree.setScale = loadedSymbols[i].setScale;
                tree.size = loadedSymbols[i].size;
                tree.x = loadedSymbols[i].x;
                tree.y = loadedSymbols[i].y;
                symbols.push(tree);
            }
            if (loadedSymbols[i].name == "cloud") {
                cloud = new magicalCanvas.Cloud();
                cloud.name = "cloud";
                cloud.rotateRight = loadedSymbols[i].rotateRight;
                cloud.rotation = loadedSymbols[i].rotation;
                cloud.scale = loadedSymbols[i].scale;
                cloud.scaleUp = loadedSymbols[i].scaleUp;
                cloud.setRotation = loadedSymbols[i].setRotation;
                cloud.setScale = loadedSymbols[i].setScale;
                cloud.size = loadedSymbols[i].size;
                cloud.x = loadedSymbols[i].x;
                cloud.y = loadedSymbols[i].y;
                symbols.push(cloud);
            }
            if (loadedSymbols[i].name == "house") {
                house = new magicalCanvas.House();
                house.name = "house";
                house.rotateRight = loadedSymbols[i].rotateRight;
                house.rotation = loadedSymbols[i].rotation;
                house.scale = loadedSymbols[i].scale;
                house.scaleUp = loadedSymbols[i].scaleUp;
                house.setRotation = loadedSymbols[i].setRotation;
                house.setScale = loadedSymbols[i].setScale;
                house.size = loadedSymbols[i].size;
                house.x = loadedSymbols[i].x;
                house.y = loadedSymbols[i].y;
                symbols.push(house);
            }
        }
    }
    window.addEventListener("load", handleLoad);
})(magicalCanvas || (magicalCanvas = {}));
//# sourceMappingURL=main.js.map