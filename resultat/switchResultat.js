//*

let instantResultat = document.querySelector('#contenuInfoPrincipal');//resultat instantannée
let instantResultatSoleil = document.querySelector('#contenuSoleil');//resultat instantannée soleil
let instantResultatLune = document.querySelector('#contenuLune');//resultat instantannée lune

let jourResultat = document.querySelector('#contenuInfoJours');//resultat jour

let heureResultat = document.querySelector('#contenuInfoHeures');//resultat heure

//*Bouton mode de résulta
let buttonInstantMode = document.querySelector('#buttonInstant');
let buttonHeuretMode = document.querySelector('#buttonHeures');
let buttonJourMode = document.querySelector('#buttonJours');


buttonInstantMode.addEventListener("click", ()=>{
    instantResultat.style.display="flex"
    instantResultatSoleil.style.display="flex"
    instantResultatLune.style.display="flex"
    
    jourResultat.style.display="none"

    heureResultat.style.display="none"

    buttonInstantMode.classList.add("isOpen");
    buttonHeuretMode.classList.remove("isOpen");
    buttonJourMode.classList.remove("isOpen");

})
buttonHeuretMode.addEventListener("click", ()=>{
    instantResultat.style.display="none"
    instantResultatSoleil.style.display="none"
    instantResultatLune.style.display="none"
    
    jourResultat.style.display="none"

    heureResultat.style.display="flex"

    buttonInstantMode.classList.remove("isOpen");
    buttonHeuretMode.classList.add("isOpen");
    buttonJourMode.classList.remove("isOpen");
})
buttonJourMode.addEventListener("click", ()=>{
    instantResultat.style.display="none"
    instantResultatSoleil.style.display="none"
    instantResultatLune.style.display="none"
    
    jourResultat.style.display="flex"

    heureResultat.style.display="none"

    buttonInstantMode.classList.remove("isOpen");
    buttonHeuretMode.classList.remove("isOpen");
    buttonJourMode.classList.add("isOpen");
})