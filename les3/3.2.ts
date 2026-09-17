const totalPokemon = 151;
let pokemonCaught = 0;
let randomNumber = 0;
let pctCaught = 0;

input.buttonA.onEvent(ButtonEvent.Click, function () {
    console.log("Probeer Pokemon te vangen");
    randomNumber = Math.randomRange(1, 6);
    if (randomNumber === 1) {
        if (pokemonCaught < totalPokemon) {
            console.log("Gefeliciteerd! Je vangt een nieuwe Pokémon!");
            pokemonCaught++;
        } else {
            console.log("Gefeliciteerd! O, wacht. Je Pokedex is al vol");
        }
    } else {
        console.log("Helaas, geen Pokémon gevangen dit keer");
    }
})


input.buttonB.onEvent(ButtonEvent.Click, function () {
    pctCaught = (pokemonCaught / totalPokemon) * 100;
    pctCaught = Math.round(pctCaught);
    console.log(`Je hebt ${pokemonCaught} van ${totalPokemon} gevangen, dat is ${pctCaught}%`);

    if (pctCaught === 50) {
        console.log("Je bent halverwege!")
    }

    if (pokemonCaught === totalPokemon) {
        console.log("Pokédex compleet! Je bent een Pokémon Master!")
    }

})
