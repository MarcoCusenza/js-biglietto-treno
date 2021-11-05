// +++ VARIABILI +++
const km = prompt("Quanti Km devi percorrere?");
const today = new Date();
let birthday = new Date();
let targetUnder = new Date(birthday);
let targetOver = new Date(birthday);
let coeff = 0;
let tot = 0;
let price = 0;
// +++ /VARIABILI +++



// +++ CODICE +++
//MAIN
document.getElementById("km").innerHTML = km;

//Inserimento data di nascita
birthday.setDate(prompt("Inserisci giorno di nascita"));
document.getElementById("birthday-day").innerHTML = birthday.getDate();
birthday.setMonth(prompt("Inserisci mese di nascita") - 1);
document.getElementById("birthday-month").innerHTML = (birthday.getMonth()) + 1;
birthday.setFullYear(prompt("Inserisci anno di nascita"));
document.getElementById("birthday-year").innerHTML = birthday.getFullYear();
console.log("Birthday = " + birthday);


//Verifica maggiore età
targetUnder.setFullYear(birthday.getFullYear() + 18);
console.log("TargetUnder = " + targetUnder);
targetOver.setFullYear(birthday.getFullYear() + 65);
console.log("TargetOver = " + targetOver);
if (targetUnder > today) {
    document.getElementById("magg-eta").innerHTML = "Non hai ancora 18 anni, per questo hai diritto al 20% di sconto!";
    console.log("Under18");
    coeff = 0.20;
} else if (targetOver <= today) {
    document.getElementById("magg-eta").innerHTML = "Hai più di 65 anni, per questo hai diritto al 40% di sconto!";
    console.log("Under65");
    coeff = 0.40;
} else {
    document.getElementById("magg-eta").innerHTML = "In base alla tua età non hai diritto a nessuno sconto";
}


//Calcolo del prezzo
tot = km * 0.21;
if (coeff != 0) {
    document.getElementById("tot").innerHTML = "Il prezzo del biglietto al netto dello sconto è: " + tot.toFixed(2) + "€";
    document.getElementById("sconto").innerHTML = "L'importo dello sconto è: " + (tot * coeff).toFixed(2) + "€";
}
price = tot - (tot * coeff);
document.getElementById("prezzo").innerHTML = "Il prezzo del tuo biglietto è: " + price.toFixed(2) + "€";


//FOOTER
document.getElementById("today-day").innerHTML = today.getDate();
document.getElementById("today-month").innerHTML = (today.getMonth()) + 1;
document.getElementById("today-year").innerHTML = today.getFullYear();

// +++ /CODICE +++