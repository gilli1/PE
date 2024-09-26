import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let toekomstJaar = 2100;
let geboortjeJaar = parseFloat(await userInput.question('Geef je geboortjejaar '))
let bewerking = toekomstJaar - geboortjeJaar




console.log("Je zal in 2100: " + bewerking +  " zijn, oftewel " + "" + (bewerking+1))






process.exit();




/**M2: Leeftijdberekenaar
Schrijf een script waar je twee variabelen gebruikt, geboorteJaar en toekomstJaar. Laat je script uitprinten hoe oud je zal zijn in toekomstJaar.

Hou er rekening mee dat je twee verschillende leeftijden zou kunnen zijn in toekomstJaar, dus zorg ervoor dat je output iets is in de vorm van: In 2031 zal ik 24 of 25 jaar oud zijn. */
