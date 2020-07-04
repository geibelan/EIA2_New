namespace A11 {

    export class Blood extends Moveable {


        constructor(_size: number) {

            let cellsPositionMin: Vector = new Vector(0, 0);
            let cellsPositionMax: Vector = new Vector(350, 600);
            let X: number = Math.random() * (cellsPositionMax.x - cellsPositionMin.x) + cellsPositionMin.x;
            let Y: number = Math.random() * (cellsPositionMax.y - cellsPositionMin.y) + cellsPositionMin.y;
            
            super(_size, X, Y, -1, 1);

        }

        draw(): void {

            crc2.globalAlpha = 0.4;

            crc2.fillStyle = "blue";

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(0, 0, this.size, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.restore();

        }

    }
}