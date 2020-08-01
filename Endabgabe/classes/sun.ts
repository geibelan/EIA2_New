namespace magicalCanvas {

    export class Sun extends Symbol {

        draw(): void {
            crc2.fillStyle = "#F0C207";
            crc2.strokeStyle = "#F0C207";
            crc2.lineWidth = 5;

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 50, this.y);

            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x - 50, this.y);

            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y - 50);

            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y + 50);

            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 40, this.y + 40);

            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x - 40, this.y + 40);

            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x - 40, this.y - 40);

            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 40, this.y - 40);

            crc2.stroke();

            crc2.lineWidth = 2;
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, 30, 0, Math.PI * 2, true);

            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

    }
}
