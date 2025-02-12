import edadEnDias from './exercise-1.js'
import cualEsTuNombre from './exercise-2.js'
import { doble, triple, dobleMasTriple } from './exercise-3.js'
import checarTipo from './exercise-4.js'

describe('Ejercicios de escalares', () => {
  test('Edad en días', () => {
    expect(edadEnDias(1)).toBe(365)
    expect(edadEnDias(0)).toBe(0)
    expect(edadEnDias(10)).toBe(3650)
  })

  test('¿Cuál es tu nombre?', () => {
    expect(cualEsTuNombre('Juan', 'Pérez')).toBe('Hola, Juan Pérez!')
    expect(cualEsTuNombre('Ana', 'Gómez')).toBe('Hola, Ana Gómez!')
  })

  test('Funciones compuestas', () => {
    // Probamos la función "doble"
    expect(doble(2)).toBe(4)
    expect(doble(5)).toBe(10)

    // Probamos la función "triple"
    expect(triple(3)).toBe(9)
    expect(triple(7)).toBe(21)

    // Probamos la función "dobleMasTriple"
    expect(dobleMasTriple(2)).toBe(10)
    expect(dobleMasTriple(4)).toBe(20)
  })
})

// NUEVO BLOQUE DE PRUEBAS PARA EJERCICIO 4
describe('Ejercicio 4: Checar tipo y condicionales', () => {
  test('Checar tipos con checarTipo()', () => {
    // Caso 1: número
    expect(checarTipo(10, 'number')).toBe('La variable es number: true')

    // Caso 2: string
    expect(checarTipo('Hola', 'number')).toBe('La variable es number: false')

    // Caso 3: boolean
    expect(checarTipo(false, 'boolean')).toBe('La variable es boolean: true')

    // Caso 4: otro tipo
    expect(checarTipo(null, 'object')).toBe('La variable es object: true')
    expect(checarTipo(undefined, 'boolean')).toBe('La variable es boolean: false')
  })
})
