import express from 'express' 


const app = express()

app.use(express.json())


app.listen(5500, ()=> {
    console.log("Server has started!")
})