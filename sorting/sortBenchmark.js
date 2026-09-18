import { indexOf } from '../arrays/indexOf.js';
import { bubbleSort } from './bubbleSort.js';
import { insertionSort } from './insertionSort.js';
import { selectionSort } from './selectionSort.js';
import { quickSort } from './quickSort.js';
import { binarySearch } from './binarySearch.js';

const SIZES = [100, 500, 1000, 2000, 4000, 8000];
const RUNS = 5;

function randomArray(size) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * size));
  }
  return arr;
}

function measure(fn, input) {
  fn(input); // прогрев — первый вызов не замеряем
  let best = Infinity;
  for (let i = 0; i < RUNS; i++) {
    const start = performance.now();
    fn(input);
    const elapsed = performance.now() - start;
    if (elapsed < best) best = elapsed;
  }
  return best;
}

const algorithms = [
  { name: 'bubbleSort', fn: bubbleSort },
  { name: 'insertionSort', fn: insertionSort },
  { name: 'selectionSort', fn: selectionSort },
  { name: 'quickSort', fn: quickSort },
];

const sizesCount = SIZES.length;
const algorithmsCount = algorithms.length;

for (let s = 0; s < sizesCount; s++) {
  const input = randomArray(SIZES[s]);
  let line = 'n=' + SIZES[s];
  for (let a = 0; a < algorithmsCount; a++) {
    const ms = measure(algorithms[a].fn, input);
    line = line + '  |  ' + algorithms[a].name + ': ' + Math.round(ms * 100) / 100 + 'мс';
  }
  console.log(line);
}

// Поиск: линейный (indexOf) против бинарного (binarySearch)
const searchSize = 1000000;
const sorted = [];
for (let i = 0; i < searchSize; i++) sorted.push(i); // уже отсортированный массив
const target = searchSize - 1; // ищем последний элемент — худший случай для перебора

const linearSearch = (arr) => indexOf(arr, target);
const binarySearchForTarget = (arr) => binarySearch(arr, target);

const linearMs = measure(linearSearch, sorted);
const binaryMs = measure(binarySearchForTarget, sorted);

console.log('--- Поиск в массиве из ' + searchSize + ' элементов (ищем ' + target + ') ---');
console.log('indexOf (перебор): ' + Math.round(linearMs * 100) / 100 + 'мс');
console.log('binarySearch: ' + Math.round(binaryMs * 100) / 100 + 'мс');



// БЕЗ ИСПОЛЬЗОВАНИЯ ВСТРОЕННЫХ МЕТОДОВ: 

// • n=100 — bubbleSort: 0.12, insertionSort: 0.04, selectionSort: 0.06, quickSort: 0.22
// • n=500 — bubbleSort: 0.76, insertionSort: 0.26, selectionSort: 0.49, quickSort: 1.32
// • n=1000 — bubbleSort: 1.37, insertionSort: 0.54, selectionSort: 1.06, quickSort: 3.1
// • n=2000 — bubbleSort: 5.6, insertionSort: 2.33, selectionSort: 5.5, quickSort: 15.35
// • n=4000 — bubbleSort: 17.42, insertionSort: 8.25, selectionSort: 15.96, quickSort: 44.31
// • n=8000 — bubbleSort: 86.77, insertionSort: 35.63, selectionSort: 64.48, quickSort: 300.84

// Поиск в массиве из 100000 элементов (ищем 99999)
// indexOf (перебор): 0.3
// binarySearch: 0.16



// С ИСПОЛЬЗОВАНИЕМ ВСТРОЕННЫХ МЕТОДОВ:

// • n=100 — bubbleSort: 0.11, insertionSort: 0.04, selectionSort: 0.06, quickSort: 0.07
// • n=500 — bubbleSort: 0.64, insertionSort: 0.23, selectionSort: 0.47, quickSort: 0.27
// • n=1000 — bubbleSort: 1.29, insertionSort: 0.65, selectionSort: 1.03, quickSort: 0.62
// • n=2000 — bubbleSort: 4.85, insertionSort: 2.04, selectionSort: 4.65, quickSort: 1.42
// • n=4000 — bubbleSort: 21.3, insertionSort: 8.39, selectionSort: 15.89, quickSort: 2.5
// • n=8000 — bubbleSort: 127.28, insertionSort: 32.96, selectionSort: 91.1, quickSort: 2.16

// Поиск в массиве из 1000000 элементов (ищем 999999)
// indexOf (перебор): 2.6
// binarySearch: 0