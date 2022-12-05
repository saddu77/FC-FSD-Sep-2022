const { pool } = require("./db");

async function deleteData(){
    const  [userid,username,password] = [7,"Jackson","999999"];
    const res = await pool.query(
        "DELETE from users where userid = $1",[userid]
    );

    console.log(`Deleted Record Sucessfully... ${userid}`);
}

deleteData();