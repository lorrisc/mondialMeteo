//*SEARCH BAR

let searchBar = document.querySelector("#searchBar")

//*saisie clavier event
searchBar.addEventListener("keyup", (e) => {
    let searchLetters = e.target.value;//*information saisie


    var requestOptions = {
        method: 'GET',
    };

    fetch("https://api.geoapify.com/v1/geocode/search?text=" + searchLetters + "+&limit=10&&type=city&format=json&apiKey=ee84ddcca7f946beba0cafae046d7ab3", requestOptions)
        .then(response => response.json())
        .then(result => {
            // console.log(result);

            let searchResult = document.querySelector("#resultatSearch");//conteneur résultats search bar

            let tablResultat = []//initialisation tableau stockage résultat

            //*delete all element in resutat
            let child = searchResult.lastElementChild
            while (child) {
                searchResult.removeChild(child)
                child = searchResult.lastElementChild
            }

            //*Pour la longueur de retour de l'API
            for (i = 0; i < result.results.length; i++) {
                let nouveauResultat = tablResultat.push([result.results[i].city, result.results[i].postcode, result.results[i].county, result.results[i].lat, result.results[i].lon])

                searchResult.style.display = "flex";//Resultat visible

                //*création élément 1 résultat
                let cityContenairResult = document.createElement('div');
                cityContenairResult.className = "resultatSearch"
                cityContenairResult.id = i//id i (idem que son index dans le tableau)
                searchResult.appendChild(cityContenairResult);

                //*text
                let cityResult = document.createElement('p');
                cityResult.textContent = result.results[i].city + "(" + result.results[i].postcode + ", " + result.results[i].county + ")";
                cityContenairResult.appendChild(cityResult);
            }

            //*Ville sélectionné
            let cityContenairResult = document.querySelectorAll(".resultatSearch")
            for (let i = 0; i < cityContenairResult.length; i++) {//pour le nombre d'élément
                cityContenairResult[i].addEventListener("click", () => {//un élément cliqué
                    //*récupération latitude et longitude (tableau)
                    let latitude = tablResultat[i][3]
                    let longitude = tablResultat[i][4]

                    //*sauvegarde infos
                    sessionStorage.setItem('latitudeUser', latitude);
                    sessionStorage.setItem('longitudeUser', longitude);

                    //sur quelle page est l'utilisateur?
                    if (window.location.href.includes('resultat.html')){
                        location.reload();
                    }
                    else{
                        location = "resultat/resultat.html";//*affichage page résultat
                    }
                })
            }

            //*Cancel popup résultat
            document.body.addEventListener("click",()=>{
                searchResult.style.display="none"
            })


        })

        .catch(error => console.log('error', error));
})



