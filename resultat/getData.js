//*Récupération lattitude et longitude
let latitude = sessionStorage.getItem('latitudeUser');
let longitude = sessionStorage.getItem('longitudeUser');


//*GET CITY OF USER
fetch('https://api.openweathermap.org/geo/1.0/reverse?lat=' + latitude + '&lon=' + longitude + '&appid=950199b1cb418f0420cc6eea75b5117d')
    .then(res => {
        if (res.ok) {
            res.json().then(data => {
                let villeRecherche = document.querySelectorAll('.ville');
                let regionRecherche = document.querySelector('#regions');
                if (data.length == 0) {//API renvoit rien (position dans l'eau)
                    for (i = 0; i < villeRecherche.length; i++) {
                        villeRecherche[i].textContent = ": lat" + latitude + ", longitude" + longitude;//affiche les coordonnées
                    }
                }
                else {
                    let villeUser = data[0].name
                    for (i = 0; i < villeRecherche.length; i++) {//Boucle pour inscrire ville pour chaque text
                        villeRecherche[i].textContent = villeUser;
                    }

                    //Région de l'utilisateur
                    let regionUser = data[0].state;
                    regionRecherche.textContent = regionUser;
                }
            })
        } else {
            console.log("Coordonnées incorrecte");
        }
    })

function timeToHumanTime(time) {//function for transform unixTime for sunrise, sunset, moonset, moonrise
    let unixTimestampLever = time;
    let millisecondsLever = unixTimestampLever * 1000;
    let dateObjectLever = new Date(millisecondsLever);

    let timeTransform = [dateObjectLever.toLocaleString("FR", { hour: "numeric" }), dateObjectLever.toLocaleString("FR", { minute: "numeric" })];
    if (timeTransform[1] < 10) {
        timeTransform[1] = "0" + timeTransform[1]
    }
    return timeTransform;
}
function addDaysToDate(date, days) {
    date.setDate(date.getDate() + days)
    return date
}
function getNameDay(day) {
    if (day == 0) {
        return "Dim."
    }
    else if (day == 1) {
        return "Lun."
    }
    else if (day == 2) {
        return "Mar."
    }
    else if (day == 3) {
        return "Mer."
    }
    else if (day == 4) {
        return "Jeu."
    }
    else if (day == 5) {
        return "Ven."
    }
    else if (day == 6) {
        return "Sam."
    }
}

