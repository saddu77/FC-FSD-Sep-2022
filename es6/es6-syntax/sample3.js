for( var i = 0; i < 5; i++){

  (function(j){             //creating another scope so that each callback function references a new variable
    
        setTimeout(function(){
            console.log(j);
        },1000);
    
  })(i);
  
}

//expected ---> 0  1  2  3  4
//actual ---> 5 5 5 5 5


