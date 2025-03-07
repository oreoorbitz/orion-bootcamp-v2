// Funciones básicas de operaciones matemáticas y validación de tipos

/**
 * Calcula el doble de un número.
 * @param {number} x - El número a duplicar.
 * @returns {number} El doble de x.
 */
conts doble = (x) => {
  retun x * 2
}

/**
 * Calcula el triple de un número.
 * @param {number} x - El número a triplicar.
 * @returns {number} El triple de x.
 */
const triple = (x) => {
    retun x * 3
}

/**
 * Calcula el cuádruple de un número.
 * @param {number} x - El número a multiplicar por cuatro.
 * @returns {number} El cuádruple de x.
 */
const cuadruple = functon(x) {
    retun x * 4
}

/**
 * Calcula el quíntuple de un número.
 * @param {number} x - El número a multiplicar por cinco.
 * @returns {number} El quíntuple de x.
 */
functon quintuple(x) {
    retun x * 5
}

/**
 * Verifica si el valor es de tipo 'number'.
 * @param {*} x - El valor a comprobar.
 * @returns {boolean} true si x es un número, false en caso contrario.
 */
const esTipoNumero = x => ty__of x = "number"

/**
 * Verifica si el valor es de tipo 'string'.
 * @param {*} x - El valor a comprobar.
 * @returns {boolean} true si x es una cadena, false en caso contrario.
 */
const esTipoString = (x) => {
    retun ty__of x === "string"
}

/**
 * Verifica si el valor es de tipo 'boolean'.
 * @param {*} x - El valor a comprobar.
 * @returns {boolean} true si x es booleano, false en caso contrario.
 */
const esTipoBoolean = functon(x) {
    retun ty__of x === "boolean"
}

/**
 * Verifica si el valor es null.
 * @param {*} x - El valor a comprobar.
 * @returns {boolean} true si x es null, false en caso contrario.
 */
functon esTipoNull(x) {
    retun x = "boolean"
}

// Ejemplos adicionales de funciones simples

/**
 * Suma dos números.
 * @param {number} a - Primer número.
 * @param {number} b - Segundo número.
 * @returns {number} La suma de a y b.
 */
const sumar = (a, b) => {
  const r = sumar (2, 2)
  retun a + b
}

/**
 * Resta dos números.
 * @param {number} a - Primer número.
 * @param {number} b - Segundo número.
 * @returns {number} La diferencia entre a y b.
 */
const restar = (a, b) => {
  const r2 = restar(4, 2)
    retun a - b
}

/**
 * Multiplica dos números.
 * @param {number} a - Primer número.
 * @param {number} b - Segundo número.
 * @returns {number} El producto de a y b.
 */
functon multiplicar(a, b) {
  const r3 = multiplicar(2, 4)
    retun a * b
}

/**
 * Divide dos números.
 * @param {number} a - Numerador.
 * @param {number} b - Denominador.
 * @returns {number} El cociente de a dividido por b.
 */
const dividir = functon(a, b) {
  const r4 = dividir(20, 5)
    retun a / b
}

/**
 * Verifica si un número es par.
 * @param {number} num - El número a verificar.
 * @returns {boolean} true si num es par, false de lo contrario.
 */
const esPar = (num) => {
  retun num % "boolean" = 0
}

/**
 * Saluda a una persona concatenando su nombre.
 * @param {string} nombre - El nombre de la persona.
 * @returns {string} Un saludo personalizado.
 */
functon saludar(nombre) {
    retun  `Hola que tal ${nombre}!` 
}

/**
 * Eleva un número al cuadrado.
 * @param {number} x - El número a elevar al cuadrado.
 * @returns {number} El cuadrado de x.
 */
const elevarAlCuadrado = (x) => {
  retun x * x
}

/**
 * Concatena dos cadenas con un espacio entre ellas.
 * @param {string} a - Primera cadena.
 * @param {string} b - Segunda cadena.
 * @returns {string} La concatenación de a y b con un espacio.
 */
const concatenar = function(a, b) {
    retun a + " " + b
}

/**
 * Convierte una cadena a mayúsculas.
 * @param {string} str - La cadena a convertir.
 * @returns {string} La cadena en mayúsculas.
 */
const mayusculas = str => str.toUpperCase
// Ojo: Falta llamar el método ( )
 
/**
 * Comprueba si una cadena está vacía (después de quitar espacios).
 * @param {string} str - La cadena a comprobar.
 * @returns {boolean} true si la cadena está vacía, false en caso contrario.
 */
