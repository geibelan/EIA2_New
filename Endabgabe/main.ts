namespace magicalCanvas {
    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;

    let moons: Moon[] = [];
    let clouds: Cloud[] = [];
    let houses: House[] = [];
    let stars: Star[] = [];
    let suns: Sun[] = [];
    let trees: Tree[] = [];

    let day: boolean = true;
    let scale: HTMLInputElement;
    let move: boolean = false;

    function handleLoad(): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let start: HTMLButtonElement = <HTMLButtonElement>document.getElementById("start");
        let load: HTMLButtonElement = <HTMLButtonElement>document.getElementById("load");

        start.addEventListener("click", chooseBG);
    }

    function chooseBG(): void {
        let startScreen: HTMLDivElement = <HTMLDivElement>document.getElementById("title-page");
        startScreen.style.display = "none";

        let bgScreen: HTMLDivElement = <HTMLDivElement>document.getElementById("show-bg");
        bgScreen.style.display = "flex";

        let bgDay: HTMLImageElement = <HTMLImageElement>document.getElementById("day");
        bgDay.addEventListener("click", function (): void {
            startPicture();
        });

        let bgNight: HTMLImageElement = <HTMLImageElement>document.getElementById("night");
        bgNight.addEventListener("click", function (): void {
            day = false;
            startPicture();
        });
    }

    let type: string;

    function startPicture(): void {
        let startScreen: HTMLDivElement = <HTMLDivElement>document.getElementById("canvas");
        startScreen.style.display = "block";

        let bgScreen: HTMLDivElement = <HTMLDivElement>document.getElementById("show-bg");
        bgScreen.style.display = "none";

        drawBG();

        scale = (<HTMLInputElement>document.getElementById("scale"));
        scale.addEventListener("input", resizeCanvas);

        document.getElementById("moon")?.addEventListener("mousedown", function (): void {
            type = "moon";
            placeSymbol();
        });

        document.getElementById("cloud")?.addEventListener("mousedown", function (): void {
            type = "cloud";
            placeSymbol();
        });

        document.getElementById("house")?.addEventListener("mousedown", function (): void {
            type = "house";
            placeSymbol();
        });

        document.getElementById("star")?.addEventListener("mousedown", function (): void {
            type = "star";
            placeSymbol();
        });

        document.getElementById("sun")?.addEventListener("mousedown", function (): void {
            type = "sun";
            placeSymbol();
        });

        document.getElementById("tree")?.addEventListener("mousedown", function (): void {
            type = "tree";
            placeSymbol();
        });

        canvas.addEventListener("mouseup", function (): void {
            move = false;
        });

        canvas.addEventListener("mousemove", moveSymbol);

        document.getElementById("clear")?.addEventListener("click", deletePicture);
    }

    function deletePicture(): void {

        moons = [];
        clouds = [];
        houses = [];
        stars = [];
        suns = [];
        trees = [];

        drawBG();
    }

    let moon: Moon;
    let cloud: Cloud;
    let house: House;
    let star: Star;
    let sun: Sun;
    let tree: Tree;

    function placeSymbol(): void {

        if (type == "moon") {
            moon = new Moon();
            moons.push(moon);
        }

        if (type == "cloud") {
            cloud = new Cloud();
            clouds.push(cloud);
        }

        if (type == "house") {
            house = new House();
            houses.push(house);
        }

        if (type == "star") {
            star = new Star();
            stars.push(star);
        }

        if (type == "sun") {
            sun = new Sun();
            suns.push(sun);
        }

        if (type == "tree") {
            tree = new Tree();
            trees.push(tree);
        }

        move = true;
    }

    function moveSymbol(_event: MouseEvent): void {
        if (move == true) {

            if (type == "moon") {
                moon.x = _event.offsetX;
                moon.y = _event.offsetY;
            }

            if (type == "cloud") {
                cloud.x = _event.offsetX;
                cloud.y = _event.offsetY;
            }

            if (type == "house") {
                house.x = _event.offsetX;
                house.y = _event.offsetY;
            }

            if (type == "star") {
                star.x = _event.offsetX;
                star.y = _event.offsetY;
            }

            if (type == "sun") {
                sun.x = _event.offsetX;
                sun.y = _event.offsetY;
            }

            if (type == "tree") {
                tree.x = _event.offsetX;
                tree.y = _event.offsetY;
            }

            drawBG();

            for (let i: number = 0; stars.length > i; i++) {
                stars[i].draw();
            }

            for (let i: number = 0; moons.length > i; i++) {
                moons[i].draw();
            }

            for (let i: number = 0; suns.length > i; i++) {
                suns[i].draw();
            }

            for (let i: number = 0; houses.length > i; i++) {
                houses[i].draw();
            }

            for (let i: number = 0; clouds.length > i; i++) {
                clouds[i].draw();
            }

            for (let i: number = 0; trees.length > i; i++) {
                trees[i].draw();
            }
        }
    }

    function resizeCanvas(): void {
        let width: number = canvas.width;
        let height: number = canvas.height;

        canvas.style.width = width * Number(scale.value) + "px";
        canvas.style.height = height * Number(scale.value) + "px";
    }

    function drawBG(): void {
        crc2.clearRect(0, 0, canvas.width, canvas.height);

        if (day == true) {
            //sky
            crc2.fillStyle = "skyblue";
            crc2.fillRect(0, 0, canvas.width, canvas.height);

            //background
            crc2.fillStyle = "limegreen";
            crc2.strokeStyle = "limegreen";
            crc2.lineWidth = 2;
            crc2.beginPath();
            crc2.moveTo(0, canvas.height);
            crc2.lineTo(0, canvas.height - 50);
            crc2.quadraticCurveTo(canvas.width / 2, canvas.height - 250, canvas.width, canvas.height - 50);
            crc2.lineTo(canvas.width, canvas.height);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            //foreground
            crc2.fillStyle = "forestgreen";
            crc2.strokeStyle = "forestgreen";
            crc2.beginPath();
            crc2.moveTo(0, canvas.height);
            crc2.lineTo(0, canvas.height - 150);
            crc2.bezierCurveTo(20, canvas.height - 150, 20, canvas.height - 20, canvas.width / 2, canvas.height - 20);
            crc2.bezierCurveTo(canvas.width - 20, canvas.height - 20, canvas.width - 20, canvas.height - 150, canvas.width, canvas.height - 150);
            crc2.lineTo(canvas.width, canvas.height);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

        } else {
            //sky
            crc2.fillStyle = "#252D3F";
            crc2.fillRect(0, 0, canvas.width, canvas.height);

            //background
            crc2.fillStyle = "#142615";
            crc2.strokeStyle = "#142615";
            crc2.lineWidth = 2;
            crc2.beginPath();
            crc2.moveTo(0, canvas.height);
            crc2.lineTo(0, canvas.height - 30);
            crc2.quadraticCurveTo(canvas.width / 2, canvas.height - 270, canvas.width, canvas.height - 30);
            crc2.lineTo(canvas.width, canvas.height);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
    }

    window.addEventListener("load", handleLoad);
}