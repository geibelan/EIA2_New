"use strict";
var magicalCanvas;
(function (magicalCanvas) {
    class House extends magicalCanvas.Symbol {
        draw() {
            magicalCanvas.crc2.fillStyle = "#5F2106";
            magicalCanvas.crc2.strokeStyle = "#5F2106";
            magicalCanvas.crc2.lineWidth = 5;
            if (this.selected == true) {
                magicalCanvas.crc2.strokeStyle = "#ff0000";
                magicalCanvas.crc2.lineWidth = 6;
            }
            magicalCanvas.crc2.save();
            magicalCanvas.crc2.translate(this.x, this.y);
            magicalCanvas.crc2.rotate((0 + this.setRotation) * Math.PI / 180);
            magicalCanvas.crc2.translate(-this.x, -this.y);
            magicalCanvas.crc2.beginPath();
            magicalCanvas.crc2.moveTo(this.x, this.y);
            magicalCanvas.crc2.lineTo(this.x + (30 * this.setScale), this.y);
            magicalCanvas.crc2.lineTo(this.x + (30 * this.setScale), this.y - (30 * this.setScale));
            magicalCanvas.crc2.lineTo(this.x, this.y - (30 * this.setScale));
            magicalCanvas.crc2.closePath();
            magicalCanvas.crc2.stroke();
            magicalCanvas.crc2.fill();
            magicalCanvas.crc2.fillStyle = "#870000";
            magicalCanvas.crc2.strokeStyle = "#870000";
            magicalCanvas.crc2.lineWidth = 2;
            if (this.selected == true) {
                magicalCanvas.crc2.strokeStyle = "#ff0000";
                magicalCanvas.crc2.lineWidth = 5;
            }
            magicalCanvas.crc2.beginPath();
            magicalCanvas.crc2.moveTo(this.x + (30 * this.setScale), this.y - (30 * this.setScale));
            magicalCanvas.crc2.lineTo(this.x + (40 * this.setScale), this.y - (30 * this.setScale));
            magicalCanvas.crc2.lineTo(this.x + (15 * this.setScale), this.y - (60 * this.setScale));
            magicalCanvas.crc2.lineTo(this.x - (10 * this.setScale), this.y - (30 * this.setScale));
            magicalCanvas.crc2.closePath();
            magicalCanvas.crc2.stroke();
            magicalCanvas.crc2.fill();
            magicalCanvas.crc2.restore();
            this.size = 50 * this.setScale;
        }
    }
    magicalCanvas.House = House;
})(magicalCanvas || (magicalCanvas = {}));
//# sourceMappingURL=house.js.map