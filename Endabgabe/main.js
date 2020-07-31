"use strict";
var magicalCanvas;
(function (magicalCanvas) {
    let symbols = [];
    let day = true;
    let scale;
    let move = false;
    function handleLoad() {
        magicalCanvas.canvas = document.querySelector("canvas");
        magicalCanvas.crc2 = magicalCanvas.canvas.getContext("2d");
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
    function startPicture() {
        let startScreen = document.getElementById("canvas");
        startScreen.style.display = "block";
        let bgScreen = document.getElementById("show-bg");
        bgScreen.style.display = "none";
        drawBG();
        scale = document.getElementById("scale");
        scale.addEventListener("input", resizeCanvas);
        document.getElementById("moon")?.addEventListener("mousedown", function () {
            placeSymbol("moon");
        });
        magicalCanvas.canvas.addEventListener("mouseup", function () {
            move = false;
        });
        magicalCanvas.canvas.addEventListener("mousemove", moveSymbol);
    }
    let moon;
    function placeSymbol(_type) {
        move = true;
        if (_type == "moon") {
            moon = new magicalCanvas.Moon();
        }
    }
    function moveSymbol(_event) {
        if (move == true) {
            moon.x = _event.offsetX;
            moon.y = _event.offsetY;
            drawBG();
            moon.draw();
            console.log(moon);
        }
    }
    function resizeCanvas() {
        let width = magicalCanvas.canvas.width;
        let height = magicalCanvas.canvas.height;
        magicalCanvas.canvas.style.width = width * Number(scale.value) + "px";
        magicalCanvas.canvas.style.height = height * Number(scale.value) + "px";
        //drawBG();
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
    window.addEventListener("load", handleLoad);
})(magicalCanvas || (magicalCanvas = {}));
//# sourceMappingURL=main.js.map