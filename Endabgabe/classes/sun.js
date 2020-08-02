"use strict";
var magicalCanvas;
(function (magicalCanvas) {
    class Sun extends magicalCanvas.Symbol {
        draw() {
            magicalCanvas.crc2.fillStyle = "#F0C207";
            magicalCanvas.crc2.strokeStyle = "#F0C207";
            magicalCanvas.crc2.lineWidth = 5;
            magicalCanvas.crc2.save();
            magicalCanvas.crc2.translate(this.x, this.y);
            magicalCanvas.crc2.rotate((0 + this.setRotation) * Math.PI / 180);
            magicalCanvas.crc2.translate(-this.x, -this.y);
            magicalCanvas.crc2.beginPath();
            magicalCanvas.crc2.moveTo(this.x, this.y);
            //console.log(50 * this.scale);
            magicalCanvas.crc2.lineTo(this.x + ((50 * this.setScale) * this.scale), this.y);
            magicalCanvas.crc2.moveTo(this.x, this.y);
            magicalCanvas.crc2.lineTo(this.x - ((50 * this.setScale) * this.scale), this.y);
            magicalCanvas.crc2.moveTo(this.x, this.y);
            magicalCanvas.crc2.lineTo(this.x, this.y - ((50 * this.setScale) * this.scale));
            magicalCanvas.crc2.moveTo(this.x, this.y);
            magicalCanvas.crc2.lineTo(this.x, this.y + ((50 * this.setScale) * this.scale));
            magicalCanvas.crc2.moveTo(this.x, this.y);
            magicalCanvas.crc2.lineTo(this.x + ((40 * this.setScale) * this.scale), this.y + ((40 * this.setScale) * this.scale));
            magicalCanvas.crc2.moveTo(this.x, this.y);
            magicalCanvas.crc2.lineTo(this.x - ((40 * this.setScale) * this.scale), this.y + ((40 * this.setScale) * this.scale));
            magicalCanvas.crc2.moveTo(this.x, this.y);
            magicalCanvas.crc2.lineTo(this.x - ((40 * this.setScale) * this.scale), this.y - ((40 * this.setScale) * this.scale));
            magicalCanvas.crc2.moveTo(this.x, this.y);
            magicalCanvas.crc2.lineTo(this.x + ((40 * this.setScale) * this.scale), this.y - ((40 * this.setScale) * this.scale));
            magicalCanvas.crc2.stroke();
            magicalCanvas.crc2.lineWidth = 2;
            if (this.selected == true) {
                magicalCanvas.crc2.strokeStyle = "#ff0000";
                magicalCanvas.crc2.lineWidth = 5;
            }
            magicalCanvas.crc2.beginPath();
            //crc2.moveTo(this.x, this.y);
            magicalCanvas.crc2.arc(this.x, this.y, 30 * this.setScale, 0, Math.PI * 2, true);
            magicalCanvas.crc2.closePath();
            magicalCanvas.crc2.fill();
            magicalCanvas.crc2.stroke();
            magicalCanvas.crc2.restore();
            this.size = (50 * this.setScale) * this.scale;
        }
    }
    magicalCanvas.Sun = Sun;
})(magicalCanvas || (magicalCanvas = {}));
//# sourceMappingURL=sun.js.map