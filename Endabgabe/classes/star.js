"use strict";
var magicalCanvas;
(function (magicalCanvas) {
    class Star extends magicalCanvas.Symbol {
        draw() {
            var alpha = (2 * Math.PI) / 10;
            var radius = 10;
            var starXY = [this.x, this.y];
            magicalCanvas.crc2.beginPath();
            for (var i = 11; i != 0; i--) {
                var r = radius * (i % 2 + 1) / 2;
                var omega = alpha * i;
                magicalCanvas.crc2.lineTo((r * Math.sin(omega)) + starXY[0], (r * Math.cos(omega)) + starXY[1]);
            }
            magicalCanvas.crc2.closePath();
            magicalCanvas.crc2.fillStyle = "#E3F067";
            magicalCanvas.crc2.fill();
        }
    }
    magicalCanvas.Star = Star;
})(magicalCanvas || (magicalCanvas = {}));
//# sourceMappingURL=star.js.map