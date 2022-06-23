//*GÉOLOCALISATION DE L'UTILISATEUR

let buttonGeolocalisation = document.querySelector('#geolocalisationButton');//bouton geolocalisation

//variable données lat, long
let latitudeUser = null;
let longitudeUser = null;

buttonGeolocalisation.addEventListener("click", () => {
    //reset message d'erreur
    let textErreur = document.querySelector('#geolocationError');
    textErreur.style.display = "none"
    let textErreurCoorGeo = document.querySelector('#coordGeoError');
    textErreurCoorGeo.style.display = "none"

    //si formulaire coordonnée précise visible alors invisible
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
    
    navigator.geolocation.getCurrentPosition(sucess, error);//demande géolocalisation

})