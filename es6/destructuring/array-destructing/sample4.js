function getItems(){
    return[10,20];
}

let items = getItems();
console.log(items[2]);

let thirdItem = items[2] != undefined ? items[2]:0;
console.log(thirdItem);