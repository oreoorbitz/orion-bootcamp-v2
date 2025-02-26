import {
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
} from './kata-1.js'

describe('Funciones Matemáticas Básicas', () => {
    test('doble', () => {
        expect(doble(2)).toBe(4)
    })

    test('triple', () => {
        expect(triple(3)).toBe(9)
    })

    test('cuadruple', () => {
        expect(cuadruple(2)).toBe(8)
    })

    test('quintuple', () => {
        expect(quintuple(2)).toBe(10)
    })

    test('sumar', () => {
        expect(sumar(2, 3)).toBe(5)
    })

    test('restar', () => {
        expect(restar(5, 2)).toBe(3)
    })

    test('multiplicar', () => {
        expect(multiplicar(3, 4)).toBe(12)
    })

    test('dividir', () => {
        expect(dividir(10, 2)).toBe(5)
    })

    test('elevarAlCuadrado', () => {
        expect(elevarAlCuadrado(5)).toBe(25)
    })
})

describe('Funciones de Tipo', () => {
    test('esTipoNumero', () => {
        expect(esTipoNumero(123)).toBe(true)
        expect(esTipoNumero('123')).toBe(false)
    })

    test('esTipoString', () => {
        expect(esTipoString('hola')).toBe(true)
        expect(esTipoString(123)).toBe(false)
    })

    test('esTipoBoolean', () => {
        expect(esTipoBoolean(true)).toBe(true)
        expect(esTipoBoolean(0)).toBe(false)
    })

    test('esTipoNull', () => {
        expect(esTipoNull(null)).toBe(true)
        expect(esTipoNull(undefined)).toBe(false)
    })
})

describe('Funciones de String y Concatenación', () => {
    test('saludar', () => {
        expect(saludar('Mundo')).toBe('Hola, Mundo')
    })

    test('concatenar', () => {
        expect(concatenar('Hola', 'Mundo')).toBe('Hola Mundo')
    })

    test('mayusculas', () => {
        expect(mayusculas('hola')).toBe('HOLA')
    })

    test('esCadenaVacia', () => {
        expect(esCadenaVacia('   ')).toBe(true)
        expect(esCadenaVacia('texto')).toBe(false)
    })

    test('saludarSiString', () => {
        expect(saludarSiString('Pedro')).toBe('Hola, Pedro')
        expect(saludarSiString(123)).toBe('No es una cadena')
    })
})

describe('Estructuras de Control (if-else)', () => {
    test('clasificarNumero', () => {
        expect(clasificarNumero(10)).toBe('Positivo')
        expect(clasificarNumero(-5)).toBe('Negativo')
        expect(clasificarNumero(0)).toBe('Cero')
        expect(clasificarNumero('10')).toBe('No es un número')
    })

    test('verificarTipoYValor', () => {
        expect(verificarTipoYValor(4)).toBe('Número par')
        expect(verificarTipoYValor(3)).toBe('Número impar')
        expect(verificarTipoYValor('3')).toBe('No es un número')
    })

    test('evaluarCalificacion', () => {
        expect(evaluarCalificacion(95)).toBe('Excelente')
        expect(evaluarCalificacion(80)).toBe('Necesita mejorar')
    })

    test('verificarRango', () => {
        expect(verificarRango(50)).toBe('Dentro del rango')
        expect(verificarRango(150)).toBe('Fuera del rango')
        expect(verificarRango('50')).toBe('No es un número')
    })

    test('esFinDeSemana', () => {
        expect(esFinDeSemana('Sábado')).toBe(true)
        expect(esFinDeSemana('Lunes')).toBe(false)
    })

    test('determinarCategoriaEdad', () => {
        expect(determinarCategoriaEdad(10)).toBe('Niño')
        expect(determinarCategoriaEdad(15)).toBe('Adolescente')
        expect(determinarCategoriaEdad(30)).toBe('Adulto')
        expect(determinarCategoriaEdad(70)).toBe('Adulto mayor')
        expect(determinarCategoriaEdad("30")).toBe('Edad no válida')
    })

    test('validarNombre', () => {
        expect(validarNombre('Juan')).toBe('Nombre válido')
        expect(validarNombre('   ')).toBe('Nombre inválido')
        expect(validarNombre(123)).toBe('Nombre inválido')
    })

    test('evaluarBooleano', () => {
        expect(evaluarBooleano(true)).toBe('Es verdadero')
        expect(evaluarBooleano(false)).toBe('Es falso')
        expect(evaluarBooleano("true")).toBe('No es booleano')
    })

    test('analizarNumero', () => {
        expect(analizarNumero(4)).toBe('Número positivo y par')
        expect(analizarNumero(3)).toBe('Número positivo e impar')
        expect(analizarNumero(0)).toBe('Número cero o negativo')
        expect(analizarNumero("4")).toBe('No es un número')
    })

    test('esPar', () => {
        expect(esPar(2)).toBe(true)
        expect(esPar(3)).toBe(false)
        expect(esPar(0)).toBe(true)
        expect(esPar(1)).toBe(false)
    })

})
