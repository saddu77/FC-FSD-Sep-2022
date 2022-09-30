var fs = require("fs");

console.log("Writing into a File !!! ");

fs.appendFile("info.txt","\nThis is my new Line Added Now !!!",function(err){
    if(err){
        return console.error(err);
    }
    console.log("Done Appending into a File..");
})