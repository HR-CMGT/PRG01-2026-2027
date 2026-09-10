let ledPosition = 0;

function lightCurrentLed() {
    light.clear();
    light.setPixelColor(ledPosition, Colors.Yellow);
}

function moveToNextLed() {
    ledPosition = ledPosition + 1;
    lightCurrentLed();
}

function moveToPreviousLed() {
    ledPosition = ledPosition - 1;
    lightCurrentLed();
}

input.buttonA.onEvent(ButtonEvent.Click, function () {
    moveToNextLed();
})

input.buttonB.onEvent(ButtonEvent.Click, function () {
    moveToPreviousLed();
})

