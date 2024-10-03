import * as readline from 'node:readline/promises';
import{exit, stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogsteGetal
let laagsteGetal
let gemiddelde = 0;

let getal = parseFloat(await userInput.question("Geef een getal in 1/5"))

gemiddelde += getal;
hoogsteGetal = getal;
laagsteGetal = getal;

getal = parseFloat(await userInput.question("Geef een getal in 2/5"))

gemiddelde += getal;
if(hoogsteGetal < getal) {
    hoogsteGetal = getal
}
if(laagsteGetal > getal) {
    laagsteGetal = getal
}
console.log("hoogste getal " + hoogsteGetal + "laagste getal" + laagsteGetal)