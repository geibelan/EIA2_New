namespace magicalCanvas {

  export class Star extends Symbol {


    draw(): void {
      var alpha: number = (2 * Math.PI) / 10;
      console.log(this.setScale);
      var radius: number = (10 * this.setScale) * this.scale;
      var starXY: number[] = [this.x, this.y];

      crc2.save();
      crc2.translate(this.x, this.y);
      crc2.rotate((0 + this.setRotation) * Math.PI / 180);
      crc2.translate(-this.x, -this.y);

      crc2.beginPath();

      for (var i: number = 11; i != 0; i--) {
        var r: number = radius * (i % 2 + 1) / 2;
        var omega: number = alpha * i;
        crc2.lineTo((r * Math.sin(omega)) + starXY[0], (r * Math.cos(omega)) + starXY[1]);
      }
      crc2.closePath();
      crc2.fillStyle = "#E3F067";
      if (this.selected == true) {
        crc2.strokeStyle = "#ff0000";
        crc2.lineWidth = 2;
        crc2.stroke();
      }
      crc2.fill();
      crc2.restore();

      this.size = (10* this.setScale) * this.scale;
    }


  }
}