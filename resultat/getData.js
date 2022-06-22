let latitude = sessionStorage.getItem('latitudeUser');
let longitude = sessionStorage.getItem('longitudeUser');

fetch('http://api.openweathermap.org/geo/1.0/reverse?lat=' + latitude + '&lon=' + longitude + '&appid=950199b1cb418f0420cc6eea75b5117d')

    .then(res => {
        if (res.ok) {
            res.json().then(data => {
                let villeRecherche = document.querySelectorAll('.ville');
                let regionRecherche = document.querySelector('#regions');
                if (data.length == 0) {
                    for (i = 0; i < villeRecherche.length; i++) {
                        villeRecherche[i].textContent = ": lat" + latitude + ", longitude" + longitude;
                    }

                }
                else {
                    let villeUser = data[0].name
                    for (i = 0; i < villeRecherche.length; i++) {
                        villeRecherche[i].textContent = villeUser;
                    }

                    let regionUser = data[0].state
                    regionRecherche.textContent = regionUser;

                }
            })
        } else {
            console.log("Coordonnées incorrecte");
        }
    })

fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&appid=950199b1cb418f0420cc6eea75b5117d&units=metric&lang=fr')
    .then(res => {
        if (res.ok) {
            res.json().then(data => {
                console.log(data)
                /**
                * *DATE ACTUEL
                */
                let date = new Date();

                let jour = date.getDate();
                let mois = date.getMonth() + 1;
                let heure = date.getHours();
                let minute = date.getMinutes();
                let annee = date.getFullYear();

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

                /**
                 * *CONDITION METEO
                 */
                let conditionMeteo = document.querySelector('#descriptionMeteo');
                conditionMeteo.textContent = data.current.weather[0].description;

                let imgCondition = document.querySelector('#cercleDonneeMeteo img')
                imgCondition.src = '../assets/iconMeteo/' + data.current.weather[0].icon + '.png';

                /**
                 * *INFORMATION SECONDAIRE
                 */
                let humidity = document.querySelector('#humiditeDonnee');
                humidity.textContent = data.current.humidity;

                let visibility = document.querySelector('#visibiliteDonnee');
                if (((data.current.visibility / 1000).toFixed(0)) == 10) {
                    visibility.textContent = "> " + (data.current.visibility / 1000).toFixed(1);
                }
                else {
                    visibility.textContent = (data.current.visibility / 1000).toFixed(1);
                }

                /**
                 * *TEMPERATURE
                 */
                let temperature = document.querySelector('#donneeTemperatureCercle');
                temperature.textContent = Math.round(data.current.temp);

                let feelTemp = document.querySelector('#tempRessentieDonnee');
                feelTemp.textContent = Math.round(data.current.feels_like);

                /**
                * *VENT
                */
                let vent = document.querySelector('#ventDonnee');
                vent.textContent = Math.round(data.current.wind_speed * 3.6);

                let directionVent = document.querySelector('#vent img');
                directionVent.style.transform = 'rotate(' + data.current.wind_deg + 'deg)';

                getNameDirection(data.current.wind_deg);


                /**
                * *SOLEIL
                */
                //*LEVER DU SOLEIL
                const unixTimestampLever = data.current.sunrise

                const millisecondsLever = unixTimestampLever * 1000 // 1575909015000

                const dateObjectLever = new Date(millisecondsLever)
                const humanDateFormatLever = dateObjectLever.toLocaleString()

                let heureLever = null
                let minLever = null
                heureLever = dateObjectLever.toLocaleString("FR", { hour: "numeric" }) // 10 AM
                minLever = dateObjectLever.toLocaleString("FR", { minute: "numeric" }) // 30

                let leverSoleilHeure = document.querySelector('#heureLeve');
                leverSoleilHeure.textContent = heureLever;

                let leverSoleilMinute = document.querySelector('#minuteLeve');
                leverSoleilMinute.textContent = minLever;

                //*COUCHER DU SOLEIL
                const unixTimestampCoucher = data.current.sunset

                const millisecondsCoucher = unixTimestampCoucher * 1000 // 1575909015000

                const dateObjectCoucher = new Date(millisecondsCoucher)
                const humanDateFormatCoucher = dateObjectCoucher.toLocaleString()

                let heureCoucher = null
                let minCoucher = null
                heureCoucher = dateObjectCoucher.toLocaleString("FR", { hour: "numeric" }) // 10 AM
                minCoucher = dateObjectCoucher.toLocaleString("FR", { minute: "numeric" }) // 30

                let coucherSoleilHeure = document.querySelector('#heureCouche');
                coucherSoleilHeure.textContent = heureCoucher;

                let coucherSoleilMinute = document.querySelector('#minuteCouche');
                coucherSoleilMinute.textContent = minCoucher;


                /**
                * *LUNE
                */
                //*LEVER DE LA LUNE
                const unixTimestampLeverLune = data.daily[0].moonrise;

                const millisecondsLeverLune = unixTimestampLeverLune * 1000 // 1575909015000

                const dateObjectLeverLune = new Date(millisecondsLeverLune)
                const humanDateFormatLeverLune = dateObjectLeverLune.toLocaleString()

                let heureLeverLune = null
                let minLeverLune = null
                heureLeverLune = dateObjectLeverLune.toLocaleString("FR", { hour: "numeric" }) // 10 AM
                minLeverLune = dateObjectLeverLune.toLocaleString("FR", { minute: "numeric" }) // 30

                let leverLuneHeure = document.querySelector('#heureLeveLune');
                leverLuneHeure.textContent = heureLeverLune;

                let leverLunelMinute = document.querySelector('#minuteLeveLune');
                leverLunelMinute.textContent = minLeverLune;

                //*COUCHER DU SOLEIL
                const unixTimestampCoucherLune = data.daily[0].moonset;

                const millisecondsCoucherLune = unixTimestampCoucherLune * 1000 // 1575909015000

                const dateObjectCoucherLune = new Date(millisecondsCoucherLune)
                const humanDateFormatCoucherLune = dateObjectCoucherLune.toLocaleString()

                let heureCoucherLune = null
                let minCoucherLune = null
                heureCoucherLune = dateObjectCoucherLune.toLocaleString("FR", { hour: "numeric" }) // 10 AM
                minCoucherLune = dateObjectCoucherLune.toLocaleString("FR", { minute: "numeric" }) // 30

                let coucherLuneHeure = document.querySelector('#heureCoucheLune');
                coucherLuneHeure.textContent = heureCoucherLune;

                let coucherLuneMinute = document.querySelector('#minuteCoucheLune');
                coucherLuneMinute.textContent = minCoucherLune;




                //*JOUR -- JOUR -- JOUR -- JOUR
                for (i = 1; i <= 7; i++) {


                    //*TOP NAVBAR JOUR
                    let infoDayPrincipal = document.createElement('Article');
                    infoDayPrincipal.className = "dayInfo";

                    let sectionJour = document.getElementById("contenuInfoJours");
                    sectionJour.appendChild(infoDayPrincipal);


                    let titreDay = document.createElement('h2');
                    titreDay.textContent = (jour + i) + "/" + mois;

                    infoDayPrincipal.appendChild(titreDay);

                    let iconMeteo = document.createElement('img');
                    iconMeteo.className = "iconMeteoJour";
                    iconMeteo.src = '../assets/iconMeteo/' + data.daily[i].weather[0].icon + '.png';
                    infoDayPrincipal.appendChild(iconMeteo);

                    let tempDay = document.createElement('p');
                    tempDay.className = "tempDay"
                    tempDay.textContent = Math.round(data.daily[i].temp.day) + "°C"
                    infoDayPrincipal.appendChild(tempDay);

                    let tempDayMin = document.createElement('p');
                    tempDayMin.className = "tempDayMin blue"
                    tempDayMin.textContent = Math.round(data.daily[i].temp.min) + "°C min"
                    infoDayPrincipal.appendChild(tempDayMin);

                    let tempDayMax = document.createElement('p');
                    tempDayMax.className = "tempDayMax red"
                    tempDayMax.textContent = Math.round(data.daily[i].temp.max) + "°C max"
                    infoDayPrincipal.appendChild(tempDayMax);

                    let ventDay = document.createElement('div');
                    ventDay.className = "ventPrincipalJour"
                    infoDayPrincipal.appendChild(ventDay);

                    let directionVentDay = document.createElement('img');
                    directionVentDay.src = '../assets/infoSecondaire/directionVent.png';
                    directionVentDay.style.transform = 'rotate(' + data.daily[i].wind_deg + 'deg)';
                    ventDay.appendChild(directionVentDay);


                    let ventDayValue = document.createElement('p')
                    ventDayValue.textContent = Math.round(data.daily[i].wind_speed * 3.6) + " km/h";
                    ventDay.appendChild(ventDayValue);

                    let iconSousInfo = document.createElement('i')
                    iconSousInfo.className = "fa-solid fa-caret-down fa-xl"
                    infoDayPrincipal.appendChild(iconSousInfo);

                    //*INFO DEROULANT
                    let infoDayDeroulant = document.createElement('Article');
                    infoDayDeroulant.className = "dayInfoBis";

                    sectionJour.appendChild(infoDayDeroulant);

                    //*Description
                    let descriptifJour = document.createElement('section');
                    descriptifJour.className = "descriptifMeteoJour dayInfoBisClair";
                    infoDayDeroulant.appendChild(descriptifJour);

                    let titleDescrJ = document.createElement('h2');
                    titleDescrJ.textContent = "Description météo"
                    descriptifJour.appendChild(titleDescrJ);

                    let textDescrJ = document.createElement('p');
                    textDescrJ.textContent = data.daily[i].weather[0].description
                    descriptifJour.appendChild(textDescrJ);

                    //*temp
                    let temperatureJour = document.createElement('section');
                    temperatureJour.className = "temperatureMeteoJour dayInfoBisFonce";
                    infoDayDeroulant.appendChild(temperatureJour);

                    let titleTempJ = document.createElement('h2');
                    titleTempJ.textContent = "Température"
                    temperatureJour.appendChild(titleTempJ);

                    let textTempJ = document.createElement('p');
                    textTempJ.textContent = Math.round(data.daily[i].temp.day) + "°C"
                    temperatureJour.appendChild(textTempJ);

                    //*temp minimum
                    let temperatureMinJour = document.createElement('section');
                    temperatureMinJour.className = "temperatureMinMeteoJour dayInfoBisClair";
                    infoDayDeroulant.appendChild(temperatureMinJour);

                    let titleTempMinJ = document.createElement('h2');
                    titleTempMinJ.textContent = "Température minimum"
                    temperatureMinJour.appendChild(titleTempMinJ);

                    let textTempMinJ = document.createElement('p');
                    textTempMinJ.textContent = Math.round(data.daily[i].temp.min) + "°C"
                    temperatureMinJour.appendChild(textTempMinJ);

                    //*temp maximum
                    let temperatureMaxJour = document.createElement('section');
                    temperatureMaxJour.className = "temperatureMinMeteoJour dayInfoBisFonce";
                    infoDayDeroulant.appendChild(temperatureMaxJour);

                    let titleTempMaxJ = document.createElement('h2');
                    titleTempMaxJ.textContent = "Température maximum"
                    temperatureMaxJour.appendChild(titleTempMaxJ);

                    let textTempMaxJ = document.createElement('p');
                    textTempMaxJ.textContent = Math.round(data.daily[i].temp.max) + "°C"
                    temperatureMaxJour.appendChild(textTempMaxJ);

                    //*vent
                    let ventJour = document.createElement('section');
                    ventJour.className = "ventMeteoJour dayInfoBisClair";
                    infoDayDeroulant.appendChild(ventJour);

                    let titleVentJ = document.createElement('h2');
                    titleVentJ.textContent = "Vent"
                    ventJour.appendChild(titleVentJ);

                    let textVentJ = document.createElement('p');
                    textVentJ.textContent = Math.round(data.daily[i].wind_speed * 3.6) + " km/h - ADDDIRECTION";
                    ventJour.appendChild(textVentJ);

                    //*vent rafale
                    let ventRafaleJour = document.createElement('section');
                    ventRafaleJour.className = "ventRafaleMeteoJour dayInfoBisFonce";
                    infoDayDeroulant.appendChild(ventRafaleJour);

                    let titleVentRafaleJ = document.createElement('h2');
                    titleVentRafaleJ.textContent = "Rafale de vent"
                    ventRafaleJour.appendChild(titleVentRafaleJ);

                    let textVentRafaleJ = document.createElement('p');
                    textVentRafaleJ.textContent = Math.round(data.daily[i].wind_gust * 3.6) + " km/h";
                    ventRafaleJour.appendChild(textVentRafaleJ);

                    //*humidité
                    let humiditeJour = document.createElement('section');
                    humiditeJour.className = "humiditeMeteoJour dayInfoBisClair";
                    infoDayDeroulant.appendChild(humiditeJour);

                    let titleHumiditeJ = document.createElement('h2');
                    titleHumiditeJ.textContent = "Humidité"
                    humiditeJour.appendChild(titleHumiditeJ);

                    let textHumiditeJ = document.createElement('p');
                    textHumiditeJ.textContent = data.daily[i].humidity + "%";
                    humiditeJour.appendChild(textHumiditeJ);

                    //*lever du soleil
                    let leverSoleilJour = document.createElement('section');
                    leverSoleilJour.className = "LeverSoleilMeteoJour dayInfoBisFonce";
                    infoDayDeroulant.appendChild(leverSoleilJour);

                    let titleLeverSoleilJ = document.createElement('h2');
                    titleLeverSoleilJ.textContent = "Lever du soleil"
                    leverSoleilJour.appendChild(titleLeverSoleilJ);

                    let textLeverSoleilJ = document.createElement('p');
                    textLeverSoleilJ.textContent ="00h00";
                    leverSoleilJour.appendChild(textLeverSoleilJ);

                    //*Coucher du soleil
                    let CoucherSoleilJour = document.createElement('section');
                    CoucherSoleilJour.className = "CoucherSoleilMeteoJour dayInfoBisClair";
                    infoDayDeroulant.appendChild(CoucherSoleilJour);

                    let titleCoucherSoleilJ = document.createElement('h2');
                    titleCoucherSoleilJ.textContent = "Lever du soleil"
                    CoucherSoleilJour.appendChild(titleCoucherSoleilJ);

                    let textCoucherSoleilJ = document.createElement('p');
                    textCoucherSoleilJ.textContent ="01h00";
                    CoucherSoleilJour.appendChild(textCoucherSoleilJ);

                    //*lever du Lune
                    let leverLuneJour = document.createElement('section');
                    leverLuneJour.className = "LeverLuneMeteoJour dayInfoBisFonce";
                    infoDayDeroulant.appendChild(leverLuneJour);

                    let titleLeverLuneJ = document.createElement('h2');
                    titleLeverLuneJ.textContent = "Lever de la lune"
                    leverLuneJour.appendChild(titleLeverLuneJ);

                    let textLeverLuneJ = document.createElement('p');
                    textLeverLuneJ.textContent ="02h00";
                    leverLuneJour.appendChild(textLeverLuneJ);

                    //*Coucher du soleil
                    let CoucherLuneJour = document.createElement('section');
                    CoucherLuneJour.className = "CoucherLuneMeteoJour dayInfoBisClair";
                    infoDayDeroulant.appendChild(CoucherLuneJour);

                    let titleCoucherLuneJ = document.createElement('h2');
                    titleCoucherLuneJ.textContent = "Coucher de la lune"
                    CoucherLuneJour.appendChild(titleCoucherLuneJ);

                    let textCoucherLuneJ = document.createElement('p');
                    textCoucherLuneJ.textContent ="03h00";
                    CoucherLuneJour.appendChild(textCoucherLuneJ);

                }


            })
        } else {
            console.log("Coordonnées incorrecte");
        }
    })



