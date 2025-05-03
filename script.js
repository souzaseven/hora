function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const dayNames = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    const dayName = dayNames[now.getDay()];
    const date = now.getDate();
    const monthName = monthNames[now.getMonth()];
    const year = now.getFullYear();

    document.getElementById('current-time').textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById('current-date').textContent = `${dayName}, ${date} de ${monthName} de ${year}`;
}

// FUNÇÃO PARA CLIMA ATUAL
function getWeather(lat, lon) {
    const apiKey = '6e5f80bfbe2dd7591b7a9d65157d7e4b'; // Substitua por sua chave real
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.main && data.main.temp) {
                const temp = data.main.temp.toFixed(1);
                const weatherDiv = document.getElementById('weather');
                weatherDiv.textContent = `Temperatura: ${temp}°C`;
                weatherDiv.style.display = 'block';
            }
        })
        .catch(err => {
            console.error('Erro ao buscar temperatura:', err);
        });
}

function getLocationAndTime() {
    fetch('https://api.ipgeolocation.io/ipgeo?apiKey=13a008ccb7594d1cb4a6e986847fc507') // Substitua pela sua chave
        .then(response => response.json())
        .then(data => {
            if (data.city && data.country_name) {
                const locationDiv = document.getElementById('location');
                locationDiv.textContent = ` ${data.city}, ${data.country_name}`;
                locationDiv.style.display = 'block';

                // CHAMAR A FUNÇÃO DE CLIMA
                if (data.latitude && data.longitude) {
                    getWeather(data.latitude, data.longitude);
                }
            }
            updateTime();
            setInterval(updateTime, 1000);
        })
        .catch(error => {
            console.error('Erro ao obter localização:', error);
            updateTime();
            setInterval(updateTime, 1000);
        });
}

document.addEventListener('DOMContentLoaded', getLocationAndTime);
