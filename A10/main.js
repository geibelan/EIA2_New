"use strict";
var A10;
(function (A10) {
    let updateObjects = [];
    let updateCorona = [];
    A10.bodyCells = [];
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        A10.canvas = document.querySelector("canvas");
        A10.crc2 = A10.canvas.getContext("2d");
        drawBackground();
        for (let i = 0; i < 4; i++) {
            let body = new A10.Body(40);
            body.draw();
            updateObjects.push(body);
            A10.bodyCells.push(body);
        }
        for (let i = 0; i < 10; i++) {
            let corona = new A10.Corona(30);
            corona.draw();
            updateCorona.push(corona);
        }
        for (let i = 0; i < 3; i++) {
            let killer = new A10.Killer(30);
            killer.draw();
            updateObjects.push(killer);
        }
        for (let i = 0; i < 10; i++) {
            let anti = new A10.Anti(10);
            anti.draw();
            updateObjects.push(anti);
        }
        for (let i = 0; i < 50; i++) {
            let blod = new A10.Blood(7);
            blod.draw();
            updateObjects.push(blod);
        }
        window.requestAnimationFrame(update);
    }
    function drawBackground() {
        let pattern = document.createElement('canvas').getContext('2d');
        pattern.canvas.width = 40;
        pattern.canvas.height = 20;
        pattern.fillStyle = 'darkred';
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 10);
        pattern.lineTo(10, 10);
        pattern.lineTo(20, 0);
        pattern.lineTo(30, 0);
        pattern.lineTo(40, 10);
        pattern.lineTo(30, 20);
        pattern.lineTo(20, 20);
        pattern.lineTo(10, 10);
        pattern.stroke();
        A10.crc2.fillStyle = A10.crc2.createPattern(pattern.canvas, 'repeat');
        A10.crc2.fillRect(0, 0, A10.canvas.width, A10.canvas.height);
    }
    function update() {
        A10.crc2.clearRect(0, 0, A10.canvas.width, A10.canvas.height);
        drawBackground();
        for (let i = 0; i < updateObjects.length; i++) {
            updateObjects[i].move();
            updateObjects[i].draw();
        }
        A10.crc2.globalAlpha = 1;
        for (let i = 0; i < updateCorona.length; i++) {
            updateCorona[i].move();
            updateCorona[i].draw();
        }
        window.requestAnimationFrame(update);
    }
})(A10 || (A10 = {}));
//# sourceMappingURL=main.js.map