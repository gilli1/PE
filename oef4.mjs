import * as readline from 'node:readline/promises';
import{exit, stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = 33;
let getal2 = 55;



let som = getal + getal2
let verschil = getal - getal2
let verm = getal * getal2
let deling = getal / getal2

console.log("De som van deze getallen zijn: " + (getal + getal2))
console.log("Het verschil van deze getallen zijn: " + (getal - getal2))
console.log("De vermenigvuldiging van deze getallen zijn: " + (getal * getal2))
console.log("De deling van deze getallen zijn: " + (getal / getal2))


process.exit();

