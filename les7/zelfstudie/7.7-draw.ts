let position = 0;

let ledisOn = [false, false, false, false, false, false, false, false, false, false];


input.buttonA.onEvent(ButtonEvent.Click, function () {
    position++;
    if (position > 9) {
        position = 0;
    }
    console.log(`We zijn nu bij LED ${position}`);
    light.setPixelColor(position, Colors.White);
    loops.pause(200);
    light.setPixelColor(position, Colors.Black);
    loops.pause(200);

    if (ledisOn[position]) {
        light.setPixelColor(position, Colors.Green);
    }
})


input.buttonB.onEvent(ButtonEvent.Click, function () {
    if (!ledisOn[position]) {
        light.setPixelColor(position, Colors.Green);
        ledisOn[position] = true;
    } else {
        light.setPixelColor(position, Colors.Black);
        ledisOn[position] = false;
    }
})

input.buttonsAB.onEvent(ButtonEvent.Click, function () {
    // begin met 1 verschuiving, en eindig met 10 
    // (zodat hij weer op zijn plek staat)
    for (let offSet = 1; offSet <= 10; offSet++) {
        // toon de tekening met verschuiving
        for (let i = 0; i < 10; i++) {
            // de % 10 zorgt dat we altijd tussen 0 en 9 blijven
            // ook als we verder dan 9 komen
            if (ledisOn[(i + offSet) % 10]) {
                light.setPixelColor(i, Colors.Green);
            } else {
                // clear niet nodig omdat we ook LEDs uit zetten
                light.setPixelColor(i, Colors.Black);
            }
        }
        loops.pause(200);
    }
})
