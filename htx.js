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


