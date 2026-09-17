let ledPosition = 0;

forever(function () {
    light.setPixelColor(ledPosition, Colors.Black);
    ledPosition++;
    if (ledPosition > 9) {
        ledPosition = 0;
    }
    light.setPixelColor(ledPosition, Colors.Red);
    loops.pause(100);
})
