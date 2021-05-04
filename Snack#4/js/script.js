// Generatore di “nomi cognomi” casuali: scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.

var nomi = ["Luca", "Marco", "Luigi", "Sergio", "Loris"];
var cognomi = ["Sbarbaro", "Piatti", "Pederzani", "Pianarosa", "Bianchi"];

for (var i = 0; i < 10; i++) {
    invitato = generaCoppia(nomi, cognomi);
    console.log(invitato);
    document.getElementById("lista").innerHTML += "<li>" + invitato + "</li>"
}

function generaCoppia(nome, cognome) {
    var persona;
    persona = nome[randomNumber(0, 4)] + " " + cognome[randomNumber(0, 4)];
    return persona;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}