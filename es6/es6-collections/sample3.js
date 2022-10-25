let chars = new Set(['a','a','b','c','c']);

console.log(chars);
console.log(typeof(chars));
console.log(chars instanceof Set);
console.log(chars.size);

chars.add('d');
console.log(chars);

chars.add('e')
     .add('f');

console.log(chars);

let exist = chars.has('a');
console.log(exist);

let isexist = chars.has('z');
console.log(isexist);

chars.delete('f');
console.log(chars);

chars.clear();
console.log(chars);
