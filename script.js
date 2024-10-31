let temperature = 0;
let state = "water"; // Estados: "water", "ice", "vapor"

// Atualiza o elemento na tela
function updateState() {
    const waterElement = document.getElementById("water");
    const temperatureDisplay = document.getElementById("temperatureDisplay");

    if (temperature >= 100) {
        state = "vapor";
        waterElement.innerText = "💨"; // Vapor
        temperatureDisplay.innerText = "A água evaporou! Temperatura: " + temperature + "°C";
    } else if (temperature <= 0) {
        state = "ice";
        waterElement.innerText = "❄️"; // Gelo
        temperatureDisplay.innerText = "A água congelou! Temperatura: " + temperature + "°C";
    } else {
        state = "water";
        waterElement.innerText = "💧"; // Água
        temperatureDisplay.innerText = "Temperatura: " + temperature + "°C";
    }
}

// Função para aumentar a temperatura
function increaseTemperature() {
    if (state === "vapor") return; // Não aumenta mais se for vapor
    temperature += 10;
    updateState();
}

// Função para diminuir a temperatura
function decreaseTemperature() {
    if (state === "ice") return; // Não diminui mais se for gelo
    temperature -= 10;
    updateState();
}

// Função para reiniciar o jogo
function restartGame() {
    temperature = 0;
    state = "water";
    updateState();
}
