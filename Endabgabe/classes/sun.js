"use strict";
var magicalCanvas;
(function (magicalCanvas) {
    class Sun extends magicalCanvas.Symbol {
        draw() {
            magicalCanvas.crc2.fillStyle = "#F0C207";
            magicalCanvas.crc2.strokeStyle = "#F0C207";
            magicalCanvas.crc2.lineWidth = 5;
            magicalCanvas.crc2.beginPath();
            magicalCanvas.crc2.moveTo(this.x, this.y);
            magicalCanvas.crc2.lineTo(this.x + 50, this.y);
            magicalCanvas.crc2.moveTo(this.x, this.y);
            magicalCanvas.crc2.lineTo(this.x - 50, this.y);
            magicalCanvas.crc2.moveTo(this.x, this.y);
            magicalCanvas.crc2.lineTo(this.x, this.y - 50);
            magicalCanvas.crc2.moveTo(this.x, this.y);
            magicalCanvas.crc2.lineTo(this.x, this.y + 50);
            magicalCanvas.crc2.moveTo(this.x, this.y);
            magicalCanvas.crc2.lineTo(this.x + 40, this.y + 40);
            magicalCanvas.crc2.moveTo(this.x, this.y);
            magicalCanvas.crc2.lineTo(this.x - 40, this.y + 40);
            magicalCanvas.crc2.moveTo(this.x, this.y);
            magicalCanvas.crc2.lineTo(this.x - 40, this.y - 40);
            magicalCanvas.crc2.moveTo(this.x, this.y);
            magicalCanvas.crc2.lineTo(this.x + 40, this.y - 40);
            magicalCanvas.crc2.stroke();
            magicalCanvas.crc2.lineWidth = 2;
            magicalCanvas.crc2.beginPath();
            magicalCanvas.crc2.moveTo(this.x, this.y);
            magicalCanvas.crc2.arc(this.x, this.y, 30, 0, Math.PI * 2, true);
            magicalCanvas.crc2.closePath();
            magicalCanvas.crc2.fill();
            magicalCanvas.crc2.stroke();
        }
    }
    magicalCanvas.Sun = Sun;
})(magicalCanvas || (magicalCanvas = {}));
//# sourceMappingURL=sun.js.map