/**
 * EJERCICIO 7: CREAR UN ÁRBOL SINTÁCTICO DE UNA VERSIÓN EN ESPAÑOL DE JAVASCRIPT
 *
 * Instrucciones:
 *   1. Se proporciona la siguiente cadena de ejemplo (fuera de un comentario):
 *
 *         "Si (x > 10) { imprimir('Mayor'); } Sino { imprimir('Menor o igual'); }"
 *
 *   2. Declara un objeto llamado "arbolSintaxis" que represente el árbol sintáctico de esa cadena.
 *   3. El objeto debe tener la siguiente estructura, donde cada valor es una cadena vacía:
 *
 *      {
 *         tipo: "",
 *         condición: "",
 *         cuerpo: [
 *           {
 *             tipo: "",
 *             función: "",
 *             argumentos: [""]
 *           }
 *         ],
 *         alternativo: {
 *           tipo: "",
 *           cuerpo: [
 *             {
 *               tipo: "",
 *               función: "",
 *               argumentos: [""]
 *             }
 *           ]
 *         }
 *      }
 *
 *   4. Usa este objeto para practicar la declaración y estructuración de objetos en JavaScript.
 */

// Cadena de ejemplo en español de JavaScript:
"Si (x > 10) { imprimir('Mayor'); } Sino { imprimir('Menor o igual'); }"

// Objeto con estructura precisa, pero con valores vacíos:
const arbolSintaxis = {
  tipo: "",
  condición: "",
  cuerpo: [
    {
      tipo: "",
      función: "",
      argumentos: [""]
    }
  ],
  alternativo: {
    tipo: "",
    cuerpo: [
      {
        tipo: "",
        función: "",
        argumentos: [""]
      }
    ]
  }
};

console.log("Árbol de sintaxis:", arbolSintaxis);