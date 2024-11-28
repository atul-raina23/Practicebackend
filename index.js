const express = require('express')
const app = express();
require('dotenv').config();
const port=3000;
app.get('/',(req,res) =>{
    res.send("hello World");
})
app.get('/twitter',(req,res) =>{
    res.send('radhedotcom');
})
app.get('/login',(req,res) =>{
    res.send('<h1>please login at chai and code </h1>')
})
app.get('/youtube',(req,res) =>{
    res.send('<h2>chai and code</h2>')
})

app.listen(process.env.PORT,() =>{
    console.log("Example app is listening on 3000");
})