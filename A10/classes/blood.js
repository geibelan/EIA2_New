"use strict";
var A10;
(function (A10) {
    class Blood extends A10.Moveable {
        constructor(_size) {
            let cellsPositionMin = new A10.Vector(0, 0);
            let cellsPositionMax = new A10.Vector(350, 600);
            let X = Math.random() * (cellsPositionMax.x - cellsPositionMin.x) + cellsPositionMin.x;
            let Y = Math.random() * (cellsPositionMax.y - cellsPositionMin.y) + cellsPositionMin.y;
            super(_size, X, Y, -1, 1);
        }
        draw() {
            A10.crc2.globalAlpha = 0.4;
            A10.crc2.fillStyle = "blue";
            A10.crc2.save();
            A10.crc2.translate(this.position.x, this.position.y);
            A10.crc2.beginPath();
            A10.crc2.arc(0, 0, this.size, 0, 2 * Math.PI);
            A10.crc2.closePath();
            A10.crc2.fill();
            A10.crc2.restore();
        }
    }
    A10.Blood = Blood;
})(A10 || (A10 = {}));
//# sourceMappingURL=blood.js.map