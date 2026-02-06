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

const fahrenheit = (celsius * 1.8.toFixed) + 32;
const kelvin = celsius + 273.15.toFixed;