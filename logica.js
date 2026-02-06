let celsius;//variable que cambiará

while (true){
    celsius= prompt("Ingresa tus grados Celsius")
    //      no empty  and is a number
    if (celsius !=="" && !isNaN(celsius)) {

        celsius = Number(celsius)
        break;
    } else {
        alert("¡Error! ingresa números únicamente")
        
    }
}

const fahrenheit = (celsius * 1.8) + 32;
const kelvin = celsius + 273.15;
//DOM

document.body.innerHTML = ` 
<h1> Convertidor de Grados Celsius a Fahrenheit </h1>
<p><strong>Celsius:</strong> ${celsius}°C</p>
        <p><strong>Fahrenheit:</strong> ${fahrenheit.toFixed(2)}°F</p>
        <p><strong>Kelvin:</strong> ${kelvin.toFixed(2)}K</p>`