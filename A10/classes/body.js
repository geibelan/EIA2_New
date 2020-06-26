"use strict";
var A10;
(function (A10) {
    class Body extends A10.Moveable {
        constructor(_size) {
            let bodyPositionMin = new A10.Vector(0, 0);
            let bodyPositionMax = new A10.Vector(350, 550);
            let X = Math.random() * (bodyPositionMax.x - bodyPositionMin.x) + bodyPositionMin.x;
            let Y = Math.random() * (bodyPositionMax.y - bodyPositionMin.y) + bodyPositionMin.y;
            super(_size, X, Y, 0, 0);
        }
        draw() {
            A10.crc2.lineWidth = 3;
            A10.crc2.strokeStyle = "black";
            A10.crc2.fillStyle = "pink";
            A10.crc2.save();
            A10.crc2.translate(this.position.x, this.position.y);
            A10.crc2.beginPath();
            A10.crc2.arc(0, 0, this.size, 0, 2 * Math.PI);
            A10.crc2.closePath();
            A10.crc2.fill();
            A10.crc2.stroke();
            A10.crc2.restore();
            A10.crc2.lineWidth = 1;
            A10.crc2.fillStyle = "red";
            A10.crc2.save();
            A10.crc2.translate(this.position.x, this.position.y);
            A10.crc2.beginPath();
            A10.crc2.arc(0, 0, this.size / 4, 0, 2 * Math.PI);
            A10.crc2.closePath();
            A10.crc2.fill();
            A10.crc2.stroke();
            A10.crc2.restore();
            A10.crc2.fillStyle = "blue";
            A10.crc2.save();
            A10.crc2.translate(this.position.x + 15, this.position.y + 17);
            A10.crc2.beginPath();
            A10.crc2.arc(0, 0, 4, 0, 2 * Math.PI);
            A10.crc2.closePath();
            A10.crc2.fill();
            A10.crc2.stroke();
            A10.crc2.restore();
            A10.crc2.fillStyle = "purple";
            A10.crc2.save();
            A10.crc2.translate(this.position.x - 15, this.position.y - 10);
            A10.crc2.beginPath();
            A10.crc2.arc(0, 0, 4, 0, 2 * Math.PI);
            A10.crc2.closePath();
            A10.crc2.fill();
            A10.crc2.stroke();
            A10.crc2.restore();
        }
    }
    A10.Body = Body;
})(A10 || (A10 = {}));
//# sourceMappingURL=body.js.map