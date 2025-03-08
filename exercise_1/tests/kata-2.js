// 1. Array.prototype.at()
// Ejemplo:
const arrayAt = [5, 12, 8, 130, 44];
console.log("Array.at(2):", arrayAt.at(2));       // Expected output: 8
console.log("Array.at(-2):", arrayAt.at(-2));       // Expected output: 130
// TODO: Crea una función que reciba una función que retorne un índice y use array.at() para obtener el elemento.


// 2. Array.prototype.concat()
// Ejemplo (método que NO muta el array):
let arrayConcat1 = [1, 2];
let arrayConcat2 = [3, 4];
const concatenated = arrayConcat1.concat(arrayConcat2);
console.log("Array.concat:", concatenated);        // Expected output: [1, 2, 3, 4]
// TODO: Crea una función que reciba dos arrays y retorne su concatenación usando concat.


// 3. Array.prototype.copyWithin()
// Ejemplo (método que muta el array):
const arrayCopyWithin = [1, 2, 3, 4, 5];
console.log("Antes de copyWithin:", arrayCopyWithin);
arrayCopyWithin.copyWithin(0, 3, 5);
console.log("Después de copyWithin(0,3,5):", arrayCopyWithin);
// Expected output: [4, 5, 3, 4, 5]
// TODO: Crea una función que reciba un array, target, start y end, aplique copyWithin y retorne el array mutado.


// 4. Array.prototype.every()
// Ejemplo (método que NO muta el array):
const arrayEvery = [2, 4, 6, 8];
const allEven = arrayEvery.every(num => num % 2 === 0);
console.log("Array.every (todos son pares):", allEven);  // Expected output: true
// TODO: Crea una función que reciba un array y una función de condición, use every para verificar si todos cumplen la condición y retorne el booleano.


// 5. Array.prototype.fill()
// Ejemplo (método que muta el array):
const arrayFill = [1, 2, 3, 4, 5];
const filled = arrayFill.fill(0, 2, 4);
console.log("Array.fill(0,2,4):", filled);       // Expected output: [1, 2, 0, 0, 5]
// TODO: Crea una función que reciba un array, un valor y opcionalmente start y end, aplique fill y retorne el array modificado.


// 6. Array.prototype.filter()
// Ejemplo (método que NO muta el array):
const arrayFilter = [1, 2, 3, 4, 5];
const filtered = arrayFilter.filter(num => num > 2);
console.log("Array.filter(num > 2):", filtered);   // Expected output: [3, 4, 5]
// TODO: Crea una función que reciba un array y una condición, y retorne un nuevo array filtrado usando filter.


// 7. Array.prototype.find()
// Ejemplo (método que NO muta el array):
const arrayFind = [1, 2, 3, 4, 5];
const found = arrayFind.find(num => num > 3);
console.log("Array.find(num > 3):", found);          // Expected output: 4
// TODO: Crea una función que reciba un array y una condición, y retorne el primer elemento que cumpla la condición usando find.


// 8. Array.prototype.findIndex()
// Ejemplo (método que NO muta el array):
const arrayFindIndex = [1, 2, 3, 4, 5];
const indexFound = arrayFindIndex.findIndex(num => num > 3);
console.log("Array.findIndex(num > 3):", indexFound); // Expected output: 3
// TODO: Crea una función que reciba un array y una condición, y retorne el índice del primer elemento que cumpla la condición usando findIndex.


// 9. Array.prototype.flat()
// Ejemplo (método que NO muta el array):
const arrayFlat = [1, 2, [3, 4], [5, [6]]];
const flattened = arrayFlat.flat();
console.log("Array.flat():", flattened);         // Expected output: [1, 2, 3, 4, 5, [6]]
// TODO: Crea una función que reciba un array y un nivel de profundidad, aplique flat y retorne el array resultante.


// 10. Array.prototype.flatMap()
// Ejemplo (método que NO muta el array):
const arrayFlatMap = [1, 2, 3];
const flatMapped = arrayFlatMap.flatMap(num => [num, num * 2]);
console.log("Array.flatMap():", flatMapped);       // Expected output: [1, 2, 2, 4, 3, 6]
// TODO: Crea una función que reciba un array y una función, aplique flatMap y retorne el array resultante.


// 11. Array.prototype.forEach()
// Ejemplo (método que NO muta el array):
const arrayForEach = [1, 2, 3, 4];
let sumaForEach = 0;
arrayForEach.forEach(num => {
  sumaForEach += num;
});
console.log("Array.forEach acumulado:", sumaForEach);  // Expected output: 10
// TODO: Crea una función que reciba un array y use forEach para sumar todos los elementos y retorne la suma.


