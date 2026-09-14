let ledPosition = 0;


function showLed() {
    light.clear();
    light.setPixelColor(ledPosition, Colors.Red);
}

input.buttonA.onEvent(ButtonEvent.Click, function () {
    ledPosition = ledPosition + 1;
    showLed();
})

input.buttonB.onEvent(ButtonEvent.Click, function () {
    ledPosition = ledPosition - 1;
    showLed();
})


input.onGesture(Gesture.Shake, function () {
    ledPosition = 0;
    showLed();
})

showLed();

