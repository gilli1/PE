import * as readline from 'node:readline/promises';
import{exit, stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let getal = parseFloat(await userInput.question)

let teller = 0;

while(teller < getal) {

    console.log("Haha" + teller)
    teller++
}



process.exit;