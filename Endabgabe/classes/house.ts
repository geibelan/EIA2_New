namespace magicalCanvas {

    export class House extends Symbol {

        draw(): void {
            crc2.fillStyle = "#5F2106";
            crc2.strokeStyle = "#5F2106";
            crc2.lineWidth = 5;

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 30, this.y);
            crc2.lineTo(this.x + 30, this.y - 30);
            crc2.lineTo(this.x, this.y - 30);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            crc2.fillStyle = "#870000";
            crc2.strokeStyle = "#870000";
            crc2.lineWidth = 2;
            crc2.beginPath();
            crc2.moveTo(this.x + 30, this.y - 30);
            crc2.lineTo(this.x + 40, this.y - 30);
            crc2.lineTo(this.x + 15, this.y - 60);
            crc2.lineTo(this.x - 10, this.y - 30);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }

    }
}