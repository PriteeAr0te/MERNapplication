const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });
require('./db/conn');

app.use(express.json());
const User = require('./models/userSchema');
app.use(require('./router/auth'))

 const PORT  = process.env.PORT;


// app.get('/', (req,res)=> {
//     res.send("Hello world from server")
// });

// app.get('/contact',(req,res)=> {
//     res.cookie("Test", 'pritee');
//     console.log("Hello middleware from Contact")
//     res.send("Hello world from Contact")
// });
// app.get('/login', (req,res)=> {
//     res.send("Hello world from Login")
// });
app.get('/register', (req,res)=> {
    res.send("Hello world from Register")
});

app.listen(PORT, ()=>{
    console.log(`server is Listening at port no. ${PORT}`)
})