//*GET METEO INFORMATIONS
fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&appid=950199b1cb418f0420cc6eea75b5117d&units=metric&lang=fr')
    .then(res => {
        if (res.ok) {
            res.json().then(data => {
                //*DATE ACTUEL
                let date = new Date();

                let jour = date.getDate();
                let mois = date.getMonth() + 1;
                let heure = date.getHours();
                let minute = date.getMinutes();
                let annee = date.getFullYear();

                //*Affichage date
                let jourDate = document.querySelector('#jourDate');
                if (jour < 10) {
                    jour = "0" + parseInt(jour);
                }
                jourDate.textContent = jour;

                let moisDate = document.querySelector('#moisDate');
                if (mois < 10) {
                    mois = "0" + parseInt(mois);
                }
                moisDate.textContent = mois;

                let aneeDate = document.querySelector('#anneeDate');
                aneeDate.textContent = annee;

                let heureDate = document.querySelector('#heureDate');
                if (heure < 10) {
                    heure = "0" + parseInt(heure);
                }
                heureDate.textContent = heure;

                let minDate = document.querySelector('#minuteDate');
                if (minute < 10) {
                    minute = "0" + parseInt(minute);
                }
                minDate.textContent = minute;


                //*CONDITION METEO
                //Description
                let conditionMeteo = document.querySelector('#descriptionMeteo');
                conditionMeteo.textContent = data.current.weather[0].description;

                //Icon condition
                let imgCondition = document.querySelector('#cercleDonneeMeteo img');
                imgCondition.src = '../assets/iconMeteo/' + data.current.weather[0].icon + '.png';

                //*INFORMATION SECONDAIRE
                //Humdité
                let humidity = document.querySelector('#humiditeDonnee');
                humidity.textContent = data.current.humidity;

                //Visibilité
                let visibility = document.querySelector('#visibiliteDonnee');
                if (((data.current.visibility / 1000).toFixed(0)) == 10) {
                    visibility.textContent = "> " + (data.current.visibility / 1000).toFixed(1);
                }
                else {
                    visibility.textContent = (data.current.visibility / 1000).toFixed(1);
                }

                //Température
                let temperature = document.querySelector('#donneeTemperatureCercle');
                temperature.textContent = Math.round(data.current.temp);
                //Température ressenti
                let feelTemp = document.querySelector('#tempRessentieDonnee');
                feelTemp.textContent = Math.round(data.current.feels_like);

                //Vent
                let vent = document.querySelector('#ventDonnee');
                vent.textContent = Math.round(data.current.wind_speed * 3.6);//Vent en km/h

                let directionVent = document.querySelector('#vent img');
                directionVent.style.transform = 'rotate(' + data.current.wind_deg + 'deg)';//Direction icon

                let textDirection = document.querySelector('#directionVentText');
                let directionResultat = getNameDirection(data.current.wind_deg);//Renvoit la direction
                textDirection.textContent = directionResultat;//Direction text


                //*INFORMATION DU SOLEIL
                //lever du soleil
                let timeResult = timeToHumanTime(data.current.sunrise)

                let leverSoleilHeure = document.querySelector('#heureLeve');
                leverSoleilHeure.textContent = timeResult[0];

                let leverSoleilMinute = document.querySelector('#minuteLeve');
                leverSoleilMinute.textContent = timeResult[1];

                //coucher du soleil
                timeResult = timeToHumanTime(data.current.sunset)

                let coucherSoleilHeure = document.querySelector('#heureCouche');
                coucherSoleilHeure.textContent = timeResult[0];

                let coucherSoleilMinute = document.querySelector('#minuteCouche');
                coucherSoleilMinute.textContent = timeResult[1];


                //*INFORMATION DE LA LUNE
                //lever de la lune
                timeResult = timeToHumanTime(data.daily[0].moonrise)

                let leverLuneHeure = document.querySelector('#heureLeveLune');
                leverLuneHeure.textContent = timeResult[0];

                let leverLunelMinute = document.querySelector('#minuteLeveLune');
                leverLunelMinute.textContent = timeResult[1];

                //coucher de la lune
                timeResult = timeToHumanTime(data.daily[0].moonset)


                let coucherLuneHeure = document.querySelector('#heureCoucheLune');
                coucherLuneHeure.textContent = timeResult[0];

                let coucherLuneMinute = document.querySelector('#minuteCoucheLune');
                coucherLuneMinute.textContent = timeResult[1];



                //*JOUR -- JOUR -- JOUR -- JOUR
                for (i = 1; i <= 7; i++) {//conditions sur 7 jours
                    //*CONTENU JOUR (top & informations secondaire)
                    let conteneurMeteoJour = document.createElement('div');
                    let sectionJour = document.getElementById("contenuInfoJours");
                    sectionJour.appendChild(conteneurMeteoJour);

                    //*TOP NAVBAR JOUR
                    let infoDayPrincipal = document.createElement('Article');
                    infoDayPrincipal.className = "dayInfo";
                    conteneurMeteoJour.appendChild(infoDayPrincipal);

                    //*DATE DU JOUR
                    let date = new Date();//date du jour
                    resultatDate = addDaysToDate(date, i)//fonction ajoute nbr de jour à date actuel

                    let numDay = resultatDate.getDay();//numéro de jour dans la semaine
                    let dayDate = resultatDate.getDate();//numéro de jour
                    nameDay = getNameDay(numDay);

                    let month = resultatDate.getMonth() + 1;//numéro de mois

                    let titreDay = document.createElement('h2');
                    if (month < 10) {
                        month = "0" + month
                    }
                    titreDay.textContent = nameDay + " " + dayDate;
                    infoDayPrincipal.appendChild(titreDay);

                    //*ICON METEO
                    let iconMeteo = document.createElement('img');
                    iconMeteo.className = "iconMeteoJour";
                    iconMeteo.src = '../assets/iconMeteo/' + data.daily[i].weather[0].icon + '.png';
                    infoDayPrincipal.appendChild(iconMeteo);

                    //*TEMPERATURE
                    let tempDay = document.createElement('p');
                    tempDay.className = "tempDay";
                    tempDay.textContent = Math.round(data.daily[i].temp.day) + "°C";
                    infoDayPrincipal.appendChild(tempDay);

                    //*TEMPERATURE MIN
                    let tempDayMin = document.createElement('p');
                    tempDayMin.className = "tempDayMin blue";
                    tempDayMin.textContent = Math.round(data.daily[i].temp.min) + "°C min";
                    infoDayPrincipal.appendChild(tempDayMin);

                    //*TEMPERATURE MAX
                    let tempDayMax = document.createElement('p');
                    tempDayMax.className = "tempDayMax red";
                    tempDayMax.textContent = Math.round(data.daily[i].temp.max) + "°C max";
                    infoDayPrincipal.appendChild(tempDayMax);

                    //*PARTIE VENT
                    let ventDay = document.createElement('div');
                    ventDay.className = "ventPrincipalJour";
                    infoDayPrincipal.appendChild(ventDay);

                    //IMAGE
                    let directionVentDay = document.createElement('img');
                    directionVentDay.src = '../assets/infoSecondaire/directionVent.png';
                    directionVentDay.style.transform = 'rotate(' + data.daily[i].wind_deg + 'deg)';
                    ventDay.appendChild(directionVentDay);

                    //VITESSE
                    let ventDayValue = document.createElement('p');
                    ventDayValue.textContent = Math.round(data.daily[i].wind_speed * 3.6) + " km/h";
                    ventDay.appendChild(ventDayValue);

                    //*BOUTON OUVERTURE
                    let iconSousInfo = document.createElement('i');
                    iconSousInfo.className = "fa-solid fa-caret-down fa-xl buttonSousMenuJour";
                    infoDayPrincipal.appendChild(iconSousInfo);



                    //*INFO DEROULANT
                    let infoDayDeroulant = document.createElement('Article');
                    infoDayDeroulant.className = "dayInfoBis";
                    conteneurMeteoJour.appendChild(infoDayDeroulant);

                    //*Description
                    let descriptifJour = document.createElement('section');
                    descriptifJour.className = "descriptifMeteoJour dayInfoBisClair";
                    infoDayDeroulant.appendChild(descriptifJour);

                    let titleDescrJ = document.createElement('h2');
                    titleDescrJ.textContent = "Description météo";
                    descriptifJour.appendChild(titleDescrJ);

                    let textDescrJ = document.createElement('p');
                    textDescrJ.textContent = data.daily[i].weather[0].description;
                    descriptifJour.appendChild(textDescrJ);

                    //*Température
                    let temperatureJour = document.createElement('section');
                    temperatureJour.className = "temperatureMeteoJour dayInfoBisFonce";
                    infoDayDeroulant.appendChild(temperatureJour);

                    let titleTempJ = document.createElement('h2');
                    titleTempJ.textContent = "Température";
                    temperatureJour.appendChild(titleTempJ);

                    let textTempJ = document.createElement('p');
                    textTempJ.textContent = Math.round(data.daily[i].temp.day) + "°C";
                    temperatureJour.appendChild(textTempJ);

                    //*température minimum
                    let temperatureMinJour = document.createElement('section');
                    temperatureMinJour.className = "temperatureMinMeteoJour dayInfoBisClair";
                    infoDayDeroulant.appendChild(temperatureMinJour);

                    let titleTempMinJ = document.createElement('h2');
                    titleTempMinJ.textContent = "Température minimum";
                    temperatureMinJour.appendChild(titleTempMinJ);

                    let textTempMinJ = document.createElement('p');
                    textTempMinJ.textContent = Math.round(data.daily[i].temp.min) + "°C";
                    temperatureMinJour.appendChild(textTempMinJ);

                    //*température maximum
                    let temperatureMaxJour = document.createElement('section');
                    temperatureMaxJour.className = "temperatureMinMeteoJour dayInfoBisFonce";
                    infoDayDeroulant.appendChild(temperatureMaxJour);

                    let titleTempMaxJ = document.createElement('h2');
                    titleTempMaxJ.textContent = "Température maximum";
                    temperatureMaxJour.appendChild(titleTempMaxJ);

                    let textTempMaxJ = document.createElement('p');
                    textTempMaxJ.textContent = Math.round(data.daily[i].temp.max) + "°C";
                    temperatureMaxJour.appendChild(textTempMaxJ);

                    //*vent
                    let ventJour = document.createElement('section');
                    ventJour.className = "ventMeteoJour dayInfoBisClair";
                    infoDayDeroulant.appendChild(ventJour);

                    let titleVentJ = document.createElement('h2');
                    titleVentJ.textContent = "Vent";
                    ventJour.appendChild(titleVentJ);

                    directionResultat = getNameDirection(data.daily[i].wind_deg);

                    let textVentJ = document.createElement('p');
                    textVentJ.textContent = Math.round(data.daily[i].wind_speed * 3.6) + " km/h - " + directionResultat;
                    ventJour.appendChild(textVentJ);

                    //*rafale de vent
                    let ventRafaleJour = document.createElement('section');
                    ventRafaleJour.className = "ventRafaleMeteoJour dayInfoBisFonce";
                    infoDayDeroulant.appendChild(ventRafaleJour);

                    let titleVentRafaleJ = document.createElement('h2');
                    titleVentRafaleJ.textContent = "Rafales de vent";
                    ventRafaleJour.appendChild(titleVentRafaleJ);

                    let textVentRafaleJ = document.createElement('p');
                    textVentRafaleJ.textContent = Math.round(data.daily[i].wind_gust * 3.6) + " km/h";
                    ventRafaleJour.appendChild(textVentRafaleJ);

                    //*humidité
                    let humiditeJour = document.createElement('section');
                    humiditeJour.className = "humiditeMeteoJour dayInfoBisClair";
                    infoDayDeroulant.appendChild(humiditeJour);

                    let titleHumiditeJ = document.createElement('h2');
                    titleHumiditeJ.textContent = "Humidité";
                    humiditeJour.appendChild(titleHumiditeJ);

                    let textHumiditeJ = document.createElement('p');
                    textHumiditeJ.textContent = data.daily[i].humidity + "%";
                    humiditeJour.appendChild(textHumiditeJ);

                    //*lever du soleil
                    let leverSoleilJour = document.createElement('section');
                    leverSoleilJour.className = "LeverSoleilMeteoJour dayInfoBisFonce";
                    infoDayDeroulant.appendChild(leverSoleilJour);

                    let titleLeverSoleilJ = document.createElement('h2');
                    titleLeverSoleilJ.textContent = "Lever du soleil";
                    leverSoleilJour.appendChild(titleLeverSoleilJ);

                    let textLeverSoleilJ = document.createElement('p');
                    timeResult = timeToHumanTime(data.daily[i].sunrise)
                    textLeverSoleilJ.textContent = timeResult[0] + " " + timeResult[1];
                    leverSoleilJour.appendChild(textLeverSoleilJ);

                    //*Coucher du soleil
                    let CoucherSoleilJour = document.createElement('section');
                    CoucherSoleilJour.className = "CoucherSoleilMeteoJour dayInfoBisClair";
                    infoDayDeroulant.appendChild(CoucherSoleilJour);

                    let titleCoucherSoleilJ = document.createElement('h2');
                    titleCoucherSoleilJ.textContent = "Coucher du soleil";
                    CoucherSoleilJour.appendChild(titleCoucherSoleilJ);

                    let textCoucherSoleilJ = document.createElement('p');
                    timeResult = timeToHumanTime(data.daily[i].sunset)
                    textCoucherSoleilJ.textContent = timeResult[0] + " " + timeResult[1];
                    CoucherSoleilJour.appendChild(textCoucherSoleilJ);

                    //*lever de la Lune
                    let leverLuneJour = document.createElement('section');
                    leverLuneJour.className = "LeverLuneMeteoJour dayInfoBisFonce";
                    infoDayDeroulant.appendChild(leverLuneJour);

                    let titleLeverLuneJ = document.createElement('h2');
                    titleLeverLuneJ.textContent = "Lever de la lune";
                    leverLuneJour.appendChild(titleLeverLuneJ);

                    let textLeverLuneJ = document.createElement('p');
                    timeResult = timeToHumanTime(data.daily[i].moonrise)
                    textLeverLuneJ.textContent = timeResult[0] + " " + timeResult[1];
                    leverLuneJour.appendChild(textLeverLuneJ);

                    //*Coucher de la lune
                    let CoucherLuneJour = document.createElement('section');
                    CoucherLuneJour.className = "CoucherLuneMeteoJour dayInfoBisClair";
                    infoDayDeroulant.appendChild(CoucherLuneJour);

                    let titleCoucherLuneJ = document.createElement('h2');
                    titleCoucherLuneJ.textContent = "Coucher de la lune";
                    CoucherLuneJour.appendChild(titleCoucherLuneJ);

                    let textCoucherLuneJ = document.createElement('p');
                    timeResult = timeToHumanTime(data.daily[i].moonset)
                    textCoucherLuneJ.textContent = timeResult[0] + " " + timeResult[1];
                    CoucherLuneJour.appendChild(textCoucherLuneJ);
                }






                let j = 0; //variable si heure dépasse minuit
                //*HEURES -- HEURES -- HEURES -- HEURES
                for (i = 1; i <= 12; i++) {
                    //*contenu heure 
                    let conteneurMeteoHeure = document.createElement('div');
                    let sectionHeure = document.getElementById("contenuInfoHeures");
                    sectionHeure.appendChild(conteneurMeteoHeure);


                    //*TOP NAVBAR JOUR
                    let infoHeurePrincipal = document.createElement('Article');
                    infoHeurePrincipal.className = "heureInfo";
                    conteneurMeteoHeure.appendChild(infoHeurePrincipal);

                    //*heure
                    let titreHeure = document.createElement('h2');
                    let heureInt = parseInt(heure);
                    if (heure + i == 24 || j > 0) {
                        if (j > 9) {
                            titreHeure.textContent = j + " h 00";

                        }
                        else {
                            titreHeure.textContent = "0" + j + " h 00";
                        }
                        j++;
                    }
                    else {
                        titreHeure.textContent = (heureInt + i) + " h 00";
                    }

                    infoHeurePrincipal.appendChild(titreHeure);

                    //*icon meteo
                    let iconMeteo = document.createElement('img');
                    iconMeteo.className = "iconMeteoHeure";
                    iconMeteo.src = '../assets/iconMeteo/' + data.hourly[i].weather[0].icon + '.png';
                    infoHeurePrincipal.appendChild(iconMeteo);

                    //*temperature
                    let tempHeure = document.createElement('p');
                    tempHeure.className = "tempHeure";
                    tempHeure.textContent = Math.round(data.hourly[i].temp) + "°C";
                    infoHeurePrincipal.appendChild(tempHeure);

                    //*température ressenti
                    let tempRessentiHeure = document.createElement('p');
                    tempRessentiHeure.className = "tempRessentiHeure";
                    tempRessentiHeure.textContent = Math.round(data.hourly[i].feels_like) + "°C ressenti";
                    infoHeurePrincipal.appendChild(tempRessentiHeure);

                    //*vent
                    let ventHeure = document.createElement('div');
                    ventHeure.className = "ventPrincipalHeure";
                    infoHeurePrincipal.appendChild(ventHeure);

                    let directionVentHeure = document.createElement('img');
                    directionVentHeure.src = '../assets/infoSecondaire/directionVent.png';
                    directionVentHeure.style.transform = 'rotate(' + data.hourly[i].wind_deg + 'deg)';
                    ventHeure.appendChild(directionVentHeure);

                    let ventHeureValue = document.createElement('p');
                    ventHeureValue.textContent = Math.round(data.hourly[i].wind_speed * 3.6) + " km/h";
                    ventHeure.appendChild(ventHeureValue);

                    //*ouverture info secondaire icon
                    let iconSousInfo = document.createElement('i');
                    iconSousInfo.className = "fa-solid fa-caret-down fa-xl buttonSousMenuHeure";
                    infoHeurePrincipal.appendChild(iconSousInfo);




                    //*INFO DEROULANT
                    let infoHeureDeroulant = document.createElement('Article');
                    infoHeureDeroulant.className = "heureInfoBis";

                    conteneurMeteoHeure.appendChild(infoHeureDeroulant);

                    //*Description
                    let descriptifHeure = document.createElement('section');
                    descriptifHeure.className = "descriptifMeteoHeure heureInfoBisClair";
                    infoHeureDeroulant.appendChild(descriptifHeure);

                    let titleDescrH = document.createElement('h2');
                    titleDescrH.textContent = "Description météo";
                    descriptifHeure.appendChild(titleDescrH);

                    let textDescrH = document.createElement('p');
                    textDescrH.textContent = data.hourly[i].weather[0].description;
                    descriptifHeure.appendChild(textDescrH);

                    //*temp
                    let temperatureHeure = document.createElement('section');
                    temperatureHeure.className = "temperatureMeteoHeure heureInfoBisFonce";
                    infoHeureDeroulant.appendChild(temperatureHeure);

                    let titleTempH = document.createElement('h2');
                    titleTempH.textContent = "Température";
                    temperatureHeure.appendChild(titleTempH);

                    let textTempH = document.createElement('p');
                    textTempH.textContent = Math.round(data.hourly[i].temp) + "°C";
                    temperatureHeure.appendChild(textTempH);

                    //*temp ressentie
                    let temperatureRessentiJour = document.createElement('section');
                    temperatureRessentiJour.className = "temperatureRessentiMeteoJour dayInfoBisClair";
                    infoHeureDeroulant.appendChild(temperatureRessentiJour);

                    let titleTempRessentiJ = document.createElement('h2');
                    titleTempRessentiJ.textContent = "Température ressentie";
                    temperatureRessentiJour.appendChild(titleTempRessentiJ);

                    let textTempRessentiJ = document.createElement('p');
                    textTempRessentiJ.textContent = Math.round(data.hourly[i].feels_like) + "°C";
                    temperatureRessentiJour.appendChild(textTempRessentiJ);

                    //*vent
                    let ventHeureSous = document.createElement('section');
                    ventHeureSous.className = "ventMeteoHeure heureInfoBisFonce";
                    infoHeureDeroulant.appendChild(ventHeureSous);

                    let titleVentHSous = document.createElement('h2');
                    titleVentHSous.textContent = "Vent";
                    ventHeureSous.appendChild(titleVentHSous);

                    directionResultat = getNameDirection(data.hourly[i].wind_deg);

                    let textVentHSous = document.createElement('p');
                    textVentHSous.textContent = Math.round(data.hourly[i].wind_speed * 3.6) + " km/h - " + directionResultat;
                    ventHeureSous.appendChild(textVentHSous);

                    //*rafale de vent
                    let ventRafaleHeure = document.createElement('section');
                    ventRafaleHeure.className = "ventRafaleMeteoHeure dayInfoBisClair";
                    infoHeureDeroulant.appendChild(ventRafaleHeure);

                    let titleVentRafaleH = document.createElement('h2');
                    titleVentRafaleH.textContent = "Rafales de vent";
                    ventRafaleHeure.appendChild(titleVentRafaleH);

                    let textVentRafaleH = document.createElement('p');
                    textVentRafaleH.textContent = Math.round(data.hourly[i].wind_gust * 3.6) + " km/h";
                    ventRafaleHeure.appendChild(textVentRafaleH);

                    //*humidité
                    let humiditeHeure = document.createElement('section');
                    humiditeHeure.className = "humiditeMeteoHeure heureInfoBisFonce";
                    infoHeureDeroulant.appendChild(humiditeHeure);

                    let titleHumiditeH = document.createElement('h2');
                    titleHumiditeH.textContent = "Humidité";
                    humiditeHeure.appendChild(titleHumiditeH);

                    let textHumiditeH = document.createElement('p');
                    textHumiditeH.textContent = data.hourly[i].humidity + "%";
                    humiditeHeure.appendChild(textHumiditeH);
                }



                //*OUVERTURE DU SOUS MENU JOUR
                let iconForOpenJour = document.querySelectorAll('.dayInfo');
                for (let i = 0; i < iconForOpenJour.length; i++) {
                    let statusInfo = 0;
                    iconForOpenJour[i].addEventListener("click", () => {
                        let parentElement = iconForOpenJour[i].parentNode;//Element parent
                        let lastChildElement = parentElement.lastChild;//Dernier element (soit le sous menu)

                        if (statusInfo == 0) {//sous menu fermé
                            iconForOpenJour[i].classList.add("infoPrincipalOpen");

                            let childSectionElement = lastChildElement.childNodes;
                            for (let i = 0; i < childSectionElement.length; i++){
                                childSectionElement[i].style.visibility="visible";
                                childSectionElement[i].style.height="60px";
                            }

                            ouvertureFermetureButton = iconForOpenJour[i].lastChild
                            ouvertureFermetureButton.style.transform="rotate(-180deg)"

                            statusInfo = 1;
                        }
                        else {//sous menu ouvert
                            iconForOpenJour[i].classList.remove("infoPrincipalOpen");

                            let childSectionElement = lastChildElement.childNodes;
                            for (let i = 0; i < childSectionElement.length; i++){
                                childSectionElement[i].style.height="0px";
                                childSectionElement[i].style.visibility="hidden";
                            }

                            ouvertureFermetureButton = iconForOpenJour[i].lastChild
                            ouvertureFermetureButton.style.transform="rotate(0deg)"

                            statusInfo = 0;
                        }
                    });
                }

                //*OUVERTURE DU SOUS MENU HEURE
                let iconForOpenHeure = document.querySelectorAll('.heureInfo');//resultat instantannée
                for (let i = 0; i < iconForOpenHeure.length; i++) {
                    let statusInfo = 0;
                    iconForOpenHeure[i].addEventListener("click", () => {
                        let parentElement = iconForOpenHeure[i].parentNode;//Element parent
                        let lastChildElement = parentElement.lastChild;//Dernier element (soit le sous menu)

                        if (statusInfo == 0) {//sous menu fermé
                            iconForOpenHeure[i].classList.add("infoPrincipalOpen");

                            let childSectionElement = lastChildElement.childNodes;
                            for (let i = 0; i < childSectionElement.length; i++){
                                childSectionElement[i].style.visibility="visible";
                                childSectionElement[i].style.height="60px";
                            }

                            ouvertureFermetureButton = iconForOpenHeure[i].lastChild
                            ouvertureFermetureButton.style.transform="rotate(-180deg)"

                            statusInfo = 1;
                        }
                        else {//sous menu ouvert
                            iconForOpenHeure[i].classList.remove("infoPrincipalOpen");

                            let childSectionElement = lastChildElement.childNodes;
                            for (let i = 0; i < childSectionElement.length; i++){
                                childSectionElement[i].style.height="0px";
                                childSectionElement[i].style.visibility="hidden";
                            }

                            ouvertureFermetureButton = iconForOpenHeure[i].lastChild
                            ouvertureFermetureButton.style.transform="rotate(0deg)"

                            statusInfo = 0;
                        }
                    });
                }

            })
        } else {
            console.log("Coordonnées incorrecte");
        }
    })



