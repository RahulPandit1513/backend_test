require('dotenv').config()
const express = require('express');
const app = express();
const PORT = 4000;

app.get('/',(req,res)=>{
    res.send('Hello World')
});

app.get('/home',(req,res)=>{
    res.send("Hello From HOME PAGE ");
});

app.get('/about',(req,res)=>{
    res.send("About Page");
});

app.get('/contact',(req,res)=>{
    res.send("Contact Us Page");
});
app.get('/blog',(req,res)=>{
    res.send("Blog Page");
});

app.listen(process.env.PORT, ()=>{
    console.log(`Example App listening on port ${PORT}`);
});