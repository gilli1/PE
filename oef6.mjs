import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let dagen = parseFloat(await userInput.question('Geef het aantal dagen '))
let uren = parseFloat(await userInput.question('Geef het aantal uren '))
let minuten = parseFloat(await userInput.question('Geef het aantal minuten '))
let seconden = parseFloat(await userInput.question('Geef het aantal seconden '))

let berekening = (minuten * 60) + (seconden) + ((uren * 60) * 60) + (((dagen * 24) * 60) * 60)


console.log("Er zitten " + berekening + " seconden in dit tijdperk.")




process.exit();