// 12. Array.prototype.includes()
// Ejemplo (método que NO muta el array):
const arrayIncludes = [1, 2, 3, 4];
const includesThree = arrayIncludes.includes(3);
console.log("Array.includes(3):", includesThree);      // Expected output: true
// TODO: Crea una función que reciba un array y un elemento, y retorne true si el array incluye el elemento o false en caso contrario.


// 13. Array.prototype.indexOf()
// Ejemplo (método que NO muta el array):
const arrayIndexOf = [1, 2, 3, 4, 3];
const indexOfThree = arrayIndexOf.indexOf(3);
console.log("Array.indexOf(3):", indexOfThree);        // Expected output: 2
// TODO: Crea una función que reciba un array y un elemento, y retorne el índice de la primera aparición del elemento usando indexOf.


// 14. Array.prototype.join()
// Ejemplo (método que NO muta el array):
const arrayJoin = ["Hola", "mundo"];
const joined = arrayJoin.join(" ");
console.log("Array.join(' '):", joined);              // Expected output: "Hola mundo"
// TODO: Crea una función que reciba un array de cadenas y un separador, y retorne la cadena resultante usando join.


// 15. Array.prototype.lastIndexOf()
// Ejemplo (método que NO muta el array):
const arrayLastIndexOf = [1, 2, 3, 4, 3];
const lastIndexOfThree = arrayLastIndexOf.lastIndexOf(3);
console.log("Array.lastIndexOf(3):", lastIndexOfThree);  // Expected output: 4
// TODO: Crea una función que reciba un array y un elemento, y retorne el índice de la última aparición del elemento usando lastIndexOf.


// 16. Array.prototype.pop()
// Ejemplo (método que muta el array):
const arrayPop = [1, 2, 3, 4];
const popped = arrayPop.pop();
console.log("Elemento removido con pop:", popped);    // Expected output: 4
console.log("Array después de pop:", arrayPop);         // Expected output: [1, 2, 3]
// TODO: Crea una función que reciba un array, use pop para remover el último elemento y retorne ese elemento.


// 17. Array.prototype.push()
// Ejemplo (método que muta el array):
const arrayPush = [1, 2, 3];
console.log("Antes de push:", arrayPush);
arrayPush.push(4);
console.log("Después de push:", arrayPush);           // Expected output: [1, 2, 3, 4]
// TODO: Crea una función que reciba un array y un elemento, use push para agregarlo y retorne el array mutado.


// 18. Array.prototype.reduce()
// Ejemplo (método que NO muta el array):
const arrayReduce = [1, 2, 3, 4];
const reduced = arrayReduce.reduce((acc, curr) => acc + curr, 0);
console.log("Array.reduce (suma):", reduced);         // Expected output: 10
// TODO: Crea una función que reciba un array y use reduce para sumar todos los elementos y retorne la suma.


// 19. Array.prototype.reverse()
// Ejemplo (método que muta el array):
const arrayReverse = [1, 2, 3, 4];
console.log("Antes de reverse:", arrayReverse);
arrayReverse.reverse();
console.log("Array.reverse:", arrayReverse);          // Expected output: [4, 3, 2, 1]
// TODO: Crea una función que reciba un array, use reverse para invertirlo y retorne el array invertido.


// 20. Array.prototype.slice()
// Ejemplo (método que NO muta el array):
const arraySlice = [1, 2, 3, 4, 5];
const sliced = arraySlice.slice(1, 4);
console.log("Array.slice(1, 4):", sliced);            // Expected output: [2, 3, 4]
// TODO: Crea una función que reciba un array y dos índices, y retorne el subarray usando slice.


// 21. Array.prototype.some()
// Ejemplo (método que NO muta el array):
const arraySome = [1, 2, 3, 4];
const someGreaterThan3 = arraySome.some(num => num > 3);
console.log("Array.some (algún número > 3):", someGreaterThan3);  // Expected output: true
// TODO: Crea una función que reciba un array y una condición, y retorne true si al menos un elemento cumple la condición usando some.


// 22. Array.prototype.sort()
// Ejemplo (método que muta el array):
const arraySort = [3, 1, 4, 2];
arraySort.sort((a, b) => a - b);
console.log("Array.sort:", arraySort);              // Expected output: [1, 2, 3, 4]
// TODO: Crea una función que reciba un array y retorne el array ordenado (puedes asumir que el array contiene números).
