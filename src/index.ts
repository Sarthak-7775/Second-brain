import express from 'express';
import jsonwebtoken from 'jsonwebtoken';
import mongoose from 'mongoose';
import { UserModel } from "./db.js";

const app = express();
app.use(express.json());

// Creating routes

app.post("/api/v1/signup", (req, res) => { 
    // TODO  --- xod validation, hashing the password
    const username =   req.body.username;
    const password =   req.body.password;

    UserModel.create({
        username: username,
        password: password
    })

    res.json({
        message: "User signed up successfully"
    })
})


app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;



})







app.listen(3000);