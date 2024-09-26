import * as readline from 'node:readline/promises';
import{exit, stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});




let getal = parseFloat(await userInput.question('Geef een getal '))
let getal2 = parseFloat(await userInput.question('Geef een getal '))


console.log("De som van deze getallen zijn: " + (getal + getal2))


process.exit();