let sequenz: string;
let cardLetters: string[];
let cards: any;
let cardsRevealed: number = 0;
let tries: number;
let mistakes: number = 0;

function main(): void {

    var newSequenz: any = prompt("Bitte geben Sie ein Wort ein, welches mindestens 10 Zeichen und höchstens 28 besitzt.", "EIA2-Inverted");
    if (newSequenz != null && newSequenz.length > 9 && newSequenz.length < 28) {
        console.log(newSequenz);
        (<HTMLParagraphElement>document.getElementById("sequenz")).innerHTML = "Zeichenkette: " + newSequenz;

        sequenz = newSequenz;

        generateBoard();

        var number: any = prompt("Wie viele Versuche möchten Sie?", "5");
        if (number != null) {

            tries = Number(number);
        }
    } else {
        window.location.reload();
    }
}

function generateBoard(): void {

    cardLetters = sequenz.split("");

    for (let i: number = cardLetters.length - 1; i > 0; i--) {
        const j: number = Math.floor(Math.random() * (i + 1));
        [cardLetters[i], cardLetters[j]] = [cardLetters[j], cardLetters[i]];
    }
    console.log(cardLetters);
    for (let i: number = 0; i < cardLetters.length; i++) {

        let card: HTMLSpanElement = document.createElement("span");
        card.innerHTML = cardLetters[i];
        card.className = "card";
        (<HTMLSpanElement>document.getElementById("board")).appendChild(card);
    }
    (<HTMLButtonElement>document.getElementById("startGame")).addEventListener("click", start);
}

function start(): void {

    cards = document.getElementsByClassName("card");

    for (let i: number = 0; i < cards.length; i++) {
        let card: HTMLSpanElement = cards[i];
        card.innerHTML = "";
        card.setAttribute("id", "" + i);
        card.addEventListener("click", reveal);
    }

    document.addEventListener("keydown", revealCards);
    document.addEventListener("keyup", turnCards);
}

function revealCards(_event: KeyboardEvent): void {

    if (_event.keyCode == 17) {
        for (let i: number = 0; i < cards.length; i++) {
            let card: HTMLSpanElement = cards[i];
            card.innerHTML = cardLetters[i];
        }
    }
}

function turnCards(_event: KeyboardEvent): void {

    if (_event.keyCode == 17) {
        for (let i: number = 0; i < cards.length; i++) {
            cards[i].innerHTML = "";
        }
    }
    document.removeEventListener("keydown", revealCards);
}

function reveal(_event: MouseEvent): void {

    let originalSequenz: string[] = sequenz.split("");

    let target: HTMLSpanElement = <HTMLSpanElement>_event.target;

    let targetLetter: string = cardLetters[Number(target.getAttribute("id"))];

    if (originalSequenz[cardsRevealed] == targetLetter) {

        if ((cardsRevealed + 1) >= originalSequenz.length) {
            if (!alert("Spiel gewonnen!")) { window.location.reload(); }
        } else {
            target.innerHTML = targetLetter;
            cardsRevealed += 1;
        }
    } else {

        mistakes += 1;
        (<HTMLParagraphElement>document.getElementById("counter")).innerHTML = "Fehlversuche: " + mistakes;

        if (mistakes >= tries) {
            if (!alert("Spiel verloren!")) { window.location.reload(); }
        } else {

            for (let i: number = 0; i < cards.length; i++) {
                let card: HTMLSpanElement = cards[i];
                card.innerHTML = cardLetters[i];
            }

            setTimeout(function (): void {
                for (let i: number = 0; i < cards.length; i++) {
                    let card: HTMLSpanElement = cards[i];
                    card.innerHTML = "";
                }
            }, 2000);

            cardsRevealed = 0;
        }
    }
}

window.addEventListener("load", main);