import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:http';
const userInput = readline.createInterface({input, output});


let max = 25
let min = 2

let getal = parseFloat(await userInput.question('Geef een getal '))

if(getal > max)
    {
        console.log('Dit getal ligt niet tussen 2 en 25');
    }
    else if(getal < min ){
        console.log('Dit getal ligt niet tussen 2 en 25');
    }
    else
     {
        console.log('Dit getal ligt tussen 2 en 25')
    }

process.exit();