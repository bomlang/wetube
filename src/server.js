import express from "express";
///  const express = require("express");  ///

const PORT = 4000;
const app = express();


const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next();
};


const handleHome = (req,res) => res.send("Hori");

app.use(logger);
app.get("/", handleHome);


const handleListening = () => 
console.log(`Server listening on port http://localhost:${PORT}🚀`);
app.listen(PORT, handleListening);
