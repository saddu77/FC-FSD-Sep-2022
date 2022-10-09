function selectionSort(arr){
    for ( let i = 0; i < arr.length; i++){
        let lowest = i;

        for(let j = i + 1 ; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }

        if(lowest !== i){
            //swap
            [arr[i],arr[lowest]] = [arr[lowest],arr[i]]
        }
    }
    return arr
}

console.log(selectionSort([5,2,4,6,1,3]))