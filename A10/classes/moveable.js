"use strict";
var A10;
(function (A10) {
    class Moveable {
        constructor(_size, _X, _Y, _vX, _vY) {
            this.position = new A10.Vector(_X, _Y);
            this.size = _size;
            this.velocity = new A10.Vector(_vX, _vY);
        }
        draw() { }
        move() {
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            if (this.position.x < 0) {
                this.position.x = A10.canvas.width;
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
        }
    }
    A10.Moveable = Moveable;
})(A10 || (A10 = {}));
//# sourceMappingURL=moveable.js.map