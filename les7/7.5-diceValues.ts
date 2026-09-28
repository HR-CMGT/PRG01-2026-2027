let diceValues = [];

function countValues(list: number[], diceValue: number) {
    let count = 0;

    for (let i = 0; i < list.length; i++) {
        if (list[i] === diceValue) {
            count++;
        }
    }

    console.log(`Waarde ${diceValue} komt ${count} keer voor in deze lijst van ${list.length} waarden`)
}

for (let i = 0; i < 1000; i++) {
    diceValues.push(Math.randomRange(1, 6));
}

countValues(diceValues, 1);
countValues(diceValues, 2);
countValues(diceValues, 3);
countValues(diceValues, 4);
countValues(diceValues, 5);
countValues(diceValues, 6);

