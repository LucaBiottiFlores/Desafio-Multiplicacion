
//Solicitar a usuario ingresar un número

let num = prompt( "Ingrese un numero entre 1 y 20", "" );

// Función que hará lo solicitado

const verify = (numero) => {
if ( numero >=1 && numero <=20) {
    // conseguir tabla multiplicacion del número ingresado por el usuario, desde 1 x numero ingresado hasta numero ingreado por sí mismo.

    for (let multiplier = 1; multiplier <= numero; multiplier++) {
       console.log (`${multiplier} x ${numero} = ${multiplier * numero}`);
    }
    // conseguir el factorial desde el 1 hasta el número ingresado por el usuario

    for (let factorial = 1; factorial <= numero; factorial++) {

        let factorialResult = 1;
    
        for (let factorialIteration = 1; factorialIteration<=factorial; factorialIteration++) {
             factorialResult = factorialResult * factorialIteration;
             
        }
        console.log (`Factorial de ${factorial} es: ${factorialResult}`);
     }
       
} else console.log (`Número fuera de rango`);
}

// Imprimir función en la consola

console.log (verify(Number.parseInt(num)));

