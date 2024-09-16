import express from "express"

const app = express()

app.get('/', (req,res)=>{
    res.send("Hello World")
})

app.get('/about', (req,res)=>{
    res.send("im from about")
})

app.listen(4500, ()=>{
    console.log(`Server is running at port 4500`)
})
