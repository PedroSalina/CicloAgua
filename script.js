let temperature = 0;
let state = "water";


function updateState() {
    const waterElement = document.getElementById("water");
    const temperatureDisplay = document.getElementById("temperatureDisplay");

    if (temperature >= 100) {
        state = "vapor";
        waterElement.innerText = "💨"; 
        temperatureDisplay.innerText = "A água evaporou! Temperatura: " + temperature + "°C";
    } else if (temperature <= 0) {
        state = "ice";
        waterElement.innerText = "❄️"; 
        temperatureDisplay.innerText = "A água congelou! Temperatura: " + temperature + "°C";
    } else {
        state = "water";
        waterElement.innerText = "💧"; 
        temperatureDisplay.innerText = "Temperatura: " + temperature + "°C";
    }
}


function increaseTemperature() {
    if (state === "vapor") return; 
    temperature += 10;
    updateState();
}


function decreaseTemperature() {
    if (state === "ice") return; 
    temperature -= 10;
    updateState();
}


function restartGame() {
    temperature = 0;
    state = "water";
    updateState();
}
