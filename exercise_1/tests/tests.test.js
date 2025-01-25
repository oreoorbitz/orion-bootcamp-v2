import edadEnDias from './exercise-1.js'
import cualEsTuNombre from './exercise-2.js'

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

    // Probamos la función "dobleMasTriple" que usa las dos anteriores
    // Ejemplo con 2: doble(2) = 4, triple(2) = 6 => 4 + 6 = 10
    expect(dobleMasTriple(2)).toBe(10)

    // Ejemplo con 4: doble(4) = 8, triple(4) = 12 => 8 + 12 = 20
    expect(dobleMasTriple(4)).toBe(20)
  })


})
