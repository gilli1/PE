import * as readline from 'node:readline/promises';
import{exit, stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


console.log("Welkom bij de quiz, beantwoord de vragen.")

let antwoord = await userInput.question("Beantwoord de eerste vraag. Wat is de hoofdstad van Frankrijk?  ")
 let teller = 0;
if(antwoord == "Parijs"){
    console.log("Je antwoorde: " + antwoord)
    console.log("Dit is juist!")
    teller++
}

else {
    console.log("Je antwoorde: " + antwoord)
    console.log("Dit is fout. ")
}

let antwoord2 = parseFloat(await userInput.question("Hoeveel planeten zijn er in ons zonnestelsel? "))
if(antwoord2 == 9){
    console.log("Je antwoorde: " + antwoord2)
    console.log("Dit is juist!")
    teller++
}
else {
    console.log("Je antwoorde: " + antwoord2)
    console.log("Dit is fout.")
}

let antwoord3 = await userInput.question("Wat is het grootste zoogdier ter wereld? ")
if(antwoord3 == "Blauwe vinvis"){
    console.log("Je antwoorde: " + antwoord3)
    console.log("Dit is juist!")
    teller++
}
else {
    console.log("Je antwoorde: " + antwoord3)
    console.log("Dit is fout.")
}

let antwoord4 = await userInput.question("Wie schreef het toneelstuk 'Romeo en Julia'? ")
if(antwoord4 == "Shakespeare"){
    console.log("Je antwoorde: " + antwoord4)
    console.log("Dit is juist!")
    teller++
}
else {
    console.log("Je antwoorde: " + antwoord4)
    console.log("Dit is fout.")
}

let antwoord5 = parseFloat(await userInput.question("Hoeveel poten heeft een spin? "))
if(antwoord5 == 8){
    console.log("Je antwoorde: " + antwoord5)
    console.log("Dit is juist!")
    teller++
}
else {
    console.log("Je antwoorde: " + antwoord5)
    console.log("Dit is fout.")
}

console.log("U heeft:  " + teller + " van de 5 vragen juist.")

process.exit();