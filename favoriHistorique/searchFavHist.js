//*FAVORI RECHERCHE
let etiquetteFavorie = document.querySelectorAll('#favoriteCityListing .contenu p')
for (let i = 0; i < etiquetteFavorie.length; i++) {
    etiquetteFavorie[i].addEventListener("click", () => {

        //*récupération session storage
        let userFav = localStorage.getItem("villeFav");
        userFav = userFav.split(',');

        let compteurTabl = 0;
        benchTableLoop:
        for (compteurTabl = 0; compteurTabl < userFav.length; compteurTabl = compteurTabl + 3) {
            if (userFav[compteurTabl] == etiquetteFavorie[i].textContent) {//*ville identique
                break benchTableLoop;//*break boucle for
            }
        }
        if (userFav[compteurTabl] == etiquetteFavorie[i].textContent) {//*ville identifié
            sessionStorage.setItem('latitudeUser', userFav[compteurTabl+1]);
            sessionStorage.setItem('longitudeUser', userFav[compteurTabl+2]);

            location = "resultat/resultat.html";//affichage page résultat
        }

    })
}


//*HISTORIQUE RECHERCHE
let etiquetteHistorique = document.querySelectorAll('#historicListing .contenu p')
for (let i = 0; i < etiquetteHistorique.length; i++) {
    etiquetteHistorique[i].addEventListener("click", () => {

        //*récupération session storage
        let userHist = localStorage.getItem("villeHist");
        userHist = userHist.split(',');

        let compteurTabl = 0;
        benchTableLoop:
        for (compteurTabl = 0; compteurTabl < userHist.length; compteurTabl = compteurTabl + 3) {
            if (userHist[compteurTabl] == etiquetteHistorique[i].textContent) {//*ville identique
                break benchTableLoop;//*break boucle for
            }
        }
        if (userHist[compteurTabl] == etiquetteHistorique[i].textContent) {//*ville identifié
            sessionStorage.setItem('latitudeUser', userHist[compteurTabl+1]);
            sessionStorage.setItem('longitudeUser', userHist[compteurTabl+2]);

            location = "resultat/resultat.html";//affichage page résultat
        }

    })
}