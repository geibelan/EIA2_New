namespace magicalCanvas {

    export class Symbol {

        public x: number;
        public y: number;
        public scale: number = 1;
        public setScale: number = 1;
        public scaleUp: boolean = true;
        public size: number;
        public rotation: number = 0;
        public setRotation: number = 0;
        public rotateRight: boolean = true;
        public selected: boolean = false;
        public name: string;

        move(): void {
            this.x += 0.5;

            if (this.x > canvas.width) {
                this.x = -this.size;
            }
        }

        rescale(): void {

            if (this.scale < 1.5 && this.scaleUp == true) {
                this.scale += 0.01;
            } else {

                this.scale -= 0.01;
            }

            if (this.scale >= 1.5) {
                this.scaleUp = false;
            }

            if (this.scale <= 1) {
                this.scaleUp = true;
            }

        }

        rotate(): void {
            if (this.rotation < 10 && this.rotateRight == true) {
                this.rotation += 0.1;
            } else {

                this.rotation -= 0.1;
            }

            if (this.rotation >= 10) {
                this.rotateRight = false;
            }

            if (this.rotation <= 0) {
                this.rotateRight = true;
            }
        }

        edit() {

        }
    }

}