namespace A11 {

    export let updateObjects: Moveable[] = [];
    export let updateCorona: Corona[] = [];
    export let bodyCells: Moveable[] = [];
    export let antibodys: Anti[] = [];

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    function handleLoad(_event: Event): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        canvas.addEventListener("click", attackCoronaCell);
        drawBackground();

        for (let i: number = 0; i < 10; i++) {

            let body: Moveable = new Body(40);
            body.draw();
            updateObjects.push(body);
            bodyCells.push(body);
        }

        for (let i: number = 0; i < 1; i++) {
            let corona: Corona = new Corona(30);
            corona.draw();
            updateCorona.push(corona);
        }

        for (let i: number = 0; i < 3; i++) {
            let killer: Moveable = new Killer(30);
            killer.draw();
            updateObjects.push(killer);
        }

        for (let i: number = 0; i < 3; i++) {
            let anti: Moveable = new Anti(10);
            anti.draw();
            updateObjects.push(anti);
            antibodys.push(anti);
        }


        for (let i: number = 0; i < 50; i++) {
            let blod: Moveable = new Blood(7);
            blod.draw();
            updateObjects.push(blod);
        }

        window.requestAnimationFrame(update);
    }

    function attackCoronaCell(_event: MouseEvent): void {

        let X: number = _event.clientX;
        let Y: number = _event.clientY;
        for (let i: number = 0; updateCorona.length > i; i++) {
            if (X < updateCorona[i].position.x + 30 && X > updateCorona[i].position.x - 30)
                if (Y < updateCorona[i].position.y + 30 && Y > updateCorona[i].position.y - 30) {
                    let antiTarget: Corona = updateCorona[i];
                    for (let i2: number = 0; antibodys.length > i2; i2++) {
                        antibodys[i2].setTarget(antiTarget, i);
                    }

                    setTimeout(
                        function (): void {
                            updateCorona.splice(i, 1);
                        },

                        600);
                }
        }

    }


    function drawBackground(): void {
        let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement('canvas').getContext('2d');
        pattern.canvas.width = 40;
        pattern.canvas.height = 20;

        pattern.fillStyle = 'darkred';
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 10);
        pattern.lineTo(10, 10);
        pattern.lineTo(20, 0);
        pattern.lineTo(30, 0);
        pattern.lineTo(40, 10);
        pattern.lineTo(30, 20);
        pattern.lineTo(20, 20);
        pattern.lineTo(10, 10);
        pattern.stroke();

        crc2.fillStyle = crc2.createPattern(pattern.canvas, 'repeat');
        crc2.fillRect(0, 0, canvas.width, canvas.height);
    }

    function update(): void {
        crc2.clearRect(0, 0, canvas.width, canvas.height);

        drawBackground();
        for (let i: number = 0; i < updateObjects.length; i++) {

            updateObjects[i].move();
            updateObjects[i].draw();
        }
        crc2.globalAlpha = 1;
        for (let i: number = 0; i < updateCorona.length; i++) {

            updateCorona[i].move();
            updateCorona[i].draw();
        }

        window.requestAnimationFrame(update);
    }

}