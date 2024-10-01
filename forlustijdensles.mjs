import * as readline from 'node:readline/promises';
import{exit, stdin as input, stdout as output} from 'node:process';
import { get } from 'node:http';
const userInput = readline.createInterface({input, output});


let getal = parseFloat(await userInput.question("Hoeveel getallen ?"))


for(let teller = 0; teller < getal; teller++)
{
    console.log("infinity" + teller)
}



process.exit;