fetch('http://api.openweathermap.org/data/2.5/air_pollution?lat=' + latitude + '&lon=' + longitude + '&appid=950199b1cb418f0420cc6eea75b5117d')

    .then(res => {
        if (res.ok) {
            res.json().then(data => {

                let textPolution = document.querySelector('#donneePolution');
                let cerclePolution = document.querySelector('#cercleResultatPolution');
                if (data.list[0].main.aqi == 1) {
                    textPolution.textContent = "Bon"
                    cerclePolution.style.backgroundColor = "#03FF0D"
                }
                if (data.list[0].main.aqi == 2) {
                    textPolution.textContent = "Équitable"
                    cerclePolution.style.backgroundColor = "#03FF0D"
                    cerclePolution.style.backgroundColor = "rgb(150 255 0)"

                }
                if (data.list[0].main.aqi == 3) {
                    textPolution.textContent = "Moyen"
                    cerclePolution.style.backgroundColor = "rgb(255 195 0)"

                }
                if (data.list[0].main.aqi == 4) {
                    textPolution.textContent = "Mauvais"
                    cerclePolution.style.backgroundColor = "rgb(255 124 0)"


                }
                if (data.list[0].main.aqi == 5) {
                    textPolution.textContent = "Très mauvais"
                    cerclePolution.style.backgroundColor = "#ff0000"

                }

                let co = document.querySelector('#valeurCO');
                let nh3 = document.querySelector('#valeurNH3');
                let no = document.querySelector('#valeurNO');
                let no2 = document.querySelector('#valeurNO2');
                let o3 = document.querySelector('#valeur03');
                let pm25 = document.querySelector('#valeurPM25');
                let pm10 = document.querySelector('#valeurPM10');
                let so2 = document.querySelector('#valeurSO2');


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