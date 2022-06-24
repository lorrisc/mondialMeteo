//*GESTION DES VILLES FAVORITES

let addCityToFav = document.querySelector('#villeFavoriButton');//boutton add favori

let cityFav = [];

addCityToFav.addEventListener("click", () => {

    cityFav.push(informationCity);//*tavleau ville actuel user

    let LSelement = localStorage.getItem("villeFav");//*recuperation local storage

    if (LSelement == null) {//*si pas de favori, ajoute la ville actuel
        localStorage.setItem("villeFav", cityFav);
    }
    else {//*sinon ajoute la nouvelle
        LSelement = LSelement.split(',');//local storage devient un tableau
        cityFav.push(LSelement)//le tableau recupere les donnée de la ville actuel

        localStorage.removeItem('villeFav');//suppression de l'actuel local storage
        localStorage.setItem("villeFav", cityFav);//ajout du ou des anciens favoris + ajout du nouveau favori
    }
})