var fs = require("fs");

console.log("Reading from a File !!! ");

fs.readFile("info.txt",function(err,response){
    if(err){
        return console.error(err);
    }
    console.log("Done Read is : " + response.toString());
});