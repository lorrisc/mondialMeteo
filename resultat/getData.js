let latitude = sessionStorage.getItem('latitudeUser');
let longitude = sessionStorage.getItem('longitudeUser');

console.log(latitude)
console.log(longitude)

fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&appid=950199b1cb418f0420cc6eea75b5117d&units=metric&lang=fr')
    .then(res => {
        if (res.ok) {
            res.json().then(data => {
                console.log(data)

                /**
                 * *CONDITION METEO
                 */
                let conditionMeteo = document.querySelector('#descriptionMeteo');
                conditionMeteo.textContent = data.current.weather[0].description;

                // let imgCondition = document.querySelector('#conditionImg')
                // imgCondition.src = 'https://openweathermap.org/img/wn/10d@2x.png';
                // imgCondition.src = 'https://openweathermap.org/img/wn/' + data.current.weather[0].icon + '@2x.png';

                /**
                 * *INFORMATION SECONDAIRE
                 */
                let humidity = document.querySelector('#humiditeDonnee');
                humidity.textContent = data.current.humidity;

                let visibility = document.querySelector('#visibiliteDonnee');
                visibility.textContent = data.current.visibility / 1000;

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



            })
        } else {
            console.log("Coordonnées incorrecte");
        }
    })