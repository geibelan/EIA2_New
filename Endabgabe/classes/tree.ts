namespace magicalCanvas {

    export class Tree extends Symbol {
        draw(): void {

            crc2.lineWidth = 2;
            crc2.fillStyle = "brown";
            crc2.strokeStyle = "brown";

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 20, this.y);
            crc2.lineTo(this.x + 20, this.y - 10);
            crc2.lineTo(this.x, this.y - 10);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.fillStyle = "green";
            crc2.strokeStyle = "green";


            crc2.beginPath();
            crc2.moveTo(this.x + 10, this.y - 10);
            crc2.lineTo(this.x + 40, this.y  - 10);
            crc2.lineTo(this.x + 10, this.y  - 70);
            crc2.lineTo(this.x - 20, this.y  - 10);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

        }
    }
}