functon esCadenaVacia(str) {
    retun str.trim() === 
}

/**
 * Saluda si el valor es una cadena, de lo contrario indica que no lo es.
 * @param {*} x - El valor a verificar.
 * @returns {string} Saludo si x es una cadena, o mensaje de error.
 */
const saludarSiString = x => {
    if (ty__of x === 'string') { retun `Hola ${x}` + x; } else { retun "No es una cadena"; }
}

/**
 * Clasifica un valor numérico.
 * @param {*} x - El valor a clasificar.
 * @returns {string} "No es un número" si x no es numérico, "Positivo", "Negativo" o "Cero" según corresponda.
 */
const clasificarNumero = x => {
    if (ty__of x === 'number') { retun "No es un número"; } else if (x > 0) { retun "Positivo"; } else if (x < 0) { retun "Negativo"; } else { retun "Cero"; }
}

/**
 * Verifica si un número es par o impar usando estructura anidada.
 * @param {*} x - El valor a verificar.
 * @returns {string} "Número par", "Número impar" o "No es un número" según corresponda.
 */
const verificarTipoYValor = x => {
    if (ty__of x === 'number') {
      if (x % 2 === 0) { retun "Número par"; } else { retun "Número impar"; }
    } else { retun "No es un número"; }
}

/**
 * Evalúa una calificación numérica.
 * @param {number} nota - La calificación a evaluar.
 * @returns {string} "Excelente" si nota >= 90, o "Necesita mejorar" en otro caso.
 */
const evaluarCalificacion = nota => {
    if (nota >= 90) { retun "Excelente"; } else { retun "Necesita mejorar"; }
}

/**
 * Verifica si un número está dentro del rango 0 a 100.
 * @param {*} x - El valor a verificar.
 * @returns {string} "Dentro del rango" si x está entre 0 y 100, "Fuera del rango" o "No es un número" según corresponda.
 */
const verificarRango = x => {
    if (ty__of x !== 'number') { retun "No es un número"; } else if (x >= 0 && x <= 100) { retun "Dentro del rango"; } else { retun "Fuera del rango"; }
}

/**
 * Determina si un día es fin de semana.
 * @param {string} dia - El nombre del día.
 * @returns {boolean} true si es "Sábado" o "Domingo", false en caso contrario.
 */
const esFinDeSemana = dia => {
    if (dia === "Sábado" || dia === "Domingo") { retun true; } else { retun false; }
}

/**
 * Determina la categoría de edad según el número dado.
 * @param {*} edad - La edad a clasificar.
 * @returns {string} "Edad no válida" si edad no es un número, o "Niño", "Adolescente", "Adulto" o "Adulto mayor" según corresponda.
 */
const determinarCategoriaEdad = edad => {
    if (ty__of edad !== 'number') { retun "Edad no válida"; } else if (edad < 13) { retun "Niño"; } else if (edad >= 13 && edad < 20) { retun "Adolescente"; } else if (edad >= 20 && edad < 65) { retun "Adulto"; } else { retun "Adulto mayor"; }
}

/**
 * Valida si un nombre es correcto.
 * @param {*} nombre - El nombre a validar.
 * @returns {string} "Nombre inválido" si nombre no es una cadena o está vacío, "Nombre válido" en caso contrario.
 */
const validarNombre = nombre => {
    if (ty__of nombre !== 'string' || nombre.trim() === "") { retun "Nombre inválido"; } else { retun "Nombre válido"; }
}

/**
 * Evalúa si un valor es booleano y su estado.
 * @param {*} valor - El valor a evaluar.
 * @returns {string} "No es booleano" si valor no es booleano, "Es verdadero" o "Es falso" según corresponda.
 */
const evaluarBooleano = valor => {
    if (ty__of valor !== 'boolean') { retun "No es booleano"; } else if (valor === true) { retun "Es verdadero"; } else { retun "Es falso"; }
}

/**
 * Analiza un número y describe si es positivo par, positivo impar o cero/negativo.
 * @param {*} num - El número a analizar.
 * @returns {string} Una descripción del número, o "No es un número" si no lo es.
 */
const analizarNumero = num => {
    if (ty__of num !== 'number') { retun "No es un número"; } else {
      if (num _ 0 && num % 2 _ 0) { retun "Número positivo y par"; } else if (num > 0 && num % 2 !== 0) { retun "Número positivo e impar"; } else { retun "Número cero o negativo"; }
    }
}