namespace A11 {

    export class Moveable {

        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number, _X: number, _Y: number, _vX: number, _vY: number) {

            this.position = new Vector(_X, _Y);
            this.size = _size;
            this.velocity = new Vector(_vX, _vY);
        }

        draw(): void { }

        move(): void {
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;

            if (this.position.x < 0) {
                this.position.x = canvas.width;
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