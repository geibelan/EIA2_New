"use strict";
var A11;
(function (A11) {
    class Blood extends A11.Moveable {
        constructor(_size) {
            let cellsPositionMin = new A11.Vector(0, 0);
            let cellsPositionMax = new A11.Vector(350, 600);
            let X = Math.random() * (cellsPositionMax.x - cellsPositionMin.x) + cellsPositionMin.x;
            let Y = Math.random() * (cellsPositionMax.y - cellsPositionMin.y) + cellsPositionMin.y;
            super(_size, X, Y, -1, 1);
        }
        draw() {
            A11.crc2.globalAlpha = 0.4;
            A11.crc2.fillStyle = "blue";
            A11.crc2.save();
            A11.crc2.translate(this.position.x, this.position.y);
            A11.crc2.beginPath();
            A11.crc2.arc(0, 0, this.size, 0, 2 * Math.PI);
            A11.crc2.closePath();
            A11.crc2.fill();
            A11.crc2.restore();
        }
    }
    A11.Blood = Blood;
})(A11 || (A11 = {}));
//# sourceMappingURL=blood.js.map