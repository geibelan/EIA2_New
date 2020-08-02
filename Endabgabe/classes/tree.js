"use strict";
var magicalCanvas;
(function (magicalCanvas) {
    class Tree extends magicalCanvas.Symbol {
        draw() {
            magicalCanvas.crc2.lineWidth = 2;
            magicalCanvas.crc2.fillStyle = "brown";
            magicalCanvas.crc2.strokeStyle = "brown";
            if (this.selected == true) {
                magicalCanvas.crc2.strokeStyle = "#ff0000";
                magicalCanvas.crc2.lineWidth = 5;
            }
            magicalCanvas.crc2.save();
            magicalCanvas.crc2.translate(this.x, this.y);
            magicalCanvas.crc2.rotate((0 + this.setRotation + this.rotation) * Math.PI / 180);
            magicalCanvas.crc2.translate(-this.x, -this.y);
            magicalCanvas.crc2.beginPath();
            magicalCanvas.crc2.moveTo(this.x, this.y);
            magicalCanvas.crc2.lineTo(this.x + 20 * this.setScale, this.y);
            magicalCanvas.crc2.lineTo(this.x + 20 * this.setScale, this.y - 10 * this.setScale);
            magicalCanvas.crc2.lineTo(this.x, this.y - 10 * this.setScale);
            magicalCanvas.crc2.closePath();
            magicalCanvas.crc2.fill();
            magicalCanvas.crc2.stroke();
            magicalCanvas.crc2.fillStyle = "green";
            magicalCanvas.crc2.strokeStyle = "green";
            if (this.selected == true) {
                magicalCanvas.crc2.strokeStyle = "#ff0000";
                magicalCanvas.crc2.lineWidth = 5;
            }
            magicalCanvas.crc2.beginPath();
            magicalCanvas.crc2.moveTo(this.x + 10 * this.setScale, this.y - 10 * this.setScale);
            magicalCanvas.crc2.lineTo(this.x + 40 * this.setScale, this.y - 10 * this.setScale);
            magicalCanvas.crc2.lineTo(this.x + 10 * this.setScale, this.y - 70 * this.setScale);
            magicalCanvas.crc2.lineTo(this.x - 20 * this.setScale, this.y - 10 * this.setScale);
            magicalCanvas.crc2.closePath();
            magicalCanvas.crc2.fill();
            magicalCanvas.crc2.stroke();
            magicalCanvas.crc2.restore();
            this.size = 70 * this.setScale;
        }
    }
    magicalCanvas.Tree = Tree;
})(magicalCanvas || (magicalCanvas = {}));
//# sourceMappingURL=tree.js.map