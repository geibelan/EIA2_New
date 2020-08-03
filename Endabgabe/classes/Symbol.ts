namespace magicalCanvas {

    export class Symbol {

        //super-class with all its parameters 
        public x: number;
        public y: number;
        public scale: number = 1; //used in rescale
        public setScale: number = 1; // used for scaling in edit box
        public scaleUp: boolean = true; //used in rescale
        public size: number;
        public rotation: number = 0; //used in rotate
        public setRotation: number = 0; // used for rotating in edit box
        public rotateRight: boolean = true; //used in rotate
        public selected: boolean = false; //used for red outline
        public name: string;
        

        //functions for animation of symbols
        //movement of cloud
        move(): void {
            this.x += 0.5;

            if (this.x > canvas.width) {
                this.x = -this.size;
            }
        }
        //scaling the image in the edit window, if the scale is under 1.5 then the size will be increased by 0.1
        //else it will be decreased by 0.01 if you move the to the left
        //if the range is higher than 1.5 or the same, then the up scaling is stopped and the down scaling starts, if smaller or 1, then up scaling is possible
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