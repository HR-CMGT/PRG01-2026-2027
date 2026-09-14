let ledPosition = 0;

function showLed() {
    light.clear();
    light.setPixelColor(ledPosition, Colors.Red);
}
input.buttonA.onEvent(ButtonEvent.Click, function () {
    ledPosition = Math.randomRange(0, 9);
    showLed();
})

showLed();
