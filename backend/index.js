import express from "express";

import connectToMongo from "./db.js";
// connectToMongo();

const app = express();
const port = 3000;
// middleware
app.use(express.json());
// routes
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});
