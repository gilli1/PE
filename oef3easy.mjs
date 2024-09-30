import * as readline from 'node:readline/promises';
import{exit, stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});




let maand = await userInput.question('Welke maand wilt u weten hoeveel dagen er zijn? ')

switch(maand)


{
case 'Januari':
    console.log('Deze maand heeft 31 dagen')
    break;
    case 'Februari':
        console.log('Deze maand heeft 29 dagen')
    break;
    case 'Maart':
        console.log('Deze maand heeft 31 dagen')
    break;
    case 'April':
        console.log('Deze maand heeft 30 dagen')
    break;
    case 'Mei':
        console.log('Deze maand heeft 31 dagen')
    break;
    case 'Juni':
        console.log('Deze maand heeft 30 dagen')
    break;
    case 'Juli':
        console.log('Deze maand heeft 31 dagen')
    break;
    case 'Augustus':
        console.log('Deze maand heeft 31 dagen')
    break;
    case 'September':
        console.log('Deze maand heeft 30 dagen')
    break;
    case 'Oktober':
        console.log('Deze maand heeft 31 dagen')
    break;
    case 'November':
        console.log('Deze maand heeft 30 dagen')
    break;
    case 'December':
        console.log('Deze maand heeft 31 dagen')
    break;
}



process.exit();