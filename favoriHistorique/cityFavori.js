//*GERE LES NOUVEAU FAVORIES

let addCityToFav = document.querySelector('#villeFavoriButton');//boutton add favori

addCityToFav.addEventListener("click", () => {
    console.log("infocityForfav")
    console.log(informationCityForFav)
    console.log(informationCity)
    let LSelement = localStorage.getItem("villeFav");//*recuperation local storage

    if (LSelement == null) {//*si pas de favori, ajoute la ville actuel
        console.log("Local storage null")
        localStorage.setItem("villeFav", informationCityForFav);
    }
    else {//*sinon ajoute la nouvelle si pas existante
        console.log("Local storage non null")

        LSelement = LSelement.split(',');//*local storage devient un tableau

        let compteurTabl = 0;//*var compteur pos dans tableau
        benchTableLoop:
        for (compteurTabl = 0; compteurTabl < LSelement.length; compteurTabl = compteurTabl + 3) {
            if (LSelement[compteurTabl] == informationCityForFav[0]) {//*ville identique
                break benchTableLoop;//*break boucle for
            }
        }
        if (LSelement[compteurTabl] != informationCityForFav[0]) {//*pas de ville identique
            console.log("infocityForfav")
            console.log(informationCityForFav)
            console.log("pas de ville identique")
            informationCityForFav.push(LSelement)//le tableau recupere les donnée de la ville actuel*
            console.log("LocalStorage Element")
            console.log(LSelement)
            console.log("infocityForfav")
            console.log(informationCityForFav)
            localStorage.removeItem('villeFav');//suppression de l'actuel local storage
            localStorage.setItem("villeFav", informationCityForFav);//ajout du ou des anciens favoris + ajout du nouveau favori
        }
    }
})