//*CRÉER LES ETIQUETTES
let userFav = localStorage.getItem("villeFav");//*recuperation local storage

if (userFav == null) {
    console.log("Pas de ville favorites enregistrés")
}
else {//*création des étiquettes fav
    userFav = userFav.split(',');//local storage devient un tableau

    for (let i = 0; i < userFav.length; i = i + 3) {

        let container = document.querySelector('#favoriteCityListing .contenu')

        let favCity = document.createElement('p');
        favCity.textContent=userFav[i]
        container.appendChild(favCity);
    }
}