"use strict";
var A11;
(function (A11) {
    class Body extends A11.Moveable {
        constructor(_size) {
            let bodyPositionMin = new A11.Vector(0, 0);
            let bodyPositionMax = new A11.Vector(350, 550);
            let X = Math.random() * (bodyPositionMax.x - bodyPositionMin.x) + bodyPositionMin.x;
            let Y = Math.random() * (bodyPositionMax.y - bodyPositionMin.y) + bodyPositionMin.y;
            super(_size, X, Y, 0, 0);
        }
        draw() {
            A11.crc2.lineWidth = 3;
            A11.crc2.strokeStyle = "black";
            A11.crc2.fillStyle = "pink";
            A11.crc2.save();
            A11.crc2.translate(this.position.x, this.position.y);
            A11.crc2.beginPath();
            A11.crc2.arc(0, 0, this.size, 0, 2 * Math.PI);
            A11.crc2.closePath();
            A11.crc2.fill();
            A11.crc2.stroke();
            A11.crc2.restore();
            A11.crc2.lineWidth = 1;
            A11.crc2.fillStyle = "red";
            A11.crc2.save();
            A11.crc2.translate(this.position.x, this.position.y);
            A11.crc2.beginPath();
            A11.crc2.arc(0, 0, this.size / 4, 0, 2 * Math.PI);
            A11.crc2.closePath();
            A11.crc2.fill();
            A11.crc2.stroke();
            A11.crc2.restore();
            A11.crc2.fillStyle = "blue";
            A11.crc2.save();
            A11.crc2.translate(this.position.x + 15, this.position.y + 17);
            A11.crc2.beginPath();
            A11.crc2.arc(0, 0, 4, 0, 2 * Math.PI);
            A11.crc2.closePath();
            A11.crc2.fill();
            A11.crc2.stroke();
            A11.crc2.restore();
            A11.crc2.fillStyle = "purple";
            A11.crc2.save();
            A11.crc2.translate(this.position.x - 15, this.position.y - 10);
            A11.crc2.beginPath();
            A11.crc2.arc(0, 0, 4, 0, 2 * Math.PI);
            A11.crc2.closePath();
            A11.crc2.fill();
            A11.crc2.stroke();
            A11.crc2.restore();
        }
    }
    A11.Body = Body;
})(A11 || (A11 = {}));
//# sourceMappingURL=body.js.map