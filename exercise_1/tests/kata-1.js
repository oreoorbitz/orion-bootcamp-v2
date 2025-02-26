// Funciones básicas de operaciones matemáticas y validación de tipos

/**
 * Calcula el doble de un número.
 * @param {number} x - El número a duplicar.
 * @returns {number} El doble de x.
 */
const doble = x => x ___ 2

/**
 * Calcula el triple de un número.
 * @param {number} x - El número a triplicar.
 * @returns {number} El triple de x.
 */
const triple = (x) => {
    return x ___ 3
}

/**
 * Calcula el cuádruple de un número.
 * @param {number} x - El número a multiplicar por cuatro.
 * @returns {number} El cuádruple de x.
 */
const cuadruple = function(x) {
    return x ___ 4
}

/**
 * Calcula el quíntuple de un número.
 * @param {number} x - El número a multiplicar por cinco.
 * @returns {number} El quíntuple de x.
 */
function quintuple(x) {
    return x ___ 5
}

/**
 * Verifica si el valor es de tipo 'number'.
 * @param {*} x - El valor a comprobar.
 * @returns {boolean} true si x es un número, false en caso contrario.
 */
const esTipoNumero = x => typeof x === ___

/**
 * Verifica si el valor es de tipo 'string'.
 * @param {*} x - El valor a comprobar.
 * @returns {boolean} true si x es una cadena, false en caso contrario.
 */
const esTipoString = (x) => {
    return typeof x === ___
}

/**
 * Verifica si el valor es de tipo 'boolean'.
 * @param {*} x - El valor a comprobar.
 * @returns {boolean} true si x es booleano, false en caso contrario.
 */
const esTipoBoolean = function(x) {
    return typeof x === ___
}

/**
 * Verifica si el valor es null.
 * @param {*} x - El valor a comprobar.
 * @returns {boolean} true si x es null, false en caso contrario.
 */
function esTipoNull(x) {
    return x === ___
}

// Ejemplos adicionales de funciones simples

/**
 * Suma dos números.
 * @param {number} a - Primer número.
 * @param {number} b - Segundo número.
 * @returns {number} La suma de a y b.
 */
const sumar = (a, b) => a ___ b

/**
 * Resta dos números.
 * @param {number} a - Primer número.
 * @param {number} b - Segundo número.
 * @returns {number} La diferencia entre a y b.
 */
const restar = (a, b) => {
    return a ___ b
}

/**
 * Multiplica dos números.
 * @param {number} a - Primer número.
 * @param {number} b - Segundo número.
 * @returns {number} El producto de a y b.
 */
function multiplicar(a, b) {
    return a ___ b
}

/**
 * Divide dos números.
 * @param {number} a - Numerador.
 * @param {number} b - Denominador.
 * @returns {number} El cociente de a dividido por b.
 */
const dividir = function(a, b) {
    return a ___ b
}

/**
 * Verifica si un número es par.
 * @param {number} num - El número a verificar.
 * @returns {boolean} true si num es par, false de lo contrario.
 */
const esPar = num => num % ___ === 0

/**
 * Saluda a una persona concatenando su nombre.
 * @param {string} nombre - El nombre de la persona.
 * @returns {string} Un saludo personalizado.
 */
function saludar(nombre) {
    return ___ + nombre
}

/**
 * Eleva un número al cuadrado.
 * @param {number} x - El número a elevar al cuadrado.
 * @returns {number} El cuadrado de x.
 */
const elevarAlCuadrado = x => x ___ x

/**
 * Concatena dos cadenas con un espacio entre ellas.
 * @param {string} a - Primera cadena.
 * @param {string} b - Segunda cadena.
 * @returns {string} La concatenación de a y b con un espacio.
 */
const concatenar = function(a, b) {
    return a ___ " " ___ b
}

/**
 * Convierte una cadena a mayúsculas.
 * @param {string} str - La cadena a convertir.
 * @returns {string} La cadena en mayúsculas.
 */
const mayusculas = str => str.___()

/**
 * Comprueba si una cadena está vacía (después de quitar espacios).
 * @param {string} str - La cadena a comprobar.
 * @returns {boolean} true si la cadena está vacía, false en caso contrario.
 */
function esCadenaVacia(str) {
    return str.___() === ___
}

// Ejemplos adicionales usando estructuras de control (if-else)

/**
 * Saluda si el valor es una cadena, de lo contrario indica que no lo es.
 * @param {*} x - El valor a verificar.
 * @returns {string} Saludo si x es una cadena, o mensaje de error.
 */
const saludarSiString = x => {
    if (typeof x ___ 'string') {
      return ___ + x;
    } else {
      return "No es una cadena";
    }
}

