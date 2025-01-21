import edadEnDias from './exercise-1.js'
import cualEsTuNombre from './exercise-2.js'
import numeroColorido from './exercise-3.js'

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

  test('Número colorido', () => {
    expect(numeroColorido(324)).toBe(true) // Productos: 3, 2, 4, 6, 8, 24
    expect(numeroColorido(236)).toBe(false) // Productos: 2, 3, 6, 6, 12, 36 (6 se repite)
    expect(() => numeroColorido(1000)).toThrow('El número debe estar entre 0 y 999')
  })
})
