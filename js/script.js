//VARIABILI
let km = 0;
let today = new Date();
let birthday = new Date();
let birthYear = 0;
let targetUnder = birthday;
let targetOver = birthday;
let coeff = 0;


//CODICE
km = prompt("Quanti Km devi percorrere?");
document.getElementById("km").innerHTML = km;

//Inserimento data di nascita
birthday.setDate(prompt("Inserisci giorno di nascita"));
document.getElementById("birthday-day").innerHTML = birthday.getDate();
birthday.setMonth(prompt("Inserisci mese di nascita") - 1);
document.getElementById("birthday-month").innerHTML = (birthday.getMonth()) + 1;
birthday.setFullYear(prompt("Inserisci anno di nascita"));
document.getElementById("birthday-year").innerHTML = birthday.getFullYear();
console.log("Birthday = " + birthday);

//Stampo data di oggi nel footer
document.getElementById("today-day").innerHTML = today.getDate();
document.getElementById("today-month").innerHTML = (today.getMonth()) + 1;
document.getElementById("today-year").innerHTML = today.getFullYear();
console.log("Today = " + today);

//Verifica maggiore età
birthYear = birthday.getFullYear();
console.log("BirthYEAR = " + birthYear);
targetUnder.setFullYear(birthYear + 18);
console.log("TargetUnder = " + targetUnder);
console.log("Birthday = " + birthday);
console.log("BirthYEAR = " + birthYear);
targetOver.setFullYear(birthYear + 65);
console.log("TargetOver = " + targetOver);
console.log("Birthday = " + birthday);
console.log("BirthYEAR = " + birthYear);
console.log("Today = " + today);

//NON FUNZIONA L'IF SE INSERISCO UN'ETA TRA I 18 E I 65
// if (today < targetUnder) {
//     document.getElementById("magg-eta").innerHTML = "Non hai ancora 18 anni, per questo hai diritto al 20% di sconto";
//     console.log("Under18");
//     coeff = 0.20;
// } else if (targetOver <= today) {
//     document.getElementById("magg-eta").innerHTML = "Hai più di 65 anni, per questo hai diritto al 40% di sconto";
//     console.log("Under65");
//     coeff = 0.40;
// } else {
//     document.getElementById("magg-eta").innerHTML = "In base alla tua età non hai diritto a nessuno sconto";
// }

if (today > targetUnder && today < targetOver) {
    console.log("TargetUnder = " + targetUnder);
    console.log("TargetOver = " + targetOver);
    document.getElementById("magg-eta").innerHTML = "In base alla tua età non hai diritto a nessuno sconto";
} else if (targetOver <= today) {
    console.log("TargetUnder = " + targetUnder);
    console.log("TargetOver = " + targetOver);
    document.getElementById("magg-eta").innerHTML = "Hai più di 65 anni, per questo hai diritto al 40% di sconto";
    console.log("Under65");
    coeff = 0.40;
} else {
    console.log("TargetUnder = " + targetUnder);
    console.log("TargetOver = " + targetOver);
    document.getElementById("magg-eta").innerHTML = "Non hai ancora 18 anni, per questo hai diritto al 20% di sconto";
    console.log("Under18");
    coeff = 0.20;
}