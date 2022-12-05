const { pool } = require("./db");

async function insertData(){
    const  [userid,username,password] = [7,"Jackson","123456"];
    const res = await pool.query(
        "INSERT INTO users(userid,username,password) VALUES($1,$2,$3)",[userid,username,password]
    );

    console.log(`Inserted Records Sucessfully... ${userid}`);
}

insertData();