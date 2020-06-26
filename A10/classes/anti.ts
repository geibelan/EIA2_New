namespace A10 {

    export class Anti extends Moveable {

        constructor(_size: number) {

            let antiPositionMin: Vector = new Vector(0, 350);
            let antiPositionMax: Vector = new Vector(200, 600);
            let X: number = Math.random() * (antiPositionMax.x - antiPositionMin.x) + antiPositionMin.x;
            let Y: number = Math.random() * (antiPositionMax.y - antiPositionMin.y) + antiPositionMin.y;

            let vX: number = Math.random() * (2 - (-2)) + (-2);
            let vY: number = Math.random() * (2 - (-2)) + (-2);
            super(_size, X, Y, vX, vY);
        }

        draw(): void {

            crc2.strokeStyle = "Yellow";
            crc2.lineWidth = 3;

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.moveTo(-7, 0);
            crc2.lineTo(-7, -25);
            crc2.moveTo(-7, -25);
            crc2.lineTo(-17, -35);
            crc2.moveTo(-15, -23);
            crc2.lineTo(-25, -33);

            crc2.moveTo(7, 0);
            crc2.lineTo(7, -25);
            crc2.moveTo(7, -25);
            crc2.lineTo(17, -35);
            crc2.moveTo(15, -23);
            crc2.lineTo(25, -33);
            crc2.stroke();
            crc2.closePath();
            crc2.restore();
        }

    }
}
