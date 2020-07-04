"use strict";
var A11;
(function (A11) {
    class Killer extends A11.Moveable {
        constructor(_size) {
            let killerPositionMin = new A11.Vector(50, 300);
            let killerPositionMax = new A11.Vector(300, 600);
            let X = Math.random() * (killerPositionMax.x - killerPositionMin.x) + killerPositionMin.x;
            let Y = Math.random() * (killerPositionMax.y - killerPositionMin.y) + killerPositionMin.y;
            let vX = Math.random() * (2 - (-2)) + (-2);
            let vY = Math.random() * (2 - (-2)) + (-2);
            super(_size, X, Y, vX, vY);
        }
        draw() {
            A11.crc2.strokeStyle = "black";
            A11.crc2.lineWidth = 3;
            A11.crc2.save();
            A11.crc2.translate(this.position.x, this.position.y);
            A11.crc2.beginPath();
            A11.crc2.moveTo(0, 0);
            A11.crc2.lineTo(40, 25);
            A11.crc2.stroke();
            A11.crc2.closePath();
            A11.crc2.restore();
            A11.crc2.strokeStyle = "black";
            A11.crc2.fillStyle = "brown";
            A11.crc2.save();
            A11.crc2.translate(this.position.x, this.position.y);
            A11.crc2.beginPath();
            A11.crc2.arc(0, 0, this.size, 0, 2 * Math.PI);
            A11.crc2.closePath();
            A11.crc2.fill();
            A11.crc2.stroke();
            A11.crc2.restore();
            A11.crc2.fillStyle = "#ff0000";
            A11.crc2.save();
            A11.crc2.translate(this.position.x, this.position.y);
            A11.crc2.beginPath();
            A11.crc2.arc(0, 0, this.size / 2, 0, 2 * Math.PI);
            A11.crc2.closePath();
            A11.crc2.fill();
            A11.crc2.stroke();
            A11.crc2.restore();
        }
    }
    A11.Killer = Killer;
})(A11 || (A11 = {}));
//# sourceMappingURL=killer.js.map