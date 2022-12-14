import express from 'express' 
import mysql from 'mysql'
import * as dotenv from 'dotenv'



const app = express()


dotenv.config()



const port = process.env.PORT 

const db = mysql.createConnection({
    host:'localhost', 
    user: process.env.USERNAME, 
    password: process.env.DB_PASSWORD, 
    database:"test" 
})

// If there is an auth problem 
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Astronomy11!'; 



app.get('/', (req, res) => {
    res.json("Hello this is the backend")
})

app.get("/posts", (req, res) => {
    const q = "SELECT * FROM posts"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})



app.listen(port, () => {
    console.log(`Server has started on port ${port}`)
})