/**
 * EJERCICIO 10: GENERAR RANGO EN UN ARRAY
 *
 * Instrucciones:
 *   1. Crea una función llamada "generarRango" que reciba un parámetro:
 *        - n (number): Un número entero.
 *   2. La función debe:
 *        a. Verificar que n es de tipo number. Si no lo es, retorna "Datos inválidos".
 *        b. Declarar un array vacío.
 *        c. Utilizar un bucle for para llenar el array con números desde 0 hasta n (incluyendo n).
 *        d. Retornar el array resultante.
 *
 * Ejemplo:
 *   generarRango(5)
 *     => [0, 1, 2, 3, 4, 5]
 *
 * Nota: Asegúrate de usar un for loop y la notación de corchetes para agregar elementos al array.
 */

/**
 * Genera un array que contiene el rango de 0 a n (incluyendo n).
 * @param {number} n - El número hasta el cual se genera el rango.
 * @returns {number[]|string} Un array con números desde 0 hasta n o "Datos inválidos" si n no es un número.
 */
const generarRango = (n) => {
    console.log(typeof n === "number" )
    if ( typeof n !== "number" ) {
        return "Datos invalidos"
    }
    const rango = []
    for (let i = 0; i <= n; i++){
        rango.push(i)       
        console.log(rango)
    }
    return rango

    // TODO: Verifica que n es un número. Si no, retorna "Datos inválidos".

    // TODO: Declara un array vacío, por ejemplo: const rango = [];

    // TODO: Usa un bucle for para recorrer desde 0 hasta n (incluyendo n).
    // Dentro del for, agrega cada número al array usando el método push.

    // TODO: Retorna el array.
};

// Ejemplo de uso (agrega tus propios console.log para probar la función):
//console.log("Ejercicio 10 - generarRango(5):", generarRango(5));
console.log("Ejercicio 10 - generarRango(5):", generarRango(5));

