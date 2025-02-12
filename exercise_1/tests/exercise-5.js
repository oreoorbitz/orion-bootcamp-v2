/**
 * EJERCICIO 5: CONVERSIÓN DE CENTAVOS A FORMATO MONETARIO
 *
 * Instrucciones:
 *   1. Crea una función llamada "convertirCentsAMoneda" que reciba dos parámetros:
 *        - centavos: número entero que representa la cantidad en centavos.
 *        - codigoMoneda: string con el código de moneda (por ejemplo, "USD", "EUR", "GBP").
 *
 *   2. Se proporciona el objeto "monedas" que mapea códigos de moneda a símbolos:
 *
 *      const monedas = {
 *          USD: "$",
 *          EUR: "€",
 *          GBP: "£"
 *      }
 *
 *   3. La función debe:
 *        a. Retornar "Valor inválido" si centavos es negativo.
 *        b. Retornar "Código de moneda inválido" si codigoMoneda no se encuentra en monedas.
 *        c. Convertir centavos a la unidad monetaria (dividiendo por 100).
 *        d. Asegurar que el resultado tenga dos decimales (usa un método de String como toFixed(2)).
 *        e. Retornar un string que combine el símbolo (obtenido del objeto monedas) con el valor formateado.
 *
 * Ejemplos:
 *   convertirCentsAMoneda(1234, "USD") => "$12.34"
 *   convertirCentsAMoneda(50, "EUR")  => "€0.50"
 *   convertirCentsAMoneda(-100, "GBP") => "Valor inválido"
 *   convertirCentsAMoneda(200, "ABC") => "Código de moneda inválido"
 */

const monedas = {
    USD: "$",
    EUR: "€",
    GBP: "£"
  }
  
  const convertirCentsAMoneda = (centavos, codigoMoneda) => {
    // TODO: Implementar la función
  }
  
  export { convertirCentsAMoneda, monedas }
  