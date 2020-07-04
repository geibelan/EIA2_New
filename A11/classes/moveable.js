"use strict";
var A11;
(function (A11) {
    class Moveable {
        constructor(_size, _X, _Y, _vX, _vY) {
            this.position = new A11.Vector(_X, _Y);
            this.size = _size;
            this.velocity = new A11.Vector(_vX, _vY);
        }
        draw() { }
        move() {
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            if (this.position.x < 0) {
                this.position.x = A11.canvas.width;
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
    A11.Moveable = Moveable;
})(A11 || (A11 = {}));
//# sourceMappingURL=moveable.js.map