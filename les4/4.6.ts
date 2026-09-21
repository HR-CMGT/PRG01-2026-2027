forever(function () {
    for (let i = 0; i < 256; i++) {
        light.setBrightness(i);
    }
    for (let i = 255; i >= 0; i--) {
        light.setBrightness(i);
    }
})

light.setAll(Colors.Red);
