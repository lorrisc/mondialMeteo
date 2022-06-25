//*GÉRE L'APPARITION DU FORMULAIRE COORDONNÉE GEO UTILISATEUR ET STOCKE LA VALEUR DES INPUTS POUR API (CHANGEMENT DE PAGE)

//*Apparition formulaire coord géo

let buttonCoordGeo = document.querySelector('#coordonneGeoButton');//bouton coordonnée géographique
let buttonCoordGeoStatus = 0;//status du formulaire (visible, non visible)

buttonCoordGeo.addEventListener("click", () => {
    if (buttonCoordGeoStatus == 0) {//formulaire fermé
        let formulaireCoorGeo = document.querySelector('#formulaireCoordonneGeo');
        formulaireCoorGeo.style.display = "flex";//visible

        buttonCoordGeoStatus = 1
    }
    else if (buttonCoordGeoStatus == 1) {//formulaire ouvert
        let formulaireCoorGeo = document.querySelector('#formulaireCoordonneGeo');
        formulaireCoorGeo.style.display = "none";//non visible

        //reset input value
        let input = document.querySelectorAll('#formulaireCoordonneGeo input')
        for (i = 0; i < input.length; i++) {
            input[i].value = '';
        }

        buttonCoordGeoStatus = 0;
    }
})

//*Récupération lattitude et longitude

let buttonValider = document.querySelector('#validationForm');//bouton validation formulaire

buttonValider.addEventListener("click", () => {
    let textErreur = document.querySelector('#geolocationError');//message d'erreur invisible
    textErreur.style.display = "none"
    let textErreurCoorGeo = document.querySelector('#coordGeoError');//message d'erreur invisible
    textErreurCoorGeo.style.display = "none"

    //input formulaire
    let latitudeUser = document.querySelector('#latitudeUser').value;
    let longitudeUser = document.querySelector('#longitudeUser').value;

    //vérification valeurs latitude et longitude correct
    if ((latitudeUser != '') && (longitudeUser != '') && (latitudeUser >= -90 && latitudeUser <= 90) && (longitudeUser >= -180 && longitudeUser <= 180)) {
        sessionStorage.setItem('latitudeUser', latitudeUser);
        sessionStorage.setItem('longitudeUser', longitudeUser);
        console.log("tets")
        location = "resultat/resultat.html";//affichage page résultat
    }
    else {
        console.log("Coordonnées géographiques incorrects");

        let textErreur = document.querySelector('#geolocationError');//message d'erreur
        textErreur.style.display = "block"
    }
})

