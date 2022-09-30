var fs = require("fs");

console.log("Writing into a File !!! ");

fs.writeFile("info.txt","This is my new Line",function(err){
    if(err){
        return console.error(err);
    }
    console.log("Done Writing into a File..");
})

