namespace A10 {

    let updateObjects: Moveable[] = [];
    let updateCorona: Corona[] = [];
    export let bodyCells: Moveable[] = [];

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    function handleLoad(_event: Event): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();

        for (let i: number = 0; i < 4; i++) {
           
            let body: Moveable = new Body(40);
            body.draw();
            updateObjects.push(body);
            bodyCells.push(body);
        }

        for (let i: number = 0; i < 10; i++) {
            let corona: Corona = new Corona(30);
            corona.draw();
            updateCorona.push(corona);
        }

        for (let i: number = 0; i < 3; i++) {
            let killer: Moveable = new Killer(30);
            killer.draw();
            updateObjects.push(killer);
        }

        for (let i: number = 0; i < 10; i++) {
            let anti: Moveable = new Anti(10);
            anti.draw();
            updateObjects.push(anti);
        }


        for (let i: number = 0; i < 50; i++) {
            let blod: Moveable = new Blood(7);
            blod.draw();
            updateObjects.push(blod);
        }

        window.requestAnimationFrame(update);
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