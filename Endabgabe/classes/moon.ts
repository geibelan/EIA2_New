
namespace magicalCanvas {

    export class Moon extends Symbol {


        draw(): void {
            crc2.fillStyle = "#d4e3fa";
            crc2.strokeStyle = "#d4e3fa";
            crc2.lineWidth = 2;

            crc2.save();
            crc2.translate(this.x, this.y);
            crc2.rotate((0 + this.setRotation) * Math.PI / 180);
            crc2.translate(-this.x, -this.y);

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, (40 * this.setScale) * this.scale, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.fillStyle = "#7D9B9A";
            crc2.strokeStyle = "#7D9B9A";
            if (this.selected == true) {
                crc2.strokeStyle = "#ff0000";
                crc2.lineWidth = 5;
            }
            crc2.beginPath();
            //crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, (40 * this.setScale), 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.restore();

            this.size = (40* this.setScale) * this.scale;
        }

    }
}