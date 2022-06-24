//*GERE L'HISTORIQUE

function histo() {
    console.log(informationCity)

    let LSelementHist = localStorage.getItem("villeHist");//*recuperation local storage

    if (LSelementHist == null) {//*si pas d'historique ajoute la 1ere recherche
        localStorage.setItem("villeHist", informationCity);
    }
    else {//*sinon ajoute la nouvelle si pas existante
        LSelementHist = LSelementHist.split(',');//*local storage devient un tableau

        let compteurTabl = 0;//*var compteur pos dans tableau
        benchTableLoop:
        for (compteurTabl = 0; compteurTabl < LSelementHist.length; compteurTabl = compteurTabl + 3) {
            if (LSelementHist[compteurTabl] == informationCity[0]) {//*ville identique
                break benchTableLoop;//*break boucle for
            }
        }
        if (LSelementHist[compteurTabl] != informationCity[0]) {//*pas de ville identique
            informationCity.push(LSelementHist)//le tableau recupere les donnée de la ville actuel
            localStorage.removeItem('villeHist');//suppression de l'actuel local storage
            localStorage.setItem("villeHist", informationCity);//ajout du ou des anciens favoris + ajout du nouveau favori
        }
    }
}