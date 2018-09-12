const baseURL = 'https://api.openaq.org/v1/cities';

let travel = '';
let letsGo = '';
let randomCity = document.getElementById('randomCity');

function gogo() {
    while(randomCity.firstChild) {
        randomCity.removeChild(randomCity.firstChild);
    }

    function randomNum() {
        return Math.floor((Math.random() * 100) + 1);
    }
    randomNum()

    let x = randomNum();
    console.log(x);

    fetch(baseURL)
        .then(function(result) {
        //console.log(result.json())
        return result.json();
    })
        .then(function(json) {
        displayResults(json);
        // console.log(json);
    })

    function displayResults(json) {
        let city = json.results[x].city;
        console.log(city);
        let country = json.results[x].country;
        console.log(country);
        let travel = document.createElement('h3');
        let letsGo = document.createElement('h3');
        travel.innerText = city;
        letsGo.innerText = country;

        randomCity.appendChild(travel);
        randomCity.appendChild(letsGo);
    }

}