let temperature = 0;

forever(function () {
    temperature = input.temperature(TemperatureUnit.Celsius);

    if (temperature < 10) {
        light.setAll(Colors.Blue);
    }

    if (temperature >= 10 && temperature <= 25) {
        light.setAll(Colors.Green);
    }

    if (temperature > 25) {
        light.setAll(Colors.Red);
    }

})
