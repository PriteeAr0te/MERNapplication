const express = require('express')
const app = express();

app.get('/', (req,res)=> {
    res.send("Hello world from server")
});
app.get('/aboutme', (req,res)=> {
    res.send("Hello world from AboutMe")
});
app.get('/contact', (req,res)=> {
    res.send("Hello world from Contact")
});
app.get('/login', (req,res)=> {
    res.send("Hello world from Login")
});
app.get('/register', (req,res)=> {
    res.send("Hello world from Register")
});

app.listen('3000', ()=>{
    console.log("server is Listening at port no. 5000")
})