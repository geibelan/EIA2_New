namespace magicalCanvas {

    export class House extends Symbol {

        draw(): void {
            crc2.fillStyle = "#5F2106";
            crc2.strokeStyle = "#5F2106";
            crc2.lineWidth = 5;

            if (this.selected == true) {
                crc2.strokeStyle = "#ff0000";
                crc2.lineWidth = 6;
            }
            crc2.save();
            crc2.translate(this.x, this.y);
            crc2.rotate((0 + this.setRotation) * Math.PI / 180);
            crc2.translate(-this.x, -this.y);

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + (30 * this.setScale), this.y);
            crc2.lineTo(this.x + (30 * this.setScale), this.y - (30 * this.setScale));
            crc2.lineTo(this.x, this.y - (30 * this.setScale));
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            crc2.fillStyle = "#870000";
            crc2.strokeStyle = "#870000";
            crc2.lineWidth = 2;
            if (this.selected == true) {
                crc2.strokeStyle = "#ff0000";
                crc2.lineWidth = 5;
            }
            crc2.beginPath();
            crc2.moveTo(this.x + (30 * this.setScale), this.y - (30 * this.setScale));
            crc2.lineTo(this.x + (40 * this.setScale), this.y - (30 * this.setScale));
            crc2.lineTo(this.x + (15 * this.setScale), this.y - (60 * this.setScale));
            crc2.lineTo(this.x - (10 * this.setScale), this.y - (30 * this.setScale));
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.restore();

            this.size = 50* this.setScale;
        }

    }
}