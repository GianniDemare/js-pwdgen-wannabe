
// INIZIO ESERCIZIO //
let name = prompt("Inserisci il tuo nome");
let surname = prompt("Inserisci il tuo cognome");
let color = prompt("Inserisci il tuo colore preferito");
let password = name + surname + color + 21;

// PRIMO BONUS // 
let number = prompt("Inserisci un numero");
let number2 = prompt("Inserisci un secondo numero");
number = parseInt(number);
number2 = parseInt(number2);
let password2 = name + surname + color + number/number2;

let credential = `

Nome: ${name}
Cognome: ${surname}
Colore: ${color}

La tua prima password: ${password}
La tua senconda passoword: ${password2}

`;

console.log(credential);