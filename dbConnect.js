const mysql = require("mysql")
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"js_pub"
})

connection.connect(()=>{
    console.log("database connected successfully")
})
module.exports =connection  