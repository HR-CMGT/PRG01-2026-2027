// variabelen: 
// countdown start op 3
// randomPosition, 0-9

// kies randomPosition
// toon led op randomPosition

// herhaal:
//  verlaag de countdown
//  toon de countdown
//  pauze 1 seconde

let countdown = 3;
let randomPosition = Math.randomRange(0, 9);
let score = 0;
let isRed = true;

light.setPixelColor(randomPosition, Colors.Red);
console.log(`De teller start op ${countdown}`);

function gameOver() {
    // game over
    light.setAll(Colors.Red);
    loops.pause(5000);
    score = 0;
    light.clear();
}

function showGreenLeds(count: number) {
    for (let i = 0; i < count; i++) {
        randomPosition = Math.randomRange(0, 9);

        if (Math.randomRange(0, 1) === 0) {
            light.setPixelColor(randomPosition, Colors.Green);
        } else {
            light.setPixelColor(randomPosition, Colors.Pink);
        }


        loops.pause(1000);
        light.clear();
    }
}

forever(function () {
    countdown--;
    console.log(`De teller staat op ${countdown}`);
    loops.pause(1000);
})

function showNextLed() {
    randomPosition = Math.randomRange(0, 9);

    if (Math.randomRange(0, 1) === 0) {
        light.setPixelColor(randomPosition, Colors.Red);
        isRed = true;
    } else {
        light.setPixelColor(randomPosition, Colors.Blue);
        isRed = false;
    }

    countdown = 3;
}

input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (isRed) {
        score = score + countdown;
    } else {
        if (countdown < 0) {
            score = score + countdown;
        } else {
            score = score - 1;
        }
    }

    light.clear();
    console.log(`Je kreeg ${countdown} punten, totaal nu ${score}`);

    if (score < 0) {
        gameOver();
    }

    //loops.pause(Math.randomRange(1, 5) * 1000);
    showGreenLeds(Math.randomRange(1, 5));

    showNextLed();
})

input.buttonB.onEvent(ButtonEvent.Click, function () {
    if (!isRed) {
        score = score + countdown;
    } else {
        if (countdown < 0) {
            score = score + countdown;
        } else {
            score = score - 1;
        }
    }

    light.clear();
    console.log(`Je kreeg ${countdown} punten, totaal nu ${score}`);

    if (score < 0) {
        gameOver();
    }

    //loops.pause(Math.randomRange(1, 5) * 1000);
    showGreenLeds(Math.randomRange(1, 5));

    showNextLed();
})

