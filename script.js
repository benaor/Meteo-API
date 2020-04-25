
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=910c86fa056451e51d511b3c005894cc&units=metric';

let ville = 'chantrans';
let villeHTML = document.getElementById('ville');
villeHTML.textContent = ville;

function recoverTemp() {

    //Created a query Ajax
    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();

    requete.onload = function () {

        if (requete.readyState === XMLHttpRequest.DONE) {

            if (requete.status === 200) {

                let reponse = requete.response
                let temperature = reponse.main.temp;
                document.getElementById('temperature_label').textContent = temperature;

            } else {

                let reponse = requete.response;
                let error = reponse.message;
                alert(error);
               

            }

        }
    }
}
setInterval(recoverTemp, 3000)
