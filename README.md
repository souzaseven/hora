# ⏰ Hora Certa

Um relógio digital moderno que exibe hora, data, localização e temperatura atual, com design responsivo e atualização em tempo real.
<!--
![Preview do Relógio](https://raw.githubusercontent.com/souzaseven/Site2/Desafios/icon%20eu.ico)
-->
## ✨ Funcionalidades

- **Relógio Digital**:
  - Exibe horas, minutos e segundos
  - Atualização em tempo real (segundo a segundo)
  - Animação de pulsação suave

- **Data Completa**:
  - Dia da semana por extenso
  - Data no formato "Dia de Mês de Ano"
  - Nomes dos meses em português

- **Informações Adicionais**:
  - Localização automática (cidade e país)
  - Temperatura atual em °C
  - Exibição responsiva

## 🛠️ Tecnologias Utilizadas

- **Frontend**:
  - HTML5 semântico
  - CSS3 com animações
  - JavaScript puro (ES6+)

- **APIs Integradas**:
  - OpenWeatherMap (tempo atual)
  - IP Geolocation (localização)

- **Bibliotecas**:
  - Google Analytics (métricas)
  - Google AdSense (monetização)

## 📂 Estrutura de Arquivos
hora-certa/ <br>
├── hora.html # Página principal <br>
├── style.css # Estilos personalizados <br>
└── script.js # Lógica do relógio e APIs <br>
<br>

## 🎨 Design e Interface

- **Tema Azul Moderno**:
  - Fundo azul (#007bff)
  - Texto em branco e azul
  - Cards com sombras e bordas arredondadas

- **Tipografia**:
  - Fonte principal: Segoe UI
  - Fonte do relógio: Courier New (monoespaçada)
  - Hierarquia visual clara

- **Efeitos Visuais**:
  - Animação de pulsação no relógio
  - Transições suaves

## ⚙️ Como Funciona

### Atualização do Relógio
```javascript
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('current-time').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateTime, 1000);
```
<br>

### Obtenção de Localização
```javascript
function getLocationAndTime() {
    fetch('https://api.ipgeolocation.io/ipgeo?apiKey=SUA_CHAVE')
        .then(response => response.json())
        .then(data => {
            document.getElementById('location').textContent = `${data.city}, ${data.country_name}`;
        });
}
```
### Obtenção do Tempo
```javascript
function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('weather').textContent = `Temperatura: ${data.main.temp}°C`;
        });
}
```

