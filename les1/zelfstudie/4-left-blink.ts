forever(function () {
    light.setPixelColor(0, Colors.Red);
    light.setPixelColor(1, Colors.Red);
    light.setPixelColor(2, Colors.Red);
    light.setPixelColor(3, Colors.Red);
    light.setPixelColor(4, Colors.Red);
    loops.pause(500);

    light.setPixelColor(0, Colors.Black);
    light.setPixelColor(1, Colors.Black);
    light.setPixelColor(2, Colors.Black);
    light.setPixelColor(3, Colors.Black);
    light.setPixelColor(4, Colors.Black);
    loops.pause(500);
})

input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.setPixelColor(5, Colors.Red);
    light.setPixelColor(6, Colors.Red);
    light.setPixelColor(7, Colors.Red);
    light.setPixelColor(8, Colors.Red);
    light.setPixelColor(9, Colors.Red);
})

input.buttonB.onEvent(ButtonEvent.Click, function () {
    light.setPixelColor(5, Colors.Black);
    light.setPixelColor(6, Colors.Black);
    light.setPixelColor(7, Colors.Black);
    light.setPixelColor(8, Colors.Black);
    light.setPixelColor(9, Colors.Black);
})
