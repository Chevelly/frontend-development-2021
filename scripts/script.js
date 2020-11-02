// JavaScript Document


// ARTICLE SLIDER
var articleSlides = document.getElementsByClassName("articleSlides");
var cirkels = document.getElementsByClassName("cirkel");
var counter = 0;

/* Functie om alle articles te verbergen */
function verbergArticles() {
    for (var i = 0; i < articleSlides.length; i++) {
        articleSlides[i].classList.remove("visible");
    }
}

/* Functie om alle rondjes te verwijderen */
function verwijderRondje() {
    for (var i = 0; i < articleSlides.length; i++) {
        cirkels[i].classList.remove("rondje");
    }
}

/* Functie voor de enkele article loop en cirkels */
function articleLoop() {
    var huidigArticle = articleSlides[counter];
    var huidigRondje = cirkels[counter];
    huidigArticle.classList.add("visible");
    verwijderRondje();
    huidigRondje.classList.add("rondje");
    counter++;
}

/* Functie het sliden van de article */
function articleSlider() {
    if (counter < articleSlides.length) {
        articleLoop();
    } else {
        counter = 0;
        verbergArticles();
        articleLoop();
    }
}

/* Toont eerste article, stelt tijd in en roept de volgende article op */
setTimeout(articleSlider, 350);
var articleSlideshowInterval = setInterval(articleSlider, 3500);


// NEWSLETTER FORMULIER
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
