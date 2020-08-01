"use strict";
var magicalCanvas;
(function (magicalCanvas) {
    class Tree extends magicalCanvas.Symbol {
        draw() {
            magicalCanvas.crc2.lineWidth = 2;
            magicalCanvas.crc2.fillStyle = "brown";
            magicalCanvas.crc2.strokeStyle = "brown";
            magicalCanvas.crc2.beginPath();
            magicalCanvas.crc2.moveTo(this.x, this.y);
            magicalCanvas.crc2.lineTo(this.x + 20, this.y);
            magicalCanvas.crc2.lineTo(this.x + 20, this.y - 10);
            magicalCanvas.crc2.lineTo(this.x, this.y - 10);
            magicalCanvas.crc2.closePath();
            magicalCanvas.crc2.fill();
            magicalCanvas.crc2.stroke();
            magicalCanvas.crc2.fillStyle = "green";
            magicalCanvas.crc2.strokeStyle = "green";
            magicalCanvas.crc2.beginPath();
            magicalCanvas.crc2.moveTo(this.x + 10, this.y - 10);
            magicalCanvas.crc2.lineTo(this.x + 40, this.y - 10);
            magicalCanvas.crc2.lineTo(this.x + 10, this.y - 70);
            magicalCanvas.crc2.lineTo(this.x - 20, this.y - 10);
            magicalCanvas.crc2.closePath();
            magicalCanvas.crc2.fill();
            magicalCanvas.crc2.stroke();
        }
    }
    magicalCanvas.Tree = Tree;
})(magicalCanvas || (magicalCanvas = {}));
//# sourceMappingURL=tree.js.map