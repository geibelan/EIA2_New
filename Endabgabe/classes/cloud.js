"use strict";
var magicalCanvas;
(function (magicalCanvas) {
    class Cloud extends magicalCanvas.Symbol {
        //https://stackoverflow.com/questions/19541192/how-to-draw-cloud-shape-in-html5-canvas
        draw() {
            magicalCanvas.crc2.fillStyle = "#DFE5E5";
            magicalCanvas.crc2.strokeStyle = "#DFE5E5";
            magicalCanvas.crc2.lineWidth = 2;
            if (this.selected == true) {
                magicalCanvas.crc2.strokeStyle = "#ff0000";
                magicalCanvas.crc2.lineWidth = 5;
            }
            magicalCanvas.crc2.save();
            magicalCanvas.crc2.translate(this.x, this.y);
            magicalCanvas.crc2.rotate((0 + this.setRotation) * Math.PI / 180);
            magicalCanvas.crc2.translate(-this.x, -this.y);
            magicalCanvas.crc2.beginPath();
            magicalCanvas.crc2.moveTo(this.x, this.y);
            magicalCanvas.crc2.bezierCurveTo(this.x - 20 * this.setScale, this.y + 10 * this.setScale, this.x - 20 * this.setScale, this.y + 35 * this.setScale, this.x + 30 * this.setScale, this.y + 35 * this.setScale);
            magicalCanvas.crc2.bezierCurveTo(this.x + 40 * this.setScale, this.y + 50 * this.setScale, this.x + 75 * this.setScale, this.y + 50 * this.setScale, this.x + 85 * this.setScale, this.y + 35 * this.setScale);
            magicalCanvas.crc2.bezierCurveTo(this.x + 125 * this.setScale, this.y + 35 * this.setScale, this.x + 125 * this.setScale, this.y + 20 * this.setScale, this.x + 110 * this.setScale, this.y + 10 * this.setScale);
            magicalCanvas.crc2.bezierCurveTo(this.x + 115 * this.setScale, this.y - 20 * this.setScale, this.x + 100 * this.setScale, this.y - 25 * this.setScale, this.x + 85 * this.setScale, this.y - 15 * this.setScale);
            magicalCanvas.crc2.bezierCurveTo(this.x + 75 * this.setScale, this.y - 37.5 * this.setScale, this.x + 40 * this.setScale, this.y - 30 * this.setScale, this.x + 40 * this.setScale, this.y - 15 * this.setScale);
            magicalCanvas.crc2.bezierCurveTo(this.x + 15 * this.setScale, this.y - 37.5 * this.setScale, this.x - 10 * this.setScale, this.y - 30 * this.setScale, this.x, this.y);
            magicalCanvas.crc2.closePath();
            magicalCanvas.crc2.stroke();
            magicalCanvas.crc2.fill();
            magicalCanvas.crc2.restore();
            this.size = 110 * this.setScale;
        }
    }
    magicalCanvas.Cloud = Cloud;
})(magicalCanvas || (magicalCanvas = {}));
//# sourceMappingURL=cloud.js.map