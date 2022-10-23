import app from "./app";
import MySQLConnection from "./utils/MySQLConnection";

const database = new MySQLConnection()

database.connect().getConnection().then(result => {
    app.listen(6061)
    console.log("Database is ok")
}).catch(error => {
    console.log(error)
})