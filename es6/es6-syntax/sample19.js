let server = {
    name: "Server",
    // restart: function(){
    //     console.log("The " +  this.name + " is restarting....");
    // }

    restart(){
        console.log("The " +  this.name + " is restarting....");
    },
    'starting up'(){ //concise method syntax
        console.log("The " + this.name + " is starting up !!! ")
    }
}

server.restart()
server['starting up']();
//syntax: obj_name['property name']();