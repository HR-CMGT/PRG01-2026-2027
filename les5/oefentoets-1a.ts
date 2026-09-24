// variabele counter nodig
// variabele voor led positie

// kies een willekeurige waarde voor led positie
// toon led

// herhaal
//  wacht 1 seconde
//  verlaag de counter met 1
//  toon de counter

let counter = 3;
let score = 0;
let randomPosition = Math.randomRange(0, 9);
let isLedRed = true;

function showDecoys(count: number) {
    for (let i = 0; i < count; i++) {
        randomPosition = Math.randomRange(0, 9)

        if (Math.randomRange(1, 2) === 1) {
            light.setPixelColor(randomPosition, Colors.Green);
        } else {
            light.setPixelColor(randomPosition, Colors.Pink);
        }

        loops.pause(1000);
        light.clear();
    }
}

forever(function () {
    loops.pause(1000);
    counter--;
    console.log(`De teller staat op ${counter}`);
})

function gameOver() {
    light.setAll(Colors.Red);
    loops.pause(5000);
    score = 0;
    light.clear();
}

function showRandomLed() {
    randomPosition = Math.randomRange(0, 9);
    if (Math.randomRange(1, 2) === 1) {
        light.setPixelColor(randomPosition, Colors.Red);
        isLedRed = true;
    } else {
        light.setPixelColor(randomPosition, Colors.Blue);
        isLedRed = false;
    }

    counter = 3;
    console.log("De counter herstart");
}


input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (isLedRed) {
        score = score + counter;
    } else {
        if (counter < 0) {
            score = score + counter;
        } else {
            score = score - 1
        }
    }

    console.log(`Je kreeg ${counter} punten, totaal: ${score}.`);

    if (score < 0) {
        gameOver();
    }

    showDecoys(Math.randomRange(1, 5));
    showRandomLed();
})

input.buttonB.onEvent(ButtonEvent.Click, function () {
    if (!isLedRed) {
        score = score + counter;
    } else {
        if (counter < 0) {
            score = score + counter;
        } else {
            score = score - 1
        }
    }

    console.log(`Je kreeg ${counter} punten, totaal: ${score}.`);

    if (score < 0) {
        gameOver();
    }

    showDecoys(Math.randomRange(1, 5));
    showRandomLed();
})

light.setPixelColor(randomPosition, Colors.Red);
console.log(`De teller staat op ${counter}`);

