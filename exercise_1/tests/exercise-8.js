/**
 * EJERCICIO 8: CREAR Y MANIPULAR ARRAY
 *
 * Instrucciones:
 *   1. Crea una función llamada "manipulaArray" que realice lo siguiente:
 *        a. Declara un array vacío llamado "myArray".
 *        b. Agrega tres elementos al array usando el método push.
 *           Los elementos pueden ser cadenas o números.
 *        c. Retorna el elemento en la posición 1 (el segundo elemento) del array.
 *
 * Ejemplo:
 *   Si el array resultante es ["a", "b", "c"], la función debe retornar "b".
 *
 * Nota: No es necesario usar bucles; utiliza la notación de corchetes para acceder al elemento.
 */

/**
 * Manipula un array agregando tres elementos y retorna el segundo elemento.
 * @returns {string|number} El segundo elemento del array.
 */
const manipulaArray = () => {
  const myArray = []
  myArray.push("a", "b", "c")
  return (myArray[1])
  
    // TODO: Declara un array vacío llamado "myArray".
    
    // TODO: Agrega tres elementos al array usando el método push.
    
    // TODO: Retorna el elemento en la posición 1 del array.
  };
  
  console.log(manipulaArray)
  export default manipulaArray;