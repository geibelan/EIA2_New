namespace magicalCanvas {

  export class Star extends Symbol {

    draw(): void {
      var alpha: number = (2 * Math.PI) / 10;
      var radius: number = 10;
      var starXY: number[] = [this.x, this.y];

      crc2.beginPath();

      for (var i: number = 11; i != 0; i--) {
        var r: number = radius * (i % 2 + 1) / 2;
        var omega: number = alpha * i;
        crc2.lineTo((r * Math.sin(omega)) + starXY[0], (r * Math.cos(omega)) + starXY[1]);
      }
      crc2.closePath();
      crc2.fillStyle = "#E3F067";
      crc2.fill();
    }

  }
}