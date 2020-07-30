"use strict";
var magicalCanvas;
(function (magicalCanvas) {
    let canvas;
    let crc2;
    function handleLoad() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
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
        bgDay.addEventListener("click", startPicture);
    }
    function startPicture() {
        let startScreen = document.getElementById("canvas");
        startScreen.style.display = "block";
        let bgScreen = document.getElementById("show-bg");
        bgScreen.style.display = "none";
        drawBG();
    }
    function drawBG() {
        //sky
        crc2.fillStyle = "skyblue";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        //background
        crc2.fillStyle = "limegreen";
        crc2.strokeStyle = "limegreen";
        crc2.lineWidth = 2;
        crc2.beginPath();
        crc2.moveTo(0, canvas.height);
        crc2.lineTo(0, canvas.height - 30);
        crc2.quadraticCurveTo(canvas.width / 2, canvas.height - 170, canvas.width, canvas.height - 30);
        crc2.lineTo(canvas.width, canvas.height);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        //foreground
        crc2.fillStyle = "forestgreen";
        crc2.strokeStyle = "forestgreen";
        crc2.beginPath();
        crc2.moveTo(0, canvas.height);
        crc2.lineTo(0, canvas.height - 70);
        crc2.bezierCurveTo(20, canvas.height - 70, 20, canvas.height - 20, canvas.width / 2, canvas.height - 20);
        crc2.bezierCurveTo(canvas.width - 20, canvas.height - 20, canvas.width - 20, canvas.height - 70, canvas.width, canvas.height - 70);
        crc2.lineTo(canvas.width, canvas.height);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    window.addEventListener("load", handleLoad);
})(magicalCanvas || (magicalCanvas = {}));
//# sourceMappingURL=main.js.map