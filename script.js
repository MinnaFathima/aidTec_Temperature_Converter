function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
    const inputUnit = document.getElementById('inputUnit').value;
    let result = '';

    if (isNaN(inputTemperature)) {
        result = 'Please enter a valid number.';
    } else {
        if (inputUnit === 'celsius') {
            const fahrenheit = (inputTemperature * 9/5) + 32;
            const kelvin = inputTemperature + 273.15;
            result = `${inputTemperature} Celsius is ${fahrenheit.toFixed(2)} Fahrenheit and ${kelvin.toFixed(2)} Kelvin.`;
        } else if (inputUnit === 'fahrenheit') {
            const celsius = (inputTemperature - 32) * 5/9;
            const kelvin = (inputTemperature - 32) * 5/9 + 273.15;
            result = `${inputTemperature} Fahrenheit is ${celsius.toFixed(2)} Celsius and ${kelvin.toFixed(2)} Kelvin.`;
        } else if (inputUnit === 'kelvin') {
            const celsius = inputTemperature - 273.15;
            const fahrenheit = (inputTemperature * 9/5) - 459.67;
            result = `${inputTemperature} Kelvin is ${celsius.toFixed(2)} Celsius and ${fahrenheit.toFixed(2)} Fahrenheit.`;
        }
    }

    document.getElementById('result').textContent = result;
}

