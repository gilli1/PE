import * as readline from 'node:readline/promises';
import{exit, stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});



let artiest = parseFloat(await userInput.question('Kies een artiest, 1 van deze 4:   1. Red Hot Chili Peppers, 2.  AC/DC, 3. Netsky, 4. De Strangers. '))

switch (artiest) {

    case 1:
console.log("Je favoriete artiest is: Red hot chilli Peppers,  ik weet geen lied." )
    break;
    case 2:
        console.log("Je favoriete artiest is:  AC/DC, ik weet geen lied." )
    break;
    case 3:
        console.log("Je favoriete artiest is: Netsky, ik weet geen lied." )
    break;
    case 4:
        console.log("Je favoriete artiest is: De strangers,  ik weet geen lied." )
    break;


}


console.log(" ")

process.exit();

