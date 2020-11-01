// JavaScript Document

/* drukken met de vinger op signUp */
var signUp = document.querySelector("footer span");

/* met elke klik voegt classList.toggle() de class 'toonForm' toe aan het <form> element als deze niet bestaat in de classList-array (true) */
/* als de class wel bestaat, zal de methode de class verwijderen en false terugkeren */
function doeFormVerschijnen() {
    let hetFormulier = document.querySelector("form");
    hetFormulier.classList.toggle("toonForm");
}

/* de span laten luisteren naar een klik */
/* na een klik op de span de functie 'doeFormVerschijnen' uitvoeren */
signUp.addEventListener("click", doeFormVerschijnen);
