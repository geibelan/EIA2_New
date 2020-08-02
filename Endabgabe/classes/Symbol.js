"use strict";
var magicalCanvas;
(function (magicalCanvas) {
    class Symbol {
        constructor() {
            this.scale = 1;
            this.setScale = 1;
            this.scaleUp = true;
            this.rotation = 0;
            this.setRotation = 0;
            this.rotateRight = true;
            this.selected = false;
        }
        move() {
            this.x += 0.5;
            if (this.x > magicalCanvas.canvas.width) {
                this.x = -this.size;
            }
        }
        rescale() {
            if (this.scale < 1.5 && this.scaleUp == true) {
                this.scale += 0.01;
            }
            else {
                this.scale -= 0.01;
            }
            if (this.scale >= 1.5) {
                this.scaleUp = false;
            }
            if (this.scale <= 1) {
                this.scaleUp = true;
            }
        }
        rotate() {
            if (this.rotation < 10 && this.rotateRight == true) {
                this.rotation += 0.1;
            }
            else {
                this.rotation -= 0.1;
            }
            if (this.rotation >= 10) {
                this.rotateRight = false;
            }
            if (this.rotation <= 0) {
                this.rotateRight = true;
            }
        }
        edit() {
        }
    }
    magicalCanvas.Symbol = Symbol;
})(magicalCanvas || (magicalCanvas = {}));
//# sourceMappingURL=Symbol.js.map