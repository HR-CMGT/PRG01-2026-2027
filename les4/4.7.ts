let stepCount = 0;
const stepTarget = 5;

input.onGesture(Gesture.Shake, function () {
    stepCount++;
    console.log(`Je hebt ${stepCount} stappen gezet`);

    if (stepCount === stepTarget) {
        console.log("Doel gehaald!");
        light.showAnimation(light.rainbowAnimation, 500)
    }
})

// tientallen
input.buttonA.onEvent(ButtonEvent.Click, function () {
    // clear voor je de nieuwe laat zien
    light.clear();
    for (let i = 0; i < Math.floor(stepCount / 10); i++) {
        light.setPixelColor(i, Colors.Blue);
    }
})

// eenheden
input.buttonB.onEvent(ButtonEvent.Click, function () {
    // clear voor je de nieuwe laat zien
    light.clear();
    for (let i = 0; i < stepCount % 10; i++) {
        light.setPixelColor(i, Colors.Green);
    }
})
