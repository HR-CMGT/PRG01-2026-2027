let counter = 0;

function showCounter() {
    console.log(`De teller staat nu op ${counter}`);
}

forever(function () {
    counter = counter + 1;
    showCounter();
    loops.pause(1000);
})


input.buttonA.onEvent(ButtonEvent.Click, function () {
    counter = 0;
    showCounter();
})
