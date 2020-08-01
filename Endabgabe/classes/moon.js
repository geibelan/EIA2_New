"use strict";
var magicalCanvas;
(function (magicalCanvas) {
    class Moon extends magicalCanvas.Symbol {
        draw() {
            magicalCanvas.crc2.fillStyle = "#7D9B9A";
            magicalCanvas.crc2.strokeStyle = "#7D9B9A";
            magicalCanvas.crc2.lineWidth = 2;
            magicalCanvas.crc2.beginPath();
            magicalCanvas.crc2.moveTo(this.x, this.y);
            magicalCanvas.crc2.arc(this.x, this.y, 40, 0, Math.PI * 2, true);
            magicalCanvas.crc2.closePath();
            magicalCanvas.crc2.fill();
            magicalCanvas.crc2.stroke();
        }
    }
    magicalCanvas.Moon = Moon;
})(magicalCanvas || (magicalCanvas = {}));
//# sourceMappingURL=moon.js.map