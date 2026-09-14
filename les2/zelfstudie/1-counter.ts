let counter = 0;

function showCounter() {
    console.log(`De teller staat nu op ${counter}`);
}

input.buttonA.onEvent(ButtonEvent.Click, function () {
    counter = counter + 1;
    showCounter();
})

input.buttonB.onEvent(ButtonEvent.Click, function () {
    counter = counter - 1;
    showCounter();
})

