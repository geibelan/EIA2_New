namespace magicalCanvas {

    //exporting canvas and its drawing style into the main
    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;

    let editBox: HTMLDivElement;

    //setting up arrays for every symbol that is empty for now; every symbol has its own type
    let symbols: Symbol[] = [];

    //this is related to the bg, but not quite sure what it does with move here
    let day: boolean = true;
    let scale: HTMLInputElement;

    let move: boolean = false;

    //initiating the very first page to choose either start or load, loading canvas, drawing style and the bar with symbols
    //also installing buttons, getting all elements by ID
    function handleLoad(): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        editBox = <HTMLDivElement>document.getElementById("edit");

        let start: HTMLButtonElement = <HTMLButtonElement>document.getElementById("start");
        let load: HTMLButtonElement = <HTMLButtonElement>document.getElementById("load");

        start.addEventListener("click", chooseBG);
        load.addEventListener("click", loadFromDB);
    }

    //getting elements by ID, putting the title page on not-visible, showing bg page
    //first defining the choice of day bg, then night by putting day on false
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

    //not sure
    let type: string;

    //after choosing bg and drawing it, load canvas, hide choose bg page
    function startPicture(): void {
        let startScreen: HTMLDivElement = <HTMLDivElement>document.getElementById("canvas");
        startScreen.style.display = "block";

        let bgScreen: HTMLDivElement = <HTMLDivElement>document.getElementById("show-bg");
        bgScreen.style.display = "none";

        drawBG();

        //resizing the entire canvas
        scale = (<HTMLInputElement>document.getElementById("scale"));
        scale.addEventListener("input", resizeCanvas);

        //installing click listener to the symbols at mousedown and keeping the left mouse button pressed down
        //placeSymbol not super sure
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

        //left mouse button released, symbol won't move anymore
        canvas.addEventListener("mouseup", function (): void {
            move = false;
        });

        //mouse is moving, moving symbol with it, own function
        canvas.addEventListener("mousemove", moveSymbol);

        //finding symbol? checking if the event listener is being run when you click on a symbol, I guess
        canvas.addEventListener("click", findSymbol);

        //installing event listener for the editing box that pops up when clicking on a set symbol
        document.getElementById("clear")?.addEventListener("click", deletePicture);
        document.getElementById("close")?.addEventListener("click", closeEdit);
        document.getElementById("delete")?.addEventListener("click", deleteSymbol);
        document.getElementById("newPosition")?.addEventListener("click", rePositionSymbol);
        document.getElementById("rotate")?.addEventListener("input", rotateSymbol);
        document.getElementById("scale-symbol")?.addEventListener("input", scaleSymbol);
        document.getElementById("save")?.addEventListener("click", sendImage);

        update();
    }

    let selectedSymbol: Symbol;

    //creating functions for the editing box 
    function scaleSymbol(): void {
        selectedSymbol.setScale = Number((<HTMLInputElement>document.getElementById("scale-symbol")).value);
    }

    function rotateSymbol(): void {
        selectedSymbol.setRotation = Number((<HTMLInputElement>document.getElementById("rotate")).value);
    }

    function rePositionSymbol(): void {
        type = "rePosition";
        move = true;
        closeEdit();

    }

    function deleteSymbol(): void {

        let index: number = symbols.indexOf(selectedSymbol);
        symbols.splice(index, 1);
        closeEdit();

    }

    function closeEdit(): void {
        selectedSymbol.selected = false;
        editBox.style.display = "none";

    }

    //complicated function, got to do with repositioning the symbol when you've already put it down 
    //cloud got an extra function
    function findSymbol(_event: MouseEvent): void {
        if (move == true && type == "rePosition") {
            move = true;
        } else {
            for (let i: number = 0; symbols.length > i; i++) {
                if (symbols[i].name == "cloud") {
                    if (_event.offsetX > (symbols[i].x) && _event.offsetX < (symbols[i].x + symbols[i].size)) {
                        if (_event.offsetY > (symbols[i].y - symbols[i].size / 2) && _event.offsetY < (symbols[i].y + symbols[i].size / 2)) {
                            if (selectedSymbol != undefined) {
                                selectedSymbol.selected = false;
                            }
                            selectedSymbol = symbols[i];
                            selectedSymbol.selected = true;
                            (<HTMLInputElement>document.getElementById("rotate")).value = "0";
                            (<HTMLInputElement>document.getElementById("scale-symbol")).value = "1";
                            editBox.style.display = "block";
                            editBox.style.left = (symbols[i].x + symbols[i].size) + "px";
                            editBox.style.top = (symbols[i].y + symbols[i].size) + "px";

                        }
                    }
                }
                else if (symbols[i].name == "tree" || symbols[i].name == "house") {
                    if (_event.offsetX > (symbols[i].x - symbols[i].size / 2) && _event.offsetX < (symbols[i].x + symbols[i].size)) {
                        if (_event.offsetY > (symbols[i].y - symbols[i].size * 1.25) && _event.offsetY < (symbols[i].y)) {
                            if (selectedSymbol != undefined) {
                                selectedSymbol.selected = false;
                            }
                            selectedSymbol = symbols[i];
                            selectedSymbol.selected = true;
                            (<HTMLInputElement>document.getElementById("rotate")).value = "0";
                            (<HTMLInputElement>document.getElementById("scale-symbol")).value = "1";
                            editBox.style.display = "block";
                            editBox.style.left = (symbols[i].x + symbols[i].size) + "px";
                            editBox.style.top = (symbols[i].y + symbols[i].size) + "px";

                        }
                    }
                }
                else {
                    if (_event.offsetX > (symbols[i].x - symbols[i].size) && _event.offsetX < (symbols[i].x + symbols[i].size)) {
                        if (_event.offsetY > (symbols[i].y - symbols[i].size) && _event.offsetY < (symbols[i].y + symbols[i].size)) {
                            if (selectedSymbol != undefined) {
                                selectedSymbol.selected = false;
                            }
                            selectedSymbol = symbols[i];
                            selectedSymbol.selected = true;
                            (<HTMLInputElement>document.getElementById("rotate")).value = "0";
                            (<HTMLInputElement>document.getElementById("scale-symbol")).value = "1";
                            editBox.style.display = "block";
                            editBox.style.left = (symbols[i].x + symbols[i].size) + "px";
                            editBox.style.top = (symbols[i].y + symbols[i].size) + "px";

                        }
                    }
                }

            }
        }
    }

    //deleting all symbols in their specific array, then drawing the bg new
    function deletePicture(): void {
        symbols = [];
        drawBG();
    }

    //creating variables with their respective type
    let moon: Moon;
    let cloud: Cloud;
    let house: House;
    let star: Star;
    let sun: Sun;
    let tree: Tree;

    //playing symbols in their specific array
    function placeSymbol(): void {

        if (type == "moon") {
            moon = new Moon();
            moon.name = "moon";
            symbols.push(moon);
        }

        if (type == "cloud") {
            cloud = new Cloud();
            cloud.name = "cloud";
            symbols.push(cloud);
        }

        if (type == "house") {
            house = new House();
            house.name = "house";
            symbols.push(house);
        }

        if (type == "star") {
            star = new Star();
            star.name = "star";
            symbols.push(star);
        }

        if (type == "sun") {
            sun = new Sun();
            sun.name = "sun";
            symbols.push(sun);
        }

        if (type == "tree") {
            tree = new Tree();
            tree.name = "tree";
            symbols.push(tree);
        }

        move = true;
    }

    //if clicked on symbol, the symbol is being attached to the mouses position and moves with it
    function moveSymbol(_event: MouseEvent): void {
        if (move == true) {

            if (type == "rePosition") {
                selectedSymbol.x = _event.offsetX;
                selectedSymbol.y = _event.offsetY;
            }

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

            drawSymbol();

        }
    }

    //easy loop, if i is larger than 0, add one symbol into the array
    function drawSymbol(): void {
        for (let i: number = 0; symbols.length > i; i++) {
            symbols[i].draw();
        }
    }

    function resizeCanvas(): void {
        let width: number = 500;
        let height: number = 300;

        canvas.width = width * Number(scale.value);
        canvas.height = height * Number(scale.value);
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

    function update(): void {

        drawBG();

        for (let i: number = 0; symbols.length > i; i++) {
            if (symbols[i].name == "star" || symbols[i].name == "sun" || symbols[i].name == "moon") {

                symbols[i].rescale();
            }
            if (symbols[i].name == "tree") {

                symbols[i].rotate();
            }
            if (symbols[i].name == "cloud") {

                symbols[i].move();
            }
            symbols[i].draw();
        }

        window.requestAnimationFrame(update);
    }

    ////////////////////////////
    let url: string = "https://eiabalance.herokuapp.com/";

    async function sendImage(_event: Event): Promise<void> {
        console.log("Send");
        let formData: FormData = new FormData();
        formData.append("draw", JSON.stringify(symbols));
        if (day == true) {
            formData.append("bg", "Day");
        } else {
            formData.append("bg", "Night");
        }
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(url + "?" + query.toString());
        let responseText: string = await response.text();
        alert(responseText);

    }

    async function loadFromDB(_event: Event): Promise<void> {
        console.log("Load");
        let formData: FormData = new FormData();
        formData.append("load", "all");

        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(url + "?" + query.toString());
        let responseText: string = await response.text();
        alert(responseText);
        console.log(JSON.parse(responseText));

    }

    window.addEventListener("load", handleLoad);
}