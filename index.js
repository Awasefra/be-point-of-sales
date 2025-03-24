//import 
import dotenv from 'dotenv';
import express from "express";

dotenv.config();

//init app 
const app = express()

//route
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

//port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server running on port 3000");
  });