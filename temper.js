document.addEventListener("DOMContentLoaded", function() {
    const convertButton = document.getElementById("convertButton");
    convertButton.addEventListener("click", convertTemperature);

    function convertTemperature() {
        const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
        const fromUnit = document.getElementById("fromUnit").value;
        const toUnit = document.getElementById("toUnit").value;
        let result;

        if (fromUnit === "celsius" && toUnit === "fahrenheit") {
            result = (temperatureInput * 9/5) + 32;
        } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
            result = (temperatureInput - 32) * 5/9;
        } else {
            result = temperatureInput;
        }

        document.getElementById("result").value = result.toFixed(2);
    }
});
