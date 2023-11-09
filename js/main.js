
// INIZIO ESERCIZIO //
let name = prompt("Inserisci il tuo nome");
let surname = prompt("Inserisci il tuo cognome");
let favoriteColor = prompt("Inserisci il tuo colore preferito");
let password1 = name + surname + favoriteColor + 21;

// PRIMO BONUS // 
let number = prompt("Inserisci un numero");
let number2 = prompt("Inserisci un secondo numero");
number = parseInt(number);
number2 = parseInt(number2);
let password2 = name + surname + favoriteColor + number/number2;

// SECONDO BONUS //
let password3 = password1 + Math.floor(Math.random() * 101);

let credential = `

Nome: ${name}
Cognome: ${surname}
Colore: ${favoriteColor}

La tua prima password: ${password1}
La tua senconda passoword: ${password2}
La tua terza password: ${password3}

`;

console.log(credential);

document.getElementById("name").innerHTML = name;

document.getElementById("surname").innerHTML = surname;

document.getElementById("favoriteColor").innerHTML = favoriteColor;

document.getElementById("password1").innerHTML = password1;

document.getElementById("password2").innerHTML = password2;

document.getElementById("password3").innerHTML = password3;