const { pool } = require("./db");

async function updateData(){
    const  [userid,username,password] = [7,"Jackson","999999"];
    const res = await pool.query(
        "UPDATE users SET password = $2 where userid = $1",[userid,password]
    );

    console.log(`Updated Record Sucessfully... ${userid}`);
}

updateData();