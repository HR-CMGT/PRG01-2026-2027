const pricePerKG = 2.15;
let weightInGrams = 150;
let totalPrice = pricePerKG * weightInGrams / 1000; // bereken de totaalprijs (let op: gewicht is in grammen!)
console.log(`${weightInGrams} gram met kiloprijs ${pricePerKG} kost ${totalPrice}`);

const firstName = "Ash";
const lastName = "Ketchum";
let message = `Hallo, ${firstName} ${lastName}` // maak een bericht: "Hallo, Ash Ketchum!"
console.log(message);

const hamburger = 4.20;
const fries = 1.80;
let numberOfBurgers = 3;
let numberOfFries = 5;
let totalBill = hamburger * numberOfBurgers + fries * numberOfFries; // bereken de totale rekening
console.log(`${numberOfBurgers} hamburgers en ${numberOfFries} patat kosten ${totalBill} euro`)