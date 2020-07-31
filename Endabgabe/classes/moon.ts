
namespace magicalCanvas {

    export class Moon extends Symbol {

        draw(): void {
            crc2.fillStyle = "#7D9B9A";
            crc2.strokeStyle = "#7D9B9A";
            crc2.lineWidth = 2;

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, 50, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

    }


}
/*
 //moon
            crc2.fillStyle = "#7D9B9A";
            crc2.strokeStyle = "#7D9B9A";
            crc2.lineWidth = 2;

            crc2.moveTo(canvas.width / 2, canvas.height / 2);
            crc2.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
*/