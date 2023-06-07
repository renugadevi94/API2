const apiKey = '36649f9a7df4af353e2cbaa491a71aa3';

let form = document.getElementById('weather-form');
let weatherInfo = document.getElementById('weather-info');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let city = document.getElementById('city').value;
    getWeather(city);
});

async function getWeather(city) {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        let data = await response.json();

        let card = `
            <div class="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdKdQGpmjR-QwXVLWIWEdofMUeoYbDTK48CLORS9A_L_QHUYwDGmd3C7I_v5TpiZTrHTE&usqp=CAU" class="card-img-top" alt="weather">
                <div class="card-body bg-primary">
                    <h5 class="card-title">${data.name}</h5>
                </div>
                <ul class="list-group list-group-flush ">
                    <li class="list-group-item bg-info">Temp: ${data.main.temp}&deg;C</li>
                    <li class="list-group-item bg-warning">Feels Like: ${data.main.feels_like}&deg;C</li>
                    <li class="list-group-item bg-danger">Pressure: ${data.main.pressure}</li>
                </ul>
            </div>
        `;
        weatherInfo.innerHTML = card;
    } catch (error) {
        console.error('error fetching the weather data');
    }
}