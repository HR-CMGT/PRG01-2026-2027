let colors = [Colors.Yellow, Colors.Green, Colors.Red];

for (let i = 0; i < colors.length; i++) {
    light.setAll(colors[i]);
    loops.pause(1000);
}
