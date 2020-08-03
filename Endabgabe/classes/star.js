"use strict";
var magicalCanvas;
(function (magicalCanvas) {
    class Star extends magicalCanvas.Symbol {
        //https://stackoverflow.com/questions/14580033/algorithm-for-drawing-a-5-point-star
        draw() {
            var alpha = (2 * Math.PI) / 10;
            var radius = (10 * this.setScale) * this.scale;
            var starXY = [this.x, this.y];
            magicalCanvas.crc2.save();
            magicalCanvas.crc2.translate(this.x, this.y);
            magicalCanvas.crc2.rotate((0 + this.setRotation) * Math.PI / 180);
            magicalCanvas.crc2.translate(-this.x, -this.y);
            magicalCanvas.crc2.beginPath();
            for (var i = 11; i != 0; i--) {
                var r = radius * (i % 2 + 1) / 2;
                var omega = alpha * i;
                magicalCanvas.crc2.lineTo((r * Math.sin(omega)) + starXY[0], (r * Math.cos(omega)) + starXY[1]);
            }
            magicalCanvas.crc2.closePath();
            magicalCanvas.crc2.fillStyle = "#E3F067";
            if (this.selected == true) {
                magicalCanvas.crc2.strokeStyle = "#ff0000";
                magicalCanvas.crc2.lineWidth = 2;
                magicalCanvas.crc2.stroke();
            }
            magicalCanvas.crc2.fill();
            magicalCanvas.crc2.restore();
            this.size = (10 * this.setScale) * this.scale;
        }
    }
    magicalCanvas.Star = Star;
})(magicalCanvas || (magicalCanvas = {}));
//# sourceMappingURL=star.js.map