//*GET POLUTIONS INFORMATIONS
fetch('https://api.openweathermap.org/data/2.5/air_pollution?lat=' + latitude + '&lon=' + longitude + '&appid=950199b1cb418f0420cc6eea75b5117d')
    .then(res => {
        if (res.ok) {
            res.json().then(data => {
                let textPolution = document.querySelector('#donneePolution');

                //*Couleur et texte du cercle selon retour polution
                let cerclePolution = document.querySelector('#cercleResultatPolution');
                if (data.list[0].main.aqi == 1) {
                    textPolution.textContent = "Bon";
                    cerclePolution.style.backgroundColor = "#03FF0D";
                }
                if (data.list[0].main.aqi == 2) {
                    textPolution.textContent = "Équitable"
                    cerclePolution.style.backgroundColor = "#03FF0D";
                    cerclePolution.style.backgroundColor = "rgb(150 255 0)";
                }
                if (data.list[0].main.aqi == 3) {
                    textPolution.textContent = "Moyen";
                    cerclePolution.style.backgroundColor = "rgb(255 195 0)";
                }
                if (data.list[0].main.aqi == 4) {
                    textPolution.textContent = "Mauvais";
                    cerclePolution.style.backgroundColor = "rgb(255 124 0)";
                }
                if (data.list[0].main.aqi == 5) {
                    textPolution.textContent = "Très mauvais";
                    cerclePolution.style.backgroundColor = "#ff0000";
                }

                //*sélection
                let co = document.querySelector('#valeurCO');
                let nh3 = document.querySelector('#valeurNH3');
                let no = document.querySelector('#valeurNO');
                let no2 = document.querySelector('#valeurNO2');
                let o3 = document.querySelector('#valeur03');
                let pm25 = document.querySelector('#valeurPM25');
                let pm10 = document.querySelector('#valeurPM10');
                let so2 = document.querySelector('#valeurSO2');

                //*écriture
                co.textContent = data.list[0].components.co;
                nh3.textContent = data.list[0].components.nh3;
                no.textContent = data.list[0].components.no;
                no2.textContent = data.list[0].components.no2;
                o3.textContent = data.list[0].components.o3;
                pm25.textContent = data.list[0].components.pm2_5;
                pm10.textContent = data.list[0].components.pm10;
                so2.textContent = data.list[0].components.so2;
            })
        } else {
            console.log("Coordonnées incorrecte");
        }
    })