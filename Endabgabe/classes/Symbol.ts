namespace magicalCanvas {

    export class Symbol {

        //super-class with all its parameters 
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
        
        //movement of cloud
        move(): void {
            this.x += 0.5;

            if (this.x > canvas.width) {
                this.x = -this.size;
            }
        }
        //scaling the image in the edit window, if the scale is under 1.5 then the size will be increased by 0.1
        //else it will be decreased by 0.01 if you move the to the left
        //if the range is higher than 1.5 or the same, then the scaling is stopped, if smaller or 1, then scaling is possible
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

        //similar principle as above
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

    
    }

}