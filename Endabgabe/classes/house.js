"use strict";
var magicalCanvas;
(function (magicalCanvas) {
    class House extends magicalCanvas.Symbol {
        draw() {
            magicalCanvas.crc2.fillStyle = "#5F2106";
            magicalCanvas.crc2.strokeStyle = "#5F2106";
            magicalCanvas.crc2.lineWidth = 5;
            magicalCanvas.crc2.beginPath();
            magicalCanvas.crc2.moveTo(this.x, this.y);
            magicalCanvas.crc2.lineTo(this.x + 30, this.y);
            magicalCanvas.crc2.lineTo(this.x + 30, this.y - 30);
            magicalCanvas.crc2.lineTo(this.x, this.y - 30);
            magicalCanvas.crc2.closePath();
            magicalCanvas.crc2.stroke();
            magicalCanvas.crc2.fill();
            magicalCanvas.crc2.fillStyle = "#870000";
            magicalCanvas.crc2.strokeStyle = "#870000";
            magicalCanvas.crc2.lineWidth = 2;
            magicalCanvas.crc2.beginPath();
            magicalCanvas.crc2.moveTo(this.x + 30, this.y - 30);
            magicalCanvas.crc2.lineTo(this.x + 40, this.y - 30);
            magicalCanvas.crc2.lineTo(this.x + 15, this.y - 60);
            magicalCanvas.crc2.lineTo(this.x - 10, this.y - 30);
            magicalCanvas.crc2.closePath();
            magicalCanvas.crc2.stroke();
            magicalCanvas.crc2.fill();
        }
    }
    magicalCanvas.House = House;
})(magicalCanvas || (magicalCanvas = {}));
//# sourceMappingURL=house.js.map