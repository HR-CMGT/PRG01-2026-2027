let ledPosition = 0;
let isMovingClockwise = false;

forever(function () {
    light.setPixelColor(ledPosition, Colors.Black);
    if (isMovingClockwise) {
        ledPosition--;
        // swap direction
        if (ledPosition === 0) {
            isMovingClockwise = false;
        }
    } else {
        ledPosition++;
        if (ledPosition === 9) {
            isMovingClockwise = true;
        }
    }
    light.setPixelColor(ledPosition, Colors.Yellow);
    loops.pause(100);
})
