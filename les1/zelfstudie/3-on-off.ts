
input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.setAll(Colors.Red);
})


input.onGesture(Gesture.Shake, function () {
    light.clear();
})
