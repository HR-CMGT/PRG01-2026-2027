let positionA = 0;
let positionB = 0;

function showPlayers() {
    light.clear();
    if (positionA === positionB) {
        light.setPixelColor(positionA, Colors.Yellow);
    } else {
        light.setPixelColor(positionA, Colors.Red);
        light.setPixelColor(positionB, Colors.Green);
    }
}


input.buttonA.onEvent(ButtonEvent.Click, function () {
    // er mag alleen gelopen worden als beide spelers
    // nog niet bij de finish zijn
    if (positionA < 9 && positionB < 9) {
        positionA++;
        showPlayers();
        if (positionA === 9) {
            light.setAll(Colors.Red);
        }
    }
})

input.buttonB.onEvent(ButtonEvent.Click, function () {
    // er mag alleen gelopen worden als beide spelers
    // nog niet bij de finish zijn
    if (positionA < 9 && positionB < 9) {
        positionB++;
        showPlayers();
        if (positionB === 9) {
            light.setAll(Colors.Red);
        }
    }
})


input.buttonsAB.onEvent(ButtonEvent.Click, function () {
    // reset alleen mogelijk als het game over is
    if (positionA === 9 || positionB === 9) {
        positionA = 0;
        positionB = 0;
        showPlayers();
    }
})

showPlayers();
