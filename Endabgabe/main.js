"use strict";
var magicalCanvas;
(function (magicalCanvas) {
    let editBox;
    let moons = [];
    let clouds = [];
    let houses = [];
    let stars = [];
    let suns = [];
    let trees = [];
    let symbols = [];
    let day = true;
    let scale;
    let move = false;
    function handleLoad() {
        magicalCanvas.canvas = document.querySelector("canvas");
        magicalCanvas.crc2 = magicalCanvas.canvas.getContext("2d");
        editBox = document.getElementById("edit");
        let start = document.getElementById("start");
        let load = document.getElementById("load");
        start.addEventListener("click", chooseBG);
    }
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
    let type;
    function startPicture() {
        let startScreen = document.getElementById("canvas");
        startScreen.style.display = "block";
        let bgScreen = document.getElementById("show-bg");
        bgScreen.style.display = "none";
        drawBG();
        scale = document.getElementById("scale");
        scale.addEventListener("input", resizeCanvas);
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
        magicalCanvas.canvas.addEventListener("mouseup", function () {
            move = false;
        });
        magicalCanvas.canvas.addEventListener("mousemove", moveSymbol);
        magicalCanvas.canvas.addEventListener("click", findSymbol);
        document.getElementById("clear")?.addEventListener("click", deletePicture);
        document.getElementById("close")?.addEventListener("click", closeEdit);
        document.getElementById("delete")?.addEventListener("click", deleteSymbol);
        document.getElementById("newPosition")?.addEventListener("click", rePositionSymbol);
        document.getElementById("rotate")?.addEventListener("input", rotateSymbol);
        document.getElementById("scale-symbol")?.addEventListener("input", scaleSymbol);
        update();
    }
    let selectedSymbol;
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
    function deletePicture() {
        symbols = [];
        drawBG();
    }
    let moon;
    let cloud;
    let house;
    let star;
    let sun;
    let tree;
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
    function drawSymbol() {
        for (let i = 0; symbols.length > i; i++) {
            symbols[i].draw();
        }
    }
    function resizeCanvas() {
        let width = magicalCanvas.canvas.width;
        let height = magicalCanvas.canvas.height;
        magicalCanvas.canvas.style.width = width * Number(scale.value) + "px";
        magicalCanvas.canvas.style.height = height * Number(scale.value) + "px";
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
        /*
                for (let i: number = 0; stars.length > i; i++) {
                    stars[i].rescale();
                    stars[i].draw();
                }
        
                for (let i: number = 0; suns.length > i; i++) {
                    suns[i].rescale();
                    suns[i].draw();
                }
        
        
                for (let i: number = 0; moons.length > i; i++) {
                    moons[i].rescale();
                    moons[i].draw();
                }
        
                for (let i: number = 0; trees.length > i; i++) {
                    trees[i].rotate();
                    trees[i].draw();
                }
        
                for (let i: number = 0; clouds.length > i; i++) {
                    clouds[i].move();
                    clouds[i].draw();
                }*/
        window.requestAnimationFrame(update);
    }
    window.addEventListener("load", handleLoad);
})(magicalCanvas || (magicalCanvas = {}));
//# sourceMappingURL=main.js.map