//import
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

//init app
const app = express();

//port
const PORT = process.env.PORT || 5000;

//use cors
app.use(cors());

//use body parser
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
