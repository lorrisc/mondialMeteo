//*Gestion apparition formulaire lors du click sur le bouton "Coordonnées géographiques".

let buttonCoordGeo = document.querySelector('#coordonneGeoButton');//bouton
let buttonCoordGeoStatus = 0;//variable formualaire ouvert ou fermé

buttonCoordGeo.addEventListener("click", () => {//bouton cliqué
    if (buttonCoordGeoStatus == 0) {//formulaire fermé
        let formulaireCoorGeo = document.querySelector('#formulaireCoordonneGeo');
        formulaireCoorGeo.style.display = "flex";//visible

        buttonCoordGeoStatus = 1
    }
    else if (buttonCoordGeoStatus == 1) {//formulaire ouvert
        let formulaireCoorGeo = document.querySelector('#formulaireCoordonneGeo');
        formulaireCoorGeo.style.display = "none";//non visible

        //reset input value
        let input = document.querySelectorAll('#formulaireCoordonneGeo input')
        for (i = 0; i < input.length; i++) {
            input[i].value = '';
        }

        buttonCoordGeoStatus = 0;
    }
})