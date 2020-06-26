"use strict";
var A10;
(function (A10) {
    class Anti extends A10.Moveable {
        constructor(_size) {
            let antiPositionMin = new A10.Vector(0, 350);
            let antiPositionMax = new A10.Vector(200, 600);
            let X = Math.random() * (antiPositionMax.x - antiPositionMin.x) + antiPositionMin.x;
            let Y = Math.random() * (antiPositionMax.y - antiPositionMin.y) + antiPositionMin.y;
            let vX = Math.random() * (2 - (-2)) + (-2);
            let vY = Math.random() * (2 - (-2)) + (-2);
            super(_size, X, Y, vX, vY);
        }
        draw() {
            A10.crc2.strokeStyle = "Yellow";
            A10.crc2.lineWidth = 3;
            A10.crc2.save();
            A10.crc2.translate(this.position.x, this.position.y);
            A10.crc2.beginPath();
            A10.crc2.moveTo(-7, 0);
            A10.crc2.lineTo(-7, -25);
            A10.crc2.moveTo(-7, -25);
            A10.crc2.lineTo(-17, -35);
            A10.crc2.moveTo(-15, -23);
            A10.crc2.lineTo(-25, -33);
            A10.crc2.moveTo(7, 0);
            A10.crc2.lineTo(7, -25);
            A10.crc2.moveTo(7, -25);
            A10.crc2.lineTo(17, -35);
            A10.crc2.moveTo(15, -23);
            A10.crc2.lineTo(25, -33);
            A10.crc2.stroke();
            A10.crc2.closePath();
            A10.crc2.restore();
        }
    }
    A10.Anti = Anti;
})(A10 || (A10 = {}));
//# sourceMappingURL=anti.js.map