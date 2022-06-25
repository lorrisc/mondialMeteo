//*GERE L'HISTORIQUE

function histo() {

    let LSelementHist = localStorage.getItem("villeHist");//*recuperation local storage

    if (LSelementHist == null) {//*si pas d'historique ajoute la 1ere recherche
        localStorage.setItem("villeHist", informationCityForHist);
    }
    else {//*sinon ajoute la nouvelle si pas existante
        LSelementHist = LSelementHist.split(',');//*local storage devient un tableau

        let compteurTabl = 0;//*var compteur pos dans tableau
        benchTableLoop:
        for (compteurTabl = 0; compteurTabl < LSelementHist.length; compteurTabl = compteurTabl + 3) {
            if (LSelementHist[compteurTabl] == informationCityForHist[0]) {//*ville identique
                break benchTableLoop;//*break boucle for
            }
        }
        if (LSelementHist[compteurTabl] != informationCityForHist[0]) {//*pas de ville identique

            console.log(informationCityForHist)
            let LSelementHist2 = LSelementHist
            informationCityForHist.push(LSelementHist2)//le tableau recupere les donnée de la ville actuel

            localStorage.removeItem('villeHist');//suppression de l'actuel local storage
            localStorage.setItem("villeHist", informationCityForHist);//ajout du ou des anciens favoris + ajout du nouveau favori
        }
        // if (LSelementHist[compteurTabl] == informationCity[0]) {//*pas de ville identique
        //     LSelementHist.splice(compteurTabl, 3)//supprime les valeurs identiques pour les remettres en premiere pos
        //     informationCity.push(LSelementHist)//le tableau recupere les donnée de la ville actuel
        //     localStorage.removeItem('villeHist');//suppression de l'actuel local storage
        //     localStorage.setItem("villeHist", informationCity);//ajout du ou des anciens favoris + ajout du nouveau favori
        // }
        console.log("historique")
        console.log(informationCityForFav)
        console.log(informationCity)
    }
}