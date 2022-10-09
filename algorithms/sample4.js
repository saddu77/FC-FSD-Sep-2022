function binarySearch(arr,target){
    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
        let middle = Math.floor((start + end) / 2); //rounds down
        if ( arr[middle] < target){
            start = middle + 1
        } else if(arr[middle] > target){
            end = middle - 1;
        }else if ( arr[middle] === target){
            return middle;
        }
    }
    return -1;
}

console.log(binarySearch([10,20,30,40,50],10));//0
console.log(binarySearch([10,20,30,50,60],40));//-1
console.log(binarySearch([10,20,30,40,50],50));//4





