let customers = [
    {
        name:'John',
        credit: 100
    },
    {
        name:'Jimmy',
        credit: 200
    },

    {
        name:'Julie',
        credit: 300
    }

];

console.log(customers.find( c => c.credit > 100));