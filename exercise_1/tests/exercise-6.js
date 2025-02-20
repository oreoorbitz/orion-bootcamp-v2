/**
 * EJERCICIO 6: AGRUPAR PRODUCTOS Y VARIANTES
 *
 * Instrucciones:
 *   1. Se te proporcionan 3 objetos de producto: productOne, productTwo y productThree. Cada uno tiene las propiedades:
 *         - id: número identificador del producto.
 *         - name: nombre del producto.
 *
 *   2. Se te proporcionan 5 objetos de variante: variantOne, variantTwo, variantThree, variantFour y variantFive.
 *      Cada variante tiene las propiedades:
 *         - id: número identificador de la variante.
 *         - name: nombre de la variante.
 *         - productId: número que indica a qué producto pertenece la variante.
 *
 *   3. Crea una función llamada "agruparProductos" que no reciba parámetros.
 *
 *   4. La función debe:
 *         a. Crear un array que contenga productOne, productTwo y productThree.
 *         b. Para cada producto del array, filtra las variantes (variantOne, variantTwo, variantThree, variantFour y variantFive)
 *            para obtener aquellas cuyo "productId" sea igual al "id" del producto.
 *         c. Asigna el array resultante a una nueva propiedad llamada "variants" en el objeto producto.
 *         d. Retorna el array de productos actualizado.
 *
 *   Ejemplo esperado:
 *       - productOne (id: 1) debe tener en su propiedad "variants" los objetos variantOne y variantTwo.
 *       - productTwo (id: 2) debe tener en "variants" el objeto variantThree.
 *       - productThree (id: 3) debe tener en "variants" los objetos variantFour y variantFive.
 *
 *   Nota: Se te provee la definición de los productos y variantes. Tu función debe utilizar estas variables
 *         para construir y retornar el resultado final.
 */

const productOne = { id: 1, name: "Producto Uno" }
const productTwo = { id: 2, name: "Producto Dos" }
const productThree = { id: 3, name: "Producto Tres" }

const variantOne = { id: 1, name: "Variante Uno", productId: 1 }
const variantTwo = { id: 2, name: "Variante Dos", productId: 1 }
const variantThree = { id: 3, name: "Variante Tres", productId: 2 }
const variantFour = { id: 4, name: "Variante Cuatro", productId: 3 }
const variantFive = { id: 5, name: "Variante Cinco", productId: 3 }

/**
 * Crea una función llamada "agruparProductos" que agrupe los productos y asocie sus variantes.
 *
 * Pasos a seguir:
 *   1. Crea un array que contenga productOne, productTwo y productThree.
 *   2. Para cada producto del array, filtra las variantes (variantOne, variantTwo, variantThree, variantFour y variantFive)
 *      para obtener aquellas cuyo "productId" sea igual al "id" del producto.
 *   3. Asigna el array resultante a una nueva propiedad llamada "variants" en el objeto producto.
 *   4. Retorna el array de productos actualizado.
 */
const agruparProductos = () => {
  // TODO: Implementar la función

  // 1. Crear un array con los 3 productos.
  // 2. Para cada producto, obtener las variantes correspondientes y asignarlas a la propiedad "variants".
  // 3. Retornar el array de productos.
}

export { agruparProductos, productOne, productTwo, productThree, variantOne, variantTwo, variantThree, variantFour, variantFive }
