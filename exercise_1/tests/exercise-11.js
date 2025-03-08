/**
 * EJERCICIO 11: SEPARAR ELEMENTOS DE UN ARRAY POR TIPO
 *
 * Instrucciones:
 *   1. Crea una función llamada "separarTipos" que reciba un array.
 *   2. El array contendrá elementos de tipo number y string.
 *   3. La función debe:
 *        a. Verificar que el parámetro es un array (usa Array.isArray). Si no lo es, retorna "Datos inválidos".
 *        b. Usar un bucle for para recorrer el array y separar los elementos:
 *             - Si el elemento es de tipo "number", agrégalo a un array llamado "numbers".
 *             - Si el elemento es de tipo "string", agrégalo a un array llamado "strings".
 *        c. Retornar un objeto con dos propiedades:
 *             {
 *               numbers: [array de números],
 *               strings: [array de cadenas]
 *             }
 *
 * Ejemplo:
 *   separarTipos([1, "hola", 3, "mundo"])
 *     => { numbers: [1, 3], strings: ["hola", "mundo"] }
 *
 * Nota: No es necesario iterar de otra forma; usa un for loop y la notación de corchetes para agregar elementos.
 */

/**
 * Separa los elementos de un array en dos categorías: numbers y strings.
 * @param {Array} arr - El array que contiene números y cadenas.
 * @returns {{ numbers: number[], strings: string[] }|string} Un objeto con propiedades "numbers" y "strings", o "Datos inválidos" si el parámetro no es un array.
 */
const separarTipos = (arr) => {
    // TODO: Verifica que arr es un array usando Array.isArray.
    // Si no lo es, retorna "Datos inválidos".
    
    // TODO: Declara dos arrays vacíos: uno para números y otro para strings.
    
    // TODO: Usa un bucle for para recorrer el array.
    // Por cada elemento, si typeof elemento es "number", agrégalo al array de números;
    // si typeof elemento es "string", agrégalo al array de strings.
    
    // TODO: Retorna un objeto con dos propiedades: { numbers: [...], strings: [...] }.
  };
  
  // Ejemplo de uso: Agrega tus propios console.log para probar la función.
  console.log("Ejercicio 11 - separarTipos([1, 'hola', 3, 'mundo']):", separarTipos([1, "hola", 3, "mundo"]));
  
  export default separarTipos;
  