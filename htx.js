// const gpt="chatgpt";
// const gpt1="chatgpt1";
// const gpt2="chatgpt2";
// const gpt3="chatgpt3";
// export const gpt4="gpt4";

// export const randolovepercentage=()=>{
//     return `${~~(Math.random()*100)}%`;
// }

// // module.exports=gpt;   old method

// export default gpt;         // only one thing can be defult

// export {gpt1,gpt2,gpt3} ;





// //-----------------------------------------------------------------------------------------------------------

// // const http = require("http");
// import http from "http";
// // const ht=require("./htx");
// import ht from "./htx.js";
// import {gpt4} from "./htx.js";
// import * as myobj from "./htx.js"
// import fs from "fs"


// const home = fs.readFileSync("./home.html");


// console.log(myobj);
// console.log(myobj.randolovepercentage());
// console.log(gpt4);

// // const home = fs.readFile("./home.html",()=>{
// //     console.log("read file");
// // })


// const server = http.createServer((req, res) => {
//     if (req.url === "/about") {
//         res.end(`<h1>love is ${myobj.randolovepercentage()}</h1>`);
//     } else if (req.url === "/") {
//         // fs.readFile("./home.html",(err,data)=>{
//         //     res.end(data);
//         // })
//         res.end(home);
//     } else if (req.url === "/contact") {
//         res.end("<h1>contact</h1>");
//     } else {
//         res.end("<h1>page not found</h1>");
//     }
// });

// server.listen(5000, () => {
//     console.log("server is working");
// });


/*
// Importing required modules
import express from "express";  // Importing the Express.js framework
import path from "path";  // Handling file paths
import mongoose from "mongoose";  // MongoDB ORM
import cookieParser from "cookie-parser";  // Parsing cookies
import Jwt from "jsonwebtoken";  // JSON Web Token handling

// Creating an instance of the Express app
const app = express();

// Database connection with MongoDB
mongoose.connect("mongodb://localhost:27017", {
    dbName: "backend",
}).then(() => console.log("Database connected")).catch((e) => console.log(e));

// Defining a Mongoose schema for the User model
const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

// Creating a Mongoose model based on the schema
const User = mongoose.model("User", userSchema);

// Middleware setup
app.use(express.static(path.join(path.resolve(), "public")));    // Serving static files from the "public" directory
app.use(express.urlencoded({ extended: true }));   // Middleware for parsing URL-encoded data
app.use(cookieParser());  // Middleware for parsing cookies

app.set("view engine", "ejs");  // Setting up the view engine for rendering EJS templates

// Authentication middleware - Checks for the presence of a token in cookies
const isAuthenticated = (req, res, next) => {
    const { token } = req.cookies;

    if (token) {
        next();  // Proceed to the next middleware or route
    } else {
        res.render("login");  // Render the login view if the token is not present
    }
}

// Root route - Protected by isAuthenticated middleware
app.get("/", isAuthenticated, (req, res) => {
    res.render("logout");  // Render the logout view
});

// Login route - Handles user login, creates a user, generates a JWT, and sets it as a cookie
app.post("/login", async (req, res) => {
    const { name, email } = req.body;

    // Create a user in the database
    const user = await User.create({
        name,
        email,
    });

    // Generate a JWT
    const token = Jwt.sign({ _id: user._id }, "rydtsfyuidfuwe");

    // Set the JWT as a cookie
    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 60 * 1000),
    });

    res.redirect("/");  // Redirect to the root route
});

// Logout route - Clears the token cookie
app.post("/logout", (req, res) => {
    res.cookie("token", null, {
        httpOnly: true,
        expires: new Date(Date.now()),
    });
    res.redirect("/");  // Redirect to the root route
});

// Server listening on port 5000
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});



*/