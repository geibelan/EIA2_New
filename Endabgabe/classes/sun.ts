namespace magicalCanvas {

    export class Sun extends Symbol {

        draw(): void {
            crc2.fillStyle = "#F0C207";
            crc2.strokeStyle = "#F0C207";
            crc2.lineWidth = 5;

            crc2.save();
            crc2.translate(this.x, this.y);
            crc2.rotate((0 + this.setRotation) * Math.PI / 180);
            crc2.translate(-this.x, -this.y);

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            //console.log(50 * this.scale);
            crc2.lineTo(this.x + ((50 * this.setScale) * this.scale), this.y);

            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x - ((50 * this.setScale) * this.scale), this.y);

            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y - ((50 * this.setScale) * this.scale));

            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y + ((50 * this.setScale) * this.scale));

            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + ((40 * this.setScale) * this.scale), this.y + ((40 * this.setScale) * this.scale));

            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x - ((40 * this.setScale) * this.scale), this.y + ((40 * this.setScale) * this.scale));

            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x - ((40 * this.setScale) * this.scale), this.y - ((40 * this.setScale) * this.scale));

            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + ((40 * this.setScale) * this.scale), this.y - ((40 * this.setScale) * this.scale));

            crc2.stroke();

            crc2.lineWidth = 2;
            if (this.selected == true) {
                crc2.strokeStyle = "#ff0000";
                crc2.lineWidth = 5;
            }

            crc2.beginPath();
            //crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, 30 * this.setScale, 0, Math.PI * 2, true);

            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.restore();

            this.size = (50* this.setScale) * this.scale;
        }

    }
}
