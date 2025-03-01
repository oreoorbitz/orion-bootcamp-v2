import edadEnDias from './exercise-1.js'
import cualEsTuNombre from './exercise-2.js'
import { doble, triple, dobleMasTriple } from './exercise-3.js'
import checarTipo from './exercise-4.js'
import generarResumen from './exercise-6.js'
import { convertirCentsAMoneda } from './exercise-5.js'
import manipulaArray from './exercise-8';
import sumarElementos from './exercise-9.js'

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

// NUEVO BLOQUE DE PRUEBAS PARA EJERCICIO 5: Conversión de Centavos a Formato Monetario
describe('Ejercicio 5: Conversión de Centavos a Formato Monetario', () => {
  test('Convierte 1234 centavos a USD correctamente', () => {
    expect(convertirCentsAMoneda(1234, 'USD')).toBe('$12.34')
  })

  test('Convierte 50 centavos a EUR correctamente', () => {
    expect(convertirCentsAMoneda(50, 'EUR')).toBe('€0.50')
  })

  test('Maneja centavos en 0 correctamente', () => {
    expect(convertirCentsAMoneda(0, 'USD')).toBe('$0.00')
  })

  test('Retorna "Valor inválido" para centavos negativos', () => {
    expect(convertirCentsAMoneda(-100, 'GBP')).toBe('Valor inválido')
  })

  test('Retorna "Código de moneda inválido" para un código de moneda desconocido', () => {
    expect(convertirCentsAMoneda(200, 'ABC')).toBe('Código de moneda inválido')
  })
})

// NUEVO BLOQUE DE PRUEBAS PARA EJERCICIO 6: Generar Resumen de Usuario y Transacción
describe('Ejercicio 6: Generar Resumen de Usuario y Transacción', () => {
  test('Genera resumen correctamente cuando todos los datos son válidos y la compra supera $10.00', () => {
    // Para ('Juan', 'Pérez', 10, 1234, 'USD'):
    // - edadEnDias: 10 * 365 = 3650 días.
    // - convertirCentsAMoneda: 1234 centavos -> "$12.34".
    // - Compra > 10, por lo tanto se añade "¡Gran compra!".
    expect(generarResumen('Juan', 'Pérez', 10, 1234, 'USD')).toBe(
      "Hola, Juan Pérez! Tienes 3650 días de vida. Tu compra de $12.34 ha sido registrada. ¡Gran compra!"
    )
  })

  test('Genera resumen correctamente cuando la compra no supera $10.00', () => {
    // Para ('Ana', 'Gómez', 8, 500, 'EUR'):
    // - edadEnDias: 8 * 365 = 2920 días.
    // - convertirCentsAMoneda: 500 centavos -> "€5.00".
    // - Compra no supera 10, por lo tanto no se añade "¡Gran compra!".
    expect(generarResumen('Ana', 'Gómez', 8, 500, 'EUR')).toBe(
      "Hola, Ana Gómez! Tienes 2920 días de vida. Tu compra de €5.00 ha sido registrada."
    )
  })

  test('Retorna "Datos inválidos" si algún parámetro es de tipo incorrecto', () => {
    // Primer parámetro inválido (número en vez de string)
    expect(generarResumen(123, 'Pérez', 10, 1234, 'USD')).toBe("Datos inválidos")
  })
})

describe('Ejercicio 8: Crear y Manipular ARRAY', () => {
  test('Retorna "b" cuando el array es ["a", "b", "c"]', () => {
    expect(manipulaArray()).toBe("b");
  });

  test('El resultado debe ser de tipo string o number', () => {
    const res = manipulaArray();
    expect(typeof res === "string" || typeof res === "number").toBe(true);
  });
});

describe('Ejercicio 9: Sumar Elementos de un Array usando un For Loop', () => {
  test('Suma correctamente los elementos de un array', () => {
    expect(sumarElementos([1, 2, 3, 4])).toBe(10);
    expect(sumarElementos([5, 5, 5])).toBe(15);
  });
  
  test('Retorna "Datos inválidos" si el parámetro no es un array', () => {
    expect(sumarElementos("no es array")).toBe("Datos inválidos");
  });
  
  test('Retorna "Datos inválidos" si algún elemento no es un número', () => {
    expect(sumarElementos([1, "2", 3])).toBe("Datos inválidos");
  });
});