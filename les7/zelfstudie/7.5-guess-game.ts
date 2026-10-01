let computerSide = 0; // 0 links, 1 rechts
let correct = 0;
let wrong = 0;

function chooseSide() {
    computerSide = Math.randomRange(0, 1);
}

function checkWin(playerSide: number) {
    light.clear();
    if (playerSide == computerSide) {
        // win
        correct++;
        
        for (let i = 0; i < 10; i++) {
            light.setPixelColor(i, Colors.Yellow);
            loops.pause(200);
            light.clear();
        }
    } else {
        // loose
        wrong++;
    }

    console.log(`Goed: ${correct}, Fout: ${wrong}`);

}


input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.showRing("red red red red red black black black black black");
    loops.pause(1000);
    checkWin(0);
    chooseSide();
})

input.buttonB.onEvent(ButtonEvent.Click, function () {
    light.showRing("black black black black black red red red red red");
    loops.pause(1000);
    checkWin(1);
    chooseSide();
})
