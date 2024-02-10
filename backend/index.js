const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();

dotenv.config({ path: "./.env" });
require("./db/conn");
app.use(
  cors({
    origin: "https://mernapp-pritee1852.netlify.app/",
  })
);

app.use(express.json());
const User = require("./models/userSchema");

app.use("/api/auth", require("./router/auth"));

const PORT = process.env.PORT || 4000;

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

app.listen(PORT, () => {
  console.log(`server is Listening at port no. ${PORT}`);
});
