import { keys } from './keys';
import { values } from './values';
import { cloneDeep } from './cloneDeep';
import { isEqualDeep } from './isEqualDeep';

const obj = { name: 'Анна', scores: [5, 4, 5] };

const k = keys(obj);
console.log('keys:', k); // ['name', 'scores']

const v = values(obj);
console.log('values:', v); // ['Анна', [5, 4, 5]]

const copy = cloneDeep(obj);
copy.name = 'Борис';
copy.scores[0] = 3;
console.log('original после изменения копии:', obj);
// { name: 'Анна', scores: [5, 4, 5] } — не изменился

console.log('isEqualDeep(original, copy):', isEqualDeep(obj, copy)); // false
console.log('isEqualDeep(original, cloneDeep(original)):', isEqualDeep(obj, cloneDeep(obj))); // true