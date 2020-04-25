let ville = 'chantrans';
let villeHTML = document.getElementById('ville');
villeHTML.textContent = ville;

function recoverTemp() {

    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=910c86fa056451e51d511b3c005894cc&units=metric';


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

            } else if (requete.status === 404) {

                let reponse = requete.response;
                let error = reponse.message;
                alert(error);
                ville = 'chantrans';
                villeHTML.textContent = ville;
                return ville;

            }

        }
    }

}
setInterval(recoverTemp, 3000)

//Change city
let btnChange = document.getElementById('changer');
btnChange.addEventListener('click', () => {
    ville = prompt('Choissez une ville ?');
    villeHTML.textContent = ville;
    return ville;
});