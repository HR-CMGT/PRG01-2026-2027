let ledStatus = 0; // 0 uit, 1 half, 2 aan

input.buttonA.onEvent(ButtonEvent.Click, function () {
    ledStatus++;
    if (ledStatus > 2) {
        ledStatus = 0;
    }

    if (ledStatus === 0) {
        light.setBrightness(0);
    }

    if (ledStatus === 1) {
        light.setBrightness(40);
    }

    if (ledStatus === 2) {
        light.setBrightness(255);
    }

})

light.setBrightness(0);
light.setAll(Colors.Red);
