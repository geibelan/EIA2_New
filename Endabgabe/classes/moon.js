"use strict";
var magicalCanvas;
(function (magicalCanvas) {
    class Moon extends magicalCanvas.Symbol {
        draw() {
            magicalCanvas.crc2.fillStyle = "#d4e3fa";
            magicalCanvas.crc2.strokeStyle = "#d4e3fa";
            magicalCanvas.crc2.lineWidth = 2;
            magicalCanvas.crc2.save();
            magicalCanvas.crc2.translate(this.x, this.y);
            magicalCanvas.crc2.rotate((0 + this.setRotation) * Math.PI / 180);
            magicalCanvas.crc2.translate(-this.x, -this.y);
            magicalCanvas.crc2.beginPath();
            magicalCanvas.crc2.moveTo(this.x, this.y);
            magicalCanvas.crc2.arc(this.x, this.y, (40 * this.setScale) * this.scale, 0, Math.PI * 2, true);
            magicalCanvas.crc2.closePath();
            magicalCanvas.crc2.fill();
            magicalCanvas.crc2.stroke();
            magicalCanvas.crc2.fillStyle = "#7D9B9A";
            magicalCanvas.crc2.strokeStyle = "#7D9B9A";
            if (this.selected == true) {
                magicalCanvas.crc2.strokeStyle = "#ff0000";
                magicalCanvas.crc2.lineWidth = 5;
            }
            magicalCanvas.crc2.beginPath();
            //crc2.moveTo(this.x, this.y);
            magicalCanvas.crc2.arc(this.x, this.y, (40 * this.setScale), 0, Math.PI * 2, true);
            magicalCanvas.crc2.closePath();
            magicalCanvas.crc2.fill();
            magicalCanvas.crc2.stroke();
            magicalCanvas.crc2.restore();
            this.size = (40 * this.setScale) * this.scale;
        }
    }
    magicalCanvas.Moon = Moon;
})(magicalCanvas || (magicalCanvas = {}));
//# sourceMappingURL=moon.js.map