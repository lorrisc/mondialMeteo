//*Gestion apparition formulaire lors du click sur le bouton "Coordonnées géographiques".

let buttonCoordGeo = document.querySelector('#coordonneGeoButton');//bouton
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
    let latitudeInput = document.querySelector('#latitudeUser');
    let longitudeInput = document.querySelector('#longitudeUser');

    //variable données lat, long
    let latitudeUser = null;
    let longitudeUser = null;

    //stockage value variable adéquat
    latitudeUser = latitudeInput.value;
    longitudeUser = longitudeInput.value;

    console.log(latitudeUser)
    console.log(longitudeUser)

    //vérification valeurs latitude et longitude correct
    if ((latitudeUser != '') && (longitudeUser != '') && (latitudeUser >= -90 && latitudeUser <= 90)&& (longitudeUser >= -180 && longitudeUser <= 180)) {
        sessionStorage.setItem('latitudeUser', latitudeUser);
        sessionStorage.setItem('longitudeUser', longitudeUser);

        location = "resultat/resultat.html";//affichage page résultat
    }
    else {
        console.log("Coordonnées géographiques incorrects");

        let textErreur = document.querySelector('#geolocationError');//message d'erreur
        textErreur.style.display = "block"
    }

})

