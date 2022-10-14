// let setColor = function(color){
//     return {value:color}
// };
let setColor = color => ({ value:color });

let bgColor = setColor("Blue");
console.log(bgColor.value);

