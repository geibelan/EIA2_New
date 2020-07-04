"use strict";
var A11;
(function (A11) {
    class Anti extends A11.Moveable {
        constructor(_size) {
            let antiPositionMin = new A11.Vector(0, 350);
            let antiPositionMax = new A11.Vector(200, 600);
            let X = Math.random() * (antiPositionMax.x - antiPositionMin.x) + antiPositionMin.x;
            let Y = Math.random() * (antiPositionMax.y - antiPositionMin.y) + antiPositionMin.y;
            let vX = Math.random() * (2 - (-2)) + (-2);
            let vY = Math.random() * (2 - (-2)) + (-2);
            super(_size, X, Y, vX, vY);
        }
        draw() {
            A11.crc2.strokeStyle = "Yellow";
            A11.crc2.lineWidth = 3;
            A11.crc2.save();
            A11.crc2.translate(this.position.x, this.position.y);
            A11.crc2.beginPath();
            A11.crc2.moveTo(-7, 0);
            A11.crc2.lineTo(-7, -25);
            A11.crc2.moveTo(-7, -25);
            A11.crc2.lineTo(-17, -35);
            A11.crc2.moveTo(-15, -23);
            A11.crc2.lineTo(-25, -33);
            A11.crc2.moveTo(7, 0);
            A11.crc2.lineTo(7, -25);
            A11.crc2.moveTo(7, -25);
            A11.crc2.lineTo(17, -35);
            A11.crc2.moveTo(15, -23);
            A11.crc2.lineTo(25, -33);
            A11.crc2.stroke();
            A11.crc2.closePath();
            A11.crc2.restore();
        }
        setTarget(_target, _index) {
            this.target = _target;
            let X = (this.target.position.x - this.position.x) * 0.1;
            let Y = (this.target.position.y - this.position.y) * 0.1;
            this.velocity = { "x": X, "y": Y };
            let that = this;
            let index = _index;
            this.hitCorona(that, index);
        }
        hitCorona(_that, _index) {
            let X = (_that.target.position.x - _that.position.x) * 0.1;
            let Y = (_that.target.position.y - _that.position.y) * 0.1;
            this.velocity = { "x": X, "y": Y };
            X = this.position.x;
            Y = this.position.y;
            let xCorona = this.target.position.x;
            let yCorona = this.target.position.y;
            let radius = (this.target.size / 2);
            if ((X - xCorona) * (X - xCorona) + (Y - yCorona) * (Y - yCorona) <= (radius * 4)) {
                console.log("hit Corona");
            }
            else {
                window.requestAnimationFrame(function () {
                    _that.hitCorona(_that, _index);
                });
            }
        }
        move() {
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            if (this.position.x < 0) {
                this.position.x += A11.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += A11.canvas.height;
            }
            if (this.position.x > A11.canvas.width) {
                this.position.x += -A11.canvas.width;
            }
            if (this.position.y > A11.canvas.height) {
                this.position.y += -A11.canvas.height;
            }
        }
    }
    A11.Anti = Anti;
})(A11 || (A11 = {}));
//# sourceMappingURL=anti.js.map