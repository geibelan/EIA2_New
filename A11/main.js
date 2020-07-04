"use strict";
var A11;
(function (A11) {
    A11.updateObjects = [];
    A11.updateCorona = [];
    A11.bodyCells = [];
    A11.antibodys = [];
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        A11.canvas = document.querySelector("canvas");
        A11.crc2 = A11.canvas.getContext("2d");
        A11.canvas.addEventListener("click", attackCoronaCell);
        drawBackground();
        for (let i = 0; i < 10; i++) {
            let body = new A11.Body(40);
            body.draw();
            A11.updateObjects.push(body);
            A11.bodyCells.push(body);
        }
        for (let i = 0; i < 1; i++) {
            let corona = new A11.Corona(30);
            corona.draw();
            A11.updateCorona.push(corona);
        }
        for (let i = 0; i < 3; i++) {
            let killer = new A11.Killer(30);
            killer.draw();
            A11.updateObjects.push(killer);
        }
        for (let i = 0; i < 3; i++) {
            let anti = new A11.Anti(10);
            anti.draw();
            A11.updateObjects.push(anti);
            A11.antibodys.push(anti);
        }
        for (let i = 0; i < 50; i++) {
            let blod = new A11.Blood(7);
            blod.draw();
            A11.updateObjects.push(blod);
        }
        window.requestAnimationFrame(update);
    }
    function attackCoronaCell(_event) {
        let X = _event.clientX;
        let Y = _event.clientY;
        for (let i = 0; A11.updateCorona.length > i; i++) {
            if (X < A11.updateCorona[i].position.x + 30 && X > A11.updateCorona[i].position.x - 30)
                if (Y < A11.updateCorona[i].position.y + 30 && Y > A11.updateCorona[i].position.y - 30) {
                    let antiTarget = A11.updateCorona[i];
                    for (let i2 = 0; A11.antibodys.length > i2; i2++) {
                        A11.antibodys[i2].setTarget(antiTarget, i);
                    }
                    setTimeout(function () {
                        A11.updateCorona.splice(i, 1);
                    }, 600);
                }
        }
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
        A11.crc2.fillStyle = A11.crc2.createPattern(pattern.canvas, 'repeat');
        A11.crc2.fillRect(0, 0, A11.canvas.width, A11.canvas.height);
    }
    function update() {
        A11.crc2.clearRect(0, 0, A11.canvas.width, A11.canvas.height);
        drawBackground();
        for (let i = 0; i < A11.updateObjects.length; i++) {
            A11.updateObjects[i].move();
            A11.updateObjects[i].draw();
        }
        A11.crc2.globalAlpha = 1;
        for (let i = 0; i < A11.updateCorona.length; i++) {
            A11.updateCorona[i].move();
            A11.updateCorona[i].draw();
        }
        window.requestAnimationFrame(update);
    }
})(A11 || (A11 = {}));
//# sourceMappingURL=main.js.map