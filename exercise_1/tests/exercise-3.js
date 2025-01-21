/**
 * Verifica si un número es colorido
 * Un número es colorido si todos los productos de subconjuntos consecutivos
 * de sus dígitos son diferentes
 * 
 * Solo se consideran números de hasta 3 dígitos (0 <= numero <= 999).
 * Si el número está fuera de este rango, se debe arrojar un error con:
 * "El número debe estar entre 0 y 999"
 *
 * Ejemplo de 324:
 * - Dígitos: 3, 2, 4
 * - Productos: 3, 2, 4, 3*2=6, 2*4=8, 3*2*4=24
 *   Todos son distintos => true
 *
 * Ejemplo de 236:
 * - Dígitos: 2, 3, 6
 * - Productos: 2, 3, 6, 2*3=6, 3*6=18, 2*3*6=36
 *   Se repite 6 => false
 *
 * @param {number} numero - El número a verificar
 * @returns {boolean} Verdadero si el número es colorido, falso en caso contrario
 *
 * @example
 * // Para 324, se espera true
 * numeroColorido(324)
 *
 * @example
 * // Para 236, se espera false
 * numeroColorido(236)
 *
 * @example
 * // Para 1000, se espera un error con "El número debe estar entre 0 y 999"
 * numeroColorido(1000)
 */
const numeroColorido = (numero) => {
    // TODO: Implementar la función
  }
  
  export default numeroColorido
  