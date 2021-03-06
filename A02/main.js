"use strict";
let sequenz;
let cardLetters;
let cards;
let cardsRevealed = 0;
let tries;
let mistakes = 0;
function main() {
    var newSequenz = prompt("Bitte geben Sie ein Wort ein, welches mindestens 10 Zeichen und höchstens 28 besitzt.", "EIA2-Inverted");
    if (newSequenz != null && newSequenz.length > 9 && newSequenz.length < 28) {
        console.log(newSequenz);
        document.getElementById("sequenz").innerHTML = "Zeichenkette: " + newSequenz;
        sequenz = newSequenz;
        generateBoard();
        var number = prompt("Wie viele Versuche möchten Sie?", "5");
        if (number != null) {
            tries = Number(number);
        }
    }
    else {
        window.location.reload();
    }
}
function generateBoard() {
    cardLetters = sequenz.split("");
    for (let i = cardLetters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardLetters[i], cardLetters[j]] = [cardLetters[j], cardLetters[i]];
    }
    console.log(cardLetters);
    for (let i = 0; i < cardLetters.length; i++) {
        let card = document.createElement("span");
        card.innerHTML = cardLetters[i];
        card.className = "card";
        document.getElementById("board").appendChild(card);
    }
    document.getElementById("startGame").addEventListener("click", start);
}
function start() {
    cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        card.innerHTML = "";
        card.setAttribute("id", "" + i);
        card.addEventListener("click", reveal);
    }
    document.addEventListener("keydown", revealCards);
    document.addEventListener("keyup", turnCards);
}
function revealCards(_event) {
    if (_event.keyCode == 17) {
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i];
            card.innerHTML = cardLetters[i];
        }
    }
}
function turnCards(_event) {
    if (_event.keyCode == 17) {
        for (let i = 0; i < cards.length; i++) {
            cards[i].innerHTML = "";
        }
    }
    document.removeEventListener("keydown", revealCards);
}
function reveal(_event) {
    let originalSequenz = sequenz.split("");
    let target = _event.target;
    let targetLetter = cardLetters[Number(target.getAttribute("id"))];
    if (originalSequenz[cardsRevealed] == targetLetter) {
        if ((cardsRevealed + 1) >= originalSequenz.length) {
            if (!alert("Spiel gewonnen!")) {
                window.location.reload();
            }
        }
        else {
            target.innerHTML = targetLetter;
            cardsRevealed += 1;
        }
    }
    else {
        mistakes += 1;
        document.getElementById("counter").innerHTML = "Fehlversuche: " + mistakes;
        if (mistakes >= tries) {
            if (!alert("Spiel verloren!")) {
                window.location.reload();
            }
        }
        else {
            for (let i = 0; i < cards.length; i++) {
                let card = cards[i];
                card.innerHTML = cardLetters[i];
            }
            setTimeout(function () {
                for (let i = 0; i < cards.length; i++) {
                    let card = cards[i];
                    card.innerHTML = "";
                }
            }, 2000);
            cardsRevealed = 0;
        }
    }
}
window.addEventListener("load", main);
//# sourceMappingURL=main.js.map