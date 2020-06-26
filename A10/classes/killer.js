"use strict";
var A10;
(function (A10) {
    class Killer extends A10.Moveable {
        constructor(_size) {
            let killerPositionMin = new A10.Vector(50, 300);
            let killerPositionMax = new A10.Vector(300, 600);
            let X = Math.random() * (killerPositionMax.x - killerPositionMin.x) + killerPositionMin.x;
            let Y = Math.random() * (killerPositionMax.y - killerPositionMin.y) + killerPositionMin.y;
            let vX = Math.random() * (2 - (-2)) + (-2);
            let vY = Math.random() * (2 - (-2)) + (-2);
            super(_size, X, Y, vX, vY);
        }
        draw() {
            A10.crc2.strokeStyle = "black";
            A10.crc2.lineWidth = 3;
            A10.crc2.save();
            A10.crc2.translate(this.position.x, this.position.y);
            A10.crc2.beginPath();
            A10.crc2.moveTo(0, 0);
            A10.crc2.lineTo(40, 25);
            A10.crc2.stroke();
            A10.crc2.closePath();
            A10.crc2.restore();
            A10.crc2.strokeStyle = "black";
            A10.crc2.fillStyle = "brown";
            A10.crc2.save();
            A10.crc2.translate(this.position.x, this.position.y);
            A10.crc2.beginPath();
            A10.crc2.arc(0, 0, this.size, 0, 2 * Math.PI);
            A10.crc2.closePath();
            A10.crc2.fill();
            A10.crc2.stroke();
            A10.crc2.restore();
            A10.crc2.fillStyle = "#ff0000";
            A10.crc2.save();
            A10.crc2.translate(this.position.x, this.position.y);
            A10.crc2.beginPath();
            A10.crc2.arc(0, 0, this.size / 2, 0, 2 * Math.PI);
            A10.crc2.closePath();
            A10.crc2.fill();
            A10.crc2.stroke();
            A10.crc2.restore();
        }
    }
    A10.Killer = Killer;
})(A10 || (A10 = {}));
//# sourceMappingURL=killer.js.map