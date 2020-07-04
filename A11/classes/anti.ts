namespace A11 {

    export class Anti extends Moveable {

        target: Corona;
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

        setTarget(_target: Corona, _index: number): void {

            this.target = _target;
            let X: number = (this.target.position.x - this.position.x) * 0.1;
            let Y: number = (this.target.position.y - this.position.y) * 0.1;
            this.velocity = { "x": X, "y": Y };
            let that: Anti = this;
            let index: number = _index;
            this.hitCorona(that, index);
        }

        hitCorona(_that: Anti, _index: number): void {

            let X: number = (_that.target.position.x - _that.position.x) * 0.1;
            let Y: number = (_that.target.position.y - _that.position.y) * 0.1;
            this.velocity = { "x": X, "y": Y };

            X = this.position.x;
            Y = this.position.y;

            let xCorona: number = this.target.position.x;
            let yCorona: number = this.target.position.y;
            let radius: number = (this.target.size / 2);

            if ((X - xCorona) * (X - xCorona) + (Y - yCorona) * (Y - yCorona) <= (radius * 4)) {
                console.log("hit Corona");

            } else {
                window.requestAnimationFrame(function (): void {
                    _that.hitCorona(_that, _index);
                });
            }
        }

        move(): void {

            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;

            if (this.position.x < 0) {
                this.position.x += canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += canvas.height;
            }

            if (this.position.x > canvas.width) {
                this.position.x += -canvas.width;
            }
            if (this.position.y > canvas.height) {
                this.position.y += -canvas.height;
            }

        }

    }
}
