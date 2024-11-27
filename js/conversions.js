let fromScale = document.querySelector(".from-scale");
let toScale = document.querySelector(".to-scale");
let inputValue = document.querySelector("#temp-input");

fromScale.addEventListener("change", (event) => {
    checkScales();
})

toScale.addEventListener("change", (event) => {
    checkScales();
})

inputValue.addEventListener("change", (event) => {
    checkScales();
})

function checkScales() {
    // Celsius conversions
    if (fromScale.value === "celsius" && toScale.value === "fahrenheit") {
        celsiusToFahrenheit();
    } else if (fromScale.value === "celsius" && toScale.value === "kelvin") {
        celsiusToKelvin();
    } else if (fromScale.value === "celsius" && toScale.value === "rankine") {
        celsiusToRankine();
    }

    // Fahrenheit conversions
    else if (fromScale.value === "fahrenheit" && toScale.value === "celsius") {
        fahrenheitToCelsius();
    } else if (fromScale.value === "fahrenheit" && toScale.value === "kelvin") {
        fahrenheitToKelvin();
    } else if (fromScale.value === "fahrenheit" && toScale.value === "rankine") {
        fahrenheitToRankine();
    }

    // Kelvin conversions
    else if (fromScale.value === "kelvin" && toScale.value === "celsius") {
        kelvinToCelsius();
    } else if (fromScale.value === "kelvin" && toScale.value === "fahrenheit") {
        kelvinToFahrenheit();
    } else if (fromScale.value === "kelvin" && toScale.value === "rankine") {
        kelvinToRankine();
    }

    // Rankine conversions
    else if (fromScale.value === "rankine" && toScale.value === "celsius") {
        rankineToCelsius();
    } else if (fromScale.value === "rankine" && toScale.value === "fahrenheit") {
        rankineToFahrenheit();
    } else if (fromScale.value === "rankine" && toScale.value === "kelvin") {
        rankineToKelvin();
    }

    // Same scale selected
    else if (fromScale.value === toScale.value && fromScale.value !== "") {
        likeToLike();
    }

    // Invalid or incomplete selection
    else {
        console.log("Please select both scales for conversion");
    }
}

// -----------------------------------------------------------------//
// Same function conversion
function likeToLike() {
    document.querySelector("#temp-output").value = Number(inputValue.value);
}


// Celsius conversion functions
function celsiusToFahrenheit() {
    let celsius = Number(inputValue.value);
    let fahrenheit= (celsius * (9/5)) + 32;
    document.querySelector("#temp-output").value = fahrenheit.toFixed(2);
}

function celsiusToKelvin() {
    let celsius = Number(inputValue.value);
    let kelvin = celsius + 273.15;
    document.querySelector("#temp-output").value = kelvin.toFixed(2);
}

function celsiusToRankine() {
    let celsius = Number(inputValue.value);
    let rankine = (celsius * (9/5)) + 491.67;
    document.querySelector("#temp-output").value = rankine.toFixed(2);
}

// Fahrenheit conversion functions
function fahrenheitToCelsius() {
    let fahrenheit = Number(inputValue.value);
    let celsius = (fahrenheit - 32) * (5/9);
    document.querySelector("#temp-output").value = celsius.toFixed(2);
}

function fahrenheitToKelvin() {
    let fahrenheit = Number(inputValue.value);
    let kelvin = (fahrenheit - 32) * (5/9) + 273.15;
    document.querySelector("#temp-output").value = kelvin.toFixed(2);
}

function fahrenheitToRankine() {
    let fahrenheit = Number(inputValue.value);
    let rankine = fahrenheit + 459.67;
    document.querySelector("#temp-output").value = rankine.toFixed(2);
}

// Kelvin conversion functions
function kelvinToCelsius() {
    let kelvin = Number(inputValue.value);
    let celsius = kelvin - 273.15;
    document.querySelector("#temp-output").value = celsius.toFixed(2);
}

function kelvinToFahrenheit() {
    let kelvin = Number(inputValue.value);
    let fahrenheit = (kelvin - 273.15) * (9/5) + 32;
    document.querySelector("#temp-output").value = fahrenheit.toFixed(2);
}

function kelvinToRankine() {
    let kelvin = Number(inputValue.value);
    let rankine = kelvin * (9/5);
    document.querySelector("#temp-output").value = rankine.toFixed(2);
}

// Rankine conversion functions
function rankineToFahrenheit() {
    let rankine = Number(inputValue.value);
    let fahrenheit = rankine - 459.67;
    document.querySelector("#temp-output").value = fahrenheit.toFixed(2);
}

function rankineToCelsius() {
    let rankine = Number(inputValue.value);
    let celsius = (rankine - 491.67) * (5/9);
    document.querySelector("#temp-output").value = celsius.toFixed(2);
}

function rankineToKelvin() {
    let rankine = Number(inputValue.value);
    let kelvin = rankine * (5/9);
    document.querySelector("#temp-output").value = kelvin.toFixed(2);}

function copyValue() {
    let copyText = document.querySelector("#temp-output").value;
    const button = document.querySelector("#copy-converted-value");  // Get button element

    navigator.clipboard.writeText(copyText)
        .then(() => {
            // Add success class
            button.classList.add('copy-success');

            // Remove success class after 0.375 seconds
            setTimeout(() => {
                button.classList.remove('copy-success');
            }, 375);
        })
        .catch((err) => {
            console.error('Failed to copy: ', err);
        });
}