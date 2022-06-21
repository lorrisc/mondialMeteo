//*Géolocalisation de l'utilisateur


let buttonGeolocalisation = document.querySelector('#geolocalisationButton');//bouton

//variable données lat, long
let latitudeUser = null;
let longitudeUser = null;

buttonGeolocalisation.addEventListener("click", () => {
    let textErreur = document.querySelector('#geolocationError');//message d'erreur
    textErreur.style.display = "none"
    let textErreurCoorGeo = document.querySelector('#coordGeoError');//message d'erreur
    textErreurCoorGeo.style.display = "none"

    //si formulaire coordonnée précise visiblez alors invisible
    let formulaireCoorGeo = document.querySelector('#formulaireCoordonneGeo');
    formulaireCoorGeo.style.display = "none";

    const sucess = (position) => {
        //récupération position
        latitudeUser = position.coords.latitude;
        longitudeUser = position.coords.longitude;

        //stockage position
        sessionStorage.setItem('latitudeUser', latitudeUser);
        sessionStorage.setItem('longitudeUser', longitudeUser);

        location = "resultat/resultat.html";//affichage page résultat
    }

    const error = () => {
        console.log("Erreur de localisation");

        let textErreur = document.querySelector('#geolocationError');//message d'erreur
        textErreur.style.display = "block"
    }

    navigator.geolocation.getCurrentPosition(sucess, error);

})