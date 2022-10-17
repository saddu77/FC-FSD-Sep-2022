let ranks = ['A','B','C'];

for(let i = 0 ; i < ranks.length; i++){
    console.log(ranks[i]);
}
//for...of   <- new loop construct in es6

for(let rank of ranks){
    console.log(rank);
}
