let ghostPosition = 0;
let pacmanPosition = 5;
let score = 0;
let scoreHistory: number[] = [];
let ghostDelay = 1000;
let powerPills = 3;
const maxPowerPillTime = 15;
// start met max powerpill time zodat hij niet actief is
// dit kan je ook oplossen met een boolean om bij te houden
// of de powerpill actief is
let powerPillTime = maxPowerPillTime;

function gameOver() {
    showAnimation(pacmanPosition);

    console.log("GAME OVER");

    let maxScore = 0;
    for (let i = 0; i < scoreHistory.length; i++) {
        console.log(`${i + 1}. Score: ${scoreHistory[i]}`)
        if (scoreHistory[i] > maxScore) {
            maxScore = scoreHistory[i];
        }
    }
    console.log(`Huidige score ${score}`);
    console.log(`Max score tot nu toe was ${maxScore}`);

    scoreHistory.push(score);
    score = 0;
    ghostPosition = 0;
    pacmanPosition = 5;

    light.clear();

    light.setPixelColor(ghostPosition, Colors.Orange);
    light.setPixelColor(pacmanPosition, Colors.Yellow);
}

function showAnimation(unusedLed: number) {
    for (let i = 0; i < 10; i++) {
        if (i !== unusedLed) {
            light.setPixelColor(i, Colors.Red);
        }
        loops.pause(200);
    }

    for (let i = 9; i > -1; i--) {
        if (i !== unusedLed) {
            light.setPixelColor(i, Colors.Black);
        }
        loops.pause(200);
    }
}


forever(function () {
    loops.pause(ghostDelay);
    light.setPixelColor(ghostPosition, Colors.Black);
    ghostPosition++;
    if (ghostPosition > 9) {
        ghostPosition = 0;
    }
    light.setPixelColor(ghostPosition, Colors.Orange);

    if (ghostPosition === pacmanPosition) {
        gameOver();
    }
})

input.buttonA.onEvent(ButtonEvent.Click, function () {
    powerPillTime++;
    score++;
    light.setPixelColor(pacmanPosition, Colors.Black);
    pacmanPosition++;
    if (pacmanPosition > 9) {
        pacmanPosition = 0;
    }
    if (powerPillTime < maxPowerPillTime) {
        light.setPixelColor(pacmanPosition, Colors.Blue);
    } else {
        light.setPixelColor(pacmanPosition, Colors.Yellow);
    }

    console.log(`Ghost: ${ghostPosition}, Pacman: ${pacmanPosition}, Score: ${score}`)

    if (ghostPosition === pacmanPosition) {
        if (powerPillTime < maxPowerPillTime) {
            score = score + 10;
            powerPillTime = maxPowerPillTime; // zet powerpill uit
            ghostPosition = (ghostPosition + 5) % 10; // % 10 houdt hem op de ring
        } else {
            gameOver();
        }
    }

    ghostDelay = ghostDelay * 0.9;
})


input.buttonsAB.onEvent(ButtonEvent.Click, function () {
    if (powerPills > 0) {
        powerPills--;
        powerPillTime = 0; // reset powerpill time to (re)activate pill
        light.setPixelColor(pacmanPosition, Colors.Blue);
    }
})

light.setPixelColor(ghostPosition, Colors.Orange);
light.setPixelColor(pacmanPosition, Colors.Yellow);