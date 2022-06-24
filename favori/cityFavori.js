//*GERE LES NOUVEAU FAVORIES

let addCityToFav = document.querySelector('#villeFavoriButton');//boutton add favori

let cityFav = [];

addCityToFav.addEventListener("click", () => {

    let LSelement = localStorage.getItem("villeFav");//*recuperation local storage

    if (LSelement == null) {//*si pas de favori, ajoute la ville actuel
        localStorage.setItem("villeFav", informationCity);
    }
    else {//*sinon ajoute la nouvelle si pas existante
        LSelement = LSelement.split(',');//*local storage devient un tableau

        let compteurTabl = 0;//*var compteur pos dans tableau
        benchTableLoop:
        for (compteurTabl = 0; compteurTabl < LSelement.length; compteurTabl = compteurTabl + 3) {
            if (LSelement[compteurTabl] == informationCity[0]) {//*ville identique
                break benchTableLoop;//*break boucle for
            }
        }
        if (LSelement[compteurTabl] != informationCity[0]) {//*pas de ville identique
            informationCity.push(LSelement)//le tableau recupere les donnée de la ville actuel
            localStorage.removeItem('villeFav');//suppression de l'actuel local storage
            localStorage.setItem("villeFav", informationCity);//ajout du ou des anciens favoris + ajout du nouveau favori
        }
    }
})