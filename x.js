/**
 * EJERCICIO 6: GENERAR RESUMEN DE USUARIO Y TRANSACCIÓN
 *
 * Instrucciones:
 *   1. Crea una función llamada "generarResumen" que reciba los siguientes parámetros:
 *        - primerNombre (string)
 *        - apellido (string)
 *        - años (number) – la edad en años
 *        - centavos (number) – el monto de la compra en centavos
 *        - codigoMoneda (string) – el código de moneda (por ejemplo, "USD", "EUR", "GBP")
 *
 *   2. La función debe:
 *        a. Validar que cada parámetro sea del tipo correcto usando "typeof".  
 *           Si alguno no es del tipo esperado, retorna "Datos inválidos".
 *
 *        b. Crear internamente una función "cualEsTuNombre" que reciba (primerNombre, apellido)
 *           y retorne un saludo en el formato: "Hola, <primerNombre> <apellido>!".
 *
 *        c. Crear internamente una función "edadEnDias" que reciba un número de años y retorne
 *           la cantidad de días (asumiendo 365 días por año).
 *
 *        d. Crear internamente una función "convertirCentsAMoneda" que reciba (centavos, codigoMoneda)
 *           y realice lo siguiente:
 *             i. Utilizar el objeto "monedas" proporcionado.
 *            ii. Si centavos es negativo, retornar "Valor inválido".
 *           iii. Si codigoMoneda no se encuentra en el objeto, retornar "Código de moneda inválido".
 *            iv. Convertir centavos a la unidad monetaria dividiendo por 100.
 *             v. Asegurar que el resultado tenga dos decimales (usa toFixed(2)).
 *            vi. Retornar un string que combine el símbolo y el valor formateado.
 *
 *        e. Usar las funciones internas para:
 *             - Obtener el saludo.
 *             - Convertir la edad a días.
 *             - Convertir centavos a formato monetario.
 *
 *        f. Si el valor monetario (centavos / 100) es mayor a 10, añadir al mensaje la frase:
 *             "¡Gran compra!".
 *
 *        g. Combinar todos estos resultados en un mensaje final y retornarlo.
 *
 * Ejemplos:
 *   generarResumen('Juan', 'Pérez', 10, 1234, 'USD')
 *     => "Hola, Juan Pérez! Tienes 3650 días de vida. Tu compra de $12.34 ha sido registrada. ¡Gran compra!"
 *
 *   generarResumen('Ana', 'Gómez', 8, 500, 'EUR')
 *     => "Hola, Ana Gómez! Tienes 2920 días de vida. Tu compra de €5.00 ha sido registrada."
 *
 *   generarResumen(123, 'Pérez', 10, 1234, 'USD')
 *     => "Datos inválidos"
 */

/** @type {{ [key: string]: string }} */
const monedas = {
    USD: "$",
    EUR: "€",
    GBP: "£"
  }
  
  /**
   * Genera un resumen de usuario y transacción.
   *
   * @param {string} primerNombre - El primer nombre del usuario.
   * @param {string} apellido - El apellido del usuario.
   * @param {number} años - La edad en años del usuario.
   * @param {number} centavos - El monto de la compra en centavos.
   * @param {string} codigoMoneda - El código de moneda (por ejemplo, "USD", "EUR", "GBP").
   * @returns {string} Un mensaje resumen o "Datos inválidos" si algún parámetro no es del tipo esperado.
   */
  const generarResumen = (primerNombre, apellido, años, centavos, codigoMoneda) => {
    
    // TODO: Validar que los parámetros sean del tipo correcto usando typeof.
    // Si alguno es inválido, retornar "Datos inválidos".
  if (typeof primerNombre != "string" || typeof apellido != "string" || typeof años != "number" || 
      typeof centavos != "number" || typeof codigoMoneda != "string"){
        return "Datgos invalidos"
      }
      
    
  
    // TODO: Definir la función interna "cualEsTuNombre" que reciba (primerNombre, apellido)
    // y retorne un saludo en el formato: "Hola, <primerNombre> <apellido>!".
    //const cualEsTuNombre = (primerNombre, apellido)
    //return `Hola ${primerNombre} ${apellido}!` 
    
    // TODO: Definir la función interna "edadEnDias" que reciba (años) y retorne (años * 365).
  //const edadEnDias = (años) => {
    //return años * 365
 //}
    // TODO: Definir la función interna "convertirCentsAMoneda" que reciba (centavos, codigoMoneda)
    // y haga lo siguiente:
     //   - Si centavos es negativo, retornar "Valor inválido".
   // const convertirCentsAMoneda = (centavos, codigoMoneda)=>{
//if (centavos < 0){
   // return "Valor invalido"
//}
//   - Si codigoMoneda no existe en el objeto "monedas", retornar "Código de moneda inválido".

//if (!monedas[codigoMoneda]){
  //  return "Codigo de moneda invalido"
//}
   // }
    //   - Convertir centavos a la unidad monetaria dividiendo por 100.
    //   - Formatear el resultado a dos decimales usando toFixed(2).
   // const convercion = (centavos / 100).toFixed(2)
    //   - Retornar un string que combine el símbolo (del objeto monedas) y el valor formateado.
 // return `${monedas.USD} ${convercion}` 
    // TODO: Llamar a las funciones internas para obtener:
    //   - El saludo.
    //   - La edad en días.
    //   - El valor formateado de la compra.
   // const saludo = cualEsTuNombre(Adrian, Lopez)
   // const r = edadEnDias(20)
   // const formateado = convertirCentsAMoneda(2000, "USD")

    
    // TODO: Si (centavos / 100) es mayor a 10, definir un mensaje adicional: "¡Gran compra!".

  
    // TODO: Combinar y retornar el mensaje final.
  };
  
  
const r = generarResumen("Adrian", "Lopez", 28, 2000, "USD")
const rDos = generarResumen(22,"Lopez", 28, 2000, "USD")
const rTres = generarResumen("Adrian", 22, 28, 2000, "USD")
const rCuatro = generarResumen("Adrian", "Lopez", "string", 2000, "USD")
const rCinco = generarResumen("Adrian", "Lopez", 28, "invalido", "USD")
const rSeis = generarResumen("Adrian", "Lopez", 28, 2000, 8000)

console.log(r)
console.log(rDos)
console.log(rTres)
console.log(rCuatro)
console.log(rCinco)