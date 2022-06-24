let searchBar = document.querySelector("#searchBar")

searchBar.addEventListener("keyup", (e) => {
    let searchLetters = e.target.value

    var requestOptions = {
        method: 'GET',
    };

    fetch("https://api.geoapify.com/v1/geocode/search?text=" + searchLetters + "+&limit=5&format=json&apiKey=ee84ddcca7f946beba0cafae046d7ab3", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);

            let searchResult = document.querySelector("#resultatSearch")

            let tablResultat = []

            let child = searchResult.lastElementChild
            while (child) {
                searchResult.removeChild(child)
                child = searchResult.lastElementChild
            }

            for (i = 0; i < result.results.length; i++) {
                let nouveauResultat = tablResultat.push([result.results[i].city, result.results[i].postcode, result.results[i].county, result.results[i].lat, result.results[i].lon])
                console.log(tablResultat)

                searchResult.style.display = "flex";

                let cityContenairResult = document.createElement('div');
                cityContenairResult.className = "resultatSearch"
                cityContenairResult.id = i
                searchResult.appendChild(cityContenairResult);

                let cityResult = document.createElement('p');
                cityResult.textContent = result.results[i].city + "(" + result.results[i].postcode + ", " + result.results[i].county + ")";
                cityContenairResult.appendChild(cityResult);
            }

            let cityContenairResult = document.querySelectorAll(".resultatSearch")
            for (let i = 0; i < cityContenairResult.length; i++) {
                cityContenairResult[i].addEventListener("click", () => {
                    let latitude = tablResultat[i][3]
                    let longitude = tablResultat[i][4]

                    sessionStorage.setItem('latitudeUser', latitude);
                    sessionStorage.setItem('longitudeUser', longitude);

                    location = "resultat/resultat.html";//affichage page résultat
                })
            }

        })

        .catch(error => console.log('error', error));
})



