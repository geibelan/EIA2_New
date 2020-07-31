/*
  //star
            var alpha = (2 * Math.PI) / 10;
            var radius = 20;
            var starXY = [100, 100];

            crc2.beginPath();

            for (var i = 11; i != 0; i--) {
                var r = radius * (i % 2 + 1) / 2;
                var omega = alpha * i;
                crc2.lineTo((r * Math.sin(omega)) + starXY[0], (r * Math.cos(omega)) + starXY[1]);
            }
            crc2.closePath();
            crc2.fillStyle = "#E3F067";
            crc2.fill();
*/