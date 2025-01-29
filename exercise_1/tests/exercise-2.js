/**
 * Genera un saludo utilizando el nombre de una persona
 * Debe devolver "Hola, <primerNombre> <apellido>"!
 * (incluyendo la exclamación al final)
 *
 * 
 * @param {string} primerNombre - El primer nombre de la persona
 * @param {string} apellido - El apellido de la persona
 * @returns {string} El mensaje de saludo
 *
 * @example
 * // Para "Juan" y "Pérez", se espera "Hola, Juan Pérez!"
 * cualEsTuNombre("Juan", "Pérez")
 *
 * @example
 * // Para "Ana" y "Gómez", se espera "Hola, Ana Gómez!"
 * cualEsTuNombre("Ana", "Gómez")
 */
const cualEsTuNombre = (primerNombre, apellido) => {
  return "Hola " + primerNombre + " " + apellido + "!"
}

  console.log(cualEsTuNombre("Adrian", "Lopez"));
  export default  cualEsTuNombre