"use strict";
var A10;
(function (A10) {
    class Corona {
        constructor(_size) {
            this.check = true;
            let coronaPositionMin = new A10.Vector(150, 0);
            let coronaPositionMax = new A10.Vector(350, 300);
            let X = Math.random() * (coronaPositionMax.x - coronaPositionMin.x) + coronaPositionMin.x;
            let Y = Math.random() * (coronaPositionMax.y - coronaPositionMin.y) + coronaPositionMin.y;
            this.position = new A10.Vector(X, Y);
            this.size = _size;
            this.target = A10.bodyCells[Math.floor(Math.random() * (A10.bodyCells.length - 0) + 0)];
            X = (this.target.position.x - this.position.x) / 200;
            Y = (this.target.position.y - this.position.y) / 200;
            //console.log(this.target.position, X, Y);
            this.velocity = new A10.Vector(X, Y);
        }
        draw() {
            A10.crc2.strokeStyle = "forestgreen";
            A10.crc2.lineWidth = 3;
            A10.crc2.save();
            A10.crc2.translate(this.position.x, this.position.y);
            A10.crc2.beginPath();
            A10.crc2.moveTo(0, 0);
            A10.crc2.lineTo(40, 25);
            A10.crc2.moveTo(0, 0);
            A10.crc2.lineTo(-40, -25);
            A10.crc2.moveTo(0, 0);
            A10.crc2.lineTo(-25, 40);
            A10.crc2.moveTo(0, 0);
            A10.crc2.lineTo(25, -40);
            A10.crc2.stroke();
            A10.crc2.closePath();
            A10.crc2.restore();
            A10.crc2.strokeStyle = "black";
            A10.crc2.fillStyle = "forestgreen";
            A10.crc2.save();
            A10.crc2.translate(this.position.x, this.position.y);
            A10.crc2.beginPath();
            A10.crc2.arc(0, 0, this.size, 0, 2 * Math.PI);
            A10.crc2.closePath();
            A10.crc2.fill();
            A10.crc2.stroke();
            A10.crc2.restore();
        }
        move() {
            if (this.check == true) {
                this.position.x += this.velocity.x;
                this.position.y += this.velocity.y;
                if (this.position.x < 0) {
                    this.position.x += A10.canvas.width;
                }
                if (this.position.y < 0) {
                    this.position.y += A10.canvas.height;
                }
                if (this.position.x > A10.canvas.width) {
                    this.position.x += -A10.canvas.width;
                }
                if (this.position.y > A10.canvas.height) {
                    this.position.y += -A10.canvas.height;
                }
                this.hitBody();
            }
        }
        hitBody() {
            let X = this.position.x;
            let Y = this.position.y;
            let xBody = this.target.position.x;
            let yBody = this.target.position.y;
            let radius = (this.target.size / 2);
            if ((X - xBody) * (X - xBody) + (Y - yBody) * (Y - yBody) <= (radius * 4)) {
                console.log("hit");
                this.check = false;
                let that = this;
                setTimeout(function () {
                    that.check = true;
                    that.target = A10.bodyCells[Math.floor(Math.random() * (A10.bodyCells.length - 0) + 0)];
                    X = (that.target.position.x - that.position.x) / 200;
                    Y = (that.target.position.y - that.position.y) / 200;
                    that.velocity = new A10.Vector(X, Y);
                }, 1000);
            }
        }
    }
    A10.Corona = Corona;
})(A10 || (A10 = {}));
//# sourceMappingURL=corona.js.map