/**
 * Clasifica un valor numérico.
 * @param {*} x - El valor a clasificar.
 * @returns {string} "No es un número" si x no es numérico, "Positivo", "Negativo" o "Cero" según corresponda.
 */
const clasificarNumero = x => {
    if (typeof x ___ 'number') {
      return "No es un número";
    } else if (x > 0) {
      return "Positivo";
    } else if (x < 0) {
      return "Negativo";
    } else {
      return "Cero";
    }
}

/**
 * Verifica si un número es par o impar usando estructura anidada.
 * @param {*} x - El valor a verificar.
 * @returns {string} "Número par", "Número impar" o "No es un número" según corresponda.
 */
const verificarTipoYValor = x => {
    if (typeof x === 'number') {
      if (x % ___ === 0) {
        return "Número par";
      } else {
        return "Número impar";
      }
    } else {
      return "No es un número";
    }
}

/**
 * Evalúa una calificación numérica.
 * @param {number} nota - La calificación a evaluar.
 * @returns {string} "Excelente" si nota ___ 90, o "Necesita mejorar" en otro caso.
 */
const evaluarCalificacion = nota => {
    if (nota ___ 90) {
      return "Excelente";
    } else {
      return "Necesita mejorar";
    }
}

/**
 * Verifica si un número está dentro del rango 0 a 100.
 * @param {*} x - El valor a verificar.
 * @returns {string} "Dentro del rango" si x está entre 0 y 100, "Fuera del rango" o "No es un número" según corresponda.
 */
const verificarRango = x => {
    if (typeof x !== 'number') {
      return "No es un número";
    } else if (x ___ 0 && x <= 100) {
      return "Dentro del rango";
    } else {
      return "Fuera del rango";
    }
}

/**
 * Determina si un día es fin de semana.
 * @param {string} dia - El nombre del día.
 * @returns {boolean} true si es "Sábado" o "Domingo", false en caso contrario.
 */
const esFinDeSemana = dia => {
    if (dia === "Sábado" || dia === ___) {
      return true;
    } else {
      return false;
    }
}

/**
 * Determina la categoría de edad según el número dado.
 * @param {*} edad - La edad a clasificar.
 * @returns {string} "Edad no válida" si edad no es un número, o "Niño", "Adolescente", "Adulto" o "Adulto mayor" según corresponda.
 */
const determinarCategoriaEdad = edad => {
    if (typeof edad !== 'number') {
      return "Edad no válida";
    } else if (edad ___ 13) {
      return "Niño";
    } else if (edad >= 13 && edad < 20) {
      return "Adolescente";
    } else if (edad >= 20 && edad < 65) {
      return "Adulto";
    } else {
      return "Adulto mayor";
    }
}

/**
 * Valida si un nombre es correcto.
 * @param {*} nombre - El nombre a validar.
 * @returns {string} "Nombre inválido" si nombre no es una cadena o está vacío, "Nombre válido" en caso contrario.
 */
const validarNombre = nombre => {
    if (typeof nombre ___ 'string' || nombre.trim() === "") {
      return "Nombre inválido";
    } else {
      return "Nombre válido";
    }
}

/**
 * Evalúa si un valor es booleano y su estado.
 * @param {*} valor - El valor a evaluar.
 * @returns {string} "No es booleano" si valor no es booleano, "Es verdadero" o "Es falso" según corresponda.
 */
const evaluarBooleano = valor => {
    if (typeof valor !== 'boolean') {
      return "No es booleano";
    } else if (valor ___ true) {
      return "Es verdadero";
    } else {
      return "Es falso";
    }
}

/**
 * Analiza un número y describe si es positivo par, positivo impar o cero/negativo.
 * @param {*} num - El número a analizar.
 * @returns {string} Una descripción del número, o "No es un número" si no lo es.
 */
const analizarNumero = num => {
    if (typeof num !== 'number') {
      return "No es un número";
    } else {
      if (num ___ 0 && num % 2 ___ 0) {
        return "Número positivo y par";
      } else if (num > 0 && num % 2 !== 0) {
        return "Número positivo e impar";
      } else {
        return "Número cero o negativo";
      }
    }
}

export {
    doble,
    triple,
    cuadruple,
    quintuple,
    esTipoNumero,
    esTipoString,
    esTipoBoolean,
    esTipoNull,
    sumar,
    restar,
    multiplicar,
    dividir,
    esPar,
    saludar,
    elevarAlCuadrado,
    concatenar,
    mayusculas,
    esCadenaVacia,
    saludarSiString,
    clasificarNumero,
    verificarTipoYValor,
    evaluarCalificacion,
    verificarRango,
    esFinDeSemana,
    determinarCategoriaEdad,
    validarNombre,
    evaluarBooleano,
    analizarNumero
  }