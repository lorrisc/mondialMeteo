//*GERE LES NOUVEAU FAVORIES

let addCityToFav = document.querySelector('#villeFavoriButton');//boutton add favori

addCityToFav.addEventListener("click", () => {

    let LSelement = localStorage.getItem("villeFav");//*recuperation local storage

    if (LSelement == null) {//*si pas de favori, ajoute la ville actuel
        //*design bouton favori
        let iconFavori = document.querySelector('#villeFavoriButton')
        let iconFavoriImg = document.querySelector('#villeFavoriButton img')
        iconFavoriImg.src = '../assets/starFull.png';
        iconFavori.style.color = "#ffcf00"

        localStorage.setItem("villeFav", informationCityForFav);
    }
    else {//*sinon ajoute la nouvelle si pas existante

        LSelement = LSelement.split(',');//*local storage devient un tableau

        let compteurTabl = 0;//*var compteur pos dans tableau
        benchTableLoop:
        for (compteurTabl = 0; compteurTabl < LSelement.length; compteurTabl = compteurTabl + 3) {
            if (LSelement[compteurTabl] == informationCityForFav[0]) {//*ville identique
                break benchTableLoop;//*break boucle for
            }
        }
        if (LSelement[compteurTabl] != informationCityForFav[0]) {//*pas de ville identique
            //*design bouton favori
            let iconFavori = document.querySelector('#villeFavoriButton')
            let iconFavoriImg = document.querySelector('#villeFavoriButton img')
            iconFavoriImg.src = '../assets/starFull.png';
            iconFavori.style.color = "#ffcf00"

            informationCityForFav.push(LSelement)//le tableau recupere les donnée de la ville actuel*

            localStorage.removeItem('villeFav');//suppression de l'actuel local storage
            localStorage.setItem("villeFav", informationCityForFav);//ajout du ou des anciens favoris + ajout du nouveau favori
        }
        if (LSelement[compteurTabl] == informationCityForFav[0]) {
            //*design bouton favori
            let iconFavori = document.querySelector('#villeFavoriButton')
            let iconFavoriImg = document.querySelector('#villeFavoriButton img')
            iconFavoriImg.src = '../assets/starBorderEpais.png';
            iconFavori.style.color = "white"

            LSelement.splice(compteurTabl, 3);

            localStorage.removeItem('villeFav');//suppression de l'actuel local storage
            localStorage.setItem("villeFav", LSelement);//ajout du ou des anciens favoris + ajout du nouveau favori
        }
    }
})

function villeDejaFavoriTest() {

    //*VILLE DEJA EN FAVORI
    let LSelementVerif = localStorage.getItem("villeFav");//*recuperation local storage
    LSelementVerif = LSelementVerif.split(',');//*local storage devient un tableau

    cityIdentiqueIconColor:
    for (let i = 0; i < LSelementVerif.length; i++) {
        if (LSelementVerif[i] == informationCityForFav[0]) {//*ville identique
            let iconFavori = document.querySelector('#villeFavoriButton')
            let iconFavoriImg = document.querySelector('#villeFavoriButton img')
            iconFavoriImg.src = '../assets/starFull.png';
            iconFavori.style.color = "#ffcf00"
            break cityIdentiqueIconColor;
        }
    }

}