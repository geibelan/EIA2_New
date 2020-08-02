namespace magicalCanvas {

    export class Tree extends Symbol {
        draw(): void {

            crc2.lineWidth = 2;
            crc2.fillStyle = "brown";
            crc2.strokeStyle = "brown";

            if (this.selected == true) {
                crc2.strokeStyle = "#ff0000";
                crc2.lineWidth = 5;
            }

            crc2.save();
            crc2.translate(this.x, this.y);
            crc2.rotate((0 + this.setRotation + this.rotation) * Math.PI / 180);
            crc2.translate(-this.x, -this.y);
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 20 * this.setScale, this.y);
            crc2.lineTo(this.x + 20 * this.setScale, this.y - 10 * this.setScale);
            crc2.lineTo(this.x, this.y - 10 * this.setScale);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.fillStyle = "green";
            crc2.strokeStyle = "green";

            if (this.selected == true) {
                crc2.strokeStyle = "#ff0000";
                crc2.lineWidth = 5;
            }

            crc2.beginPath();
            crc2.moveTo(this.x + 10 * this.setScale, this.y - 10 * this.setScale);
            crc2.lineTo(this.x + 40 * this.setScale, this.y - 10 * this.setScale);
            crc2.lineTo(this.x + 10 * this.setScale, this.y - 70 * this.setScale);
            crc2.lineTo(this.x - 20 * this.setScale, this.y - 10 * this.setScale);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.restore();

            this.size = 70 * this.setScale;

        }
    }
}