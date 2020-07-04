"use strict";
var A11;
(function (A11) {
    class Corona {
        constructor(_size, _X, _Y) {
            this.check = true;
            let coronaPositionMin = new A11.Vector(150, 0);
            let coronaPositionMax = new A11.Vector(350, 300);
            let X = Math.random() * (coronaPositionMax.x - coronaPositionMin.x) + coronaPositionMin.x;
            let Y = Math.random() * (coronaPositionMax.y - coronaPositionMin.y) + coronaPositionMin.y;
            console.log(_X);
            if (_X != undefined && _Y != undefined) {
                this.position = new A11.Vector(_X, _Y);
            }
            else {
                this.position = new A11.Vector(X, Y);
            }
            this.size = _size;
            this.id = Math.floor(Math.random() * (A11.bodyCells.length - 0) + 0);
            this.target = A11.bodyCells[this.id];
            X = (this.target.position.x - this.position.x) / 200;
            Y = (this.target.position.y - this.position.y) / 200;
            this.velocity = new A11.Vector(X, Y);
        }
        draw() {
            A11.crc2.strokeStyle = "forestgreen";
            A11.crc2.lineWidth = 3;
            A11.crc2.save();
            A11.crc2.translate(this.position.x, this.position.y);
            A11.crc2.beginPath();
            A11.crc2.moveTo(0, 0);
            A11.crc2.lineTo(40, 25);
            A11.crc2.moveTo(0, 0);
            A11.crc2.lineTo(-40, -25);
            A11.crc2.moveTo(0, 0);
            A11.crc2.lineTo(-25, 40);
            A11.crc2.moveTo(0, 0);
            A11.crc2.lineTo(25, -40);
            A11.crc2.stroke();
            A11.crc2.closePath();
            A11.crc2.restore();
            A11.crc2.strokeStyle = "black";
            A11.crc2.fillStyle = "forestgreen";
            A11.crc2.save();
            A11.crc2.translate(this.position.x, this.position.y);
            A11.crc2.beginPath();
            A11.crc2.arc(0, 0, this.size, 0, 2 * Math.PI);
            A11.crc2.closePath();
            A11.crc2.fill();
            A11.crc2.stroke();
            A11.crc2.restore();
        }
        move() {
            if (this.check == true) {
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
                this.hitBody();
            }
        }
        hitBody() {
            if (A11.bodyCells.length > 0) {
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
                        A11.bodyCells.splice(that.id, 1);
                        A11.updateObjects.splice(that.id, 1);
                        let corona = new Corona(30, that.target.position.x, that.target.position.y);
                        corona.draw();
                        A11.updateCorona.push(corona);
                        that.id = Math.floor(Math.random() * (A11.bodyCells.length - 0) + 0);
                        that.target = A11.bodyCells[that.id];
                        X = (that.target.position.x - that.position.x) / 200;
                        Y = (that.target.position.y - that.position.y) / 200;
                        that.velocity = new A11.Vector(X, Y);
                    }, 1000);
                }
            }
        }
    }
    A11.Corona = Corona;
})(A11 || (A11 = {}));
//# sourceMappingURL=corona.js.map