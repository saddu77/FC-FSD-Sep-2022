//Object.assign() in ES6
//Object.assign(target,...sources)
let widget = {
    color: 'red'
};

let clonedWidget = Object.assign({},widget);
console.log(clonedWidget);