"use strict";
var magicalCanvas;
(function (magicalCanvas) {
    class Cloud extends magicalCanvas.Symbol {
        draw() {
            magicalCanvas.crc2.fillStyle = "#DFE5E5";
            magicalCanvas.crc2.strokeStyle = "#DFE5E5";
            magicalCanvas.crc2.lineWidth = 2;
            magicalCanvas.crc2.save();
            magicalCanvas.crc2.beginPath();
            /*crc2.translate(this.x, this.y);
            crc2.rotate(20 * Math.PI / 180);
            crc2.translate(-this.x, -this.y);*/
            magicalCanvas.crc2.moveTo(this.x, this.y); //170,80
            magicalCanvas.crc2.bezierCurveTo(this.x - 20, this.y + 10, this.x - 20, this.y + 35, this.x + 30, this.y + 35);
            magicalCanvas.crc2.bezierCurveTo(this.x + 40, this.y + 50, this.x + 75, this.y + 50, this.x + 85, this.y + 35);
            magicalCanvas.crc2.bezierCurveTo(this.x + 125, this.y + 35, this.x + 125, this.y + 20, this.x + 110, this.y + 10);
            magicalCanvas.crc2.bezierCurveTo(this.x + 115, this.y - 20, this.x + 100, this.y - 25, this.x + 85, this.y - 15);
            magicalCanvas.crc2.bezierCurveTo(this.x + 75, this.y - 37.5, this.x + 40, this.y - 30, this.x + 40, this.y - 15);
            magicalCanvas.crc2.bezierCurveTo(this.x + 15, this.y - 37.5, this.x - 10, this.y - 30, this.x, this.y);
            magicalCanvas.crc2.closePath();
            magicalCanvas.crc2.stroke();
            magicalCanvas.crc2.fill();
            magicalCanvas.crc2.restore();
        }
    }
    magicalCanvas.Cloud = Cloud;
})(magicalCanvas || (magicalCanvas = {}));
//# sourceMappingURL=cloud.js.map