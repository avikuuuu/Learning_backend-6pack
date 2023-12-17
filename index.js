import express from "express";
import path from "path";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import Jwt  from "jsonwebtoken";


const app = express();
// database connection with mongo db
mongoose.connect("mongodb://localhost:27017", {
    dbName: "backend",
}).then(() => console.log("dataBase connected")).catch((e) => console.log(e));

const userSchema= new mongoose.Schema({
    name:String,
    email:String
});

const User=mongoose.model("User",userSchema)


// const details = [];


//using middleware
app.use(express.static(path.join(path.resolve(), "public")));    // making static public folder for use
app.use(express.urlencoded({ extended: true }))   //get data by request and send data after manupulating
app.use(cookieParser())  //for reading cookie parser in console

app.set("view engine", "ejs");          //setting up view engine for rending without anychange

// app.get("/", (req, res) => {
//     // res.send('hi');
//     // res.status(404).send("not found");


//     //  sending json data as Api 
//     // res.json({
//     //     sucess:true,
//     //     product:[]
//     // })
//     // const currentpath=path.resolve();  // for getting current directory


//     // res.sendFile(path.join(currentpath,"./home.html")); //for adding directory




//     res.render("login");              //here they render code with only name 
//     // res.sendFile("index");
// });

// app.get("/success", (req, res) => {
//     res.render("success");
// })

// app.get("/add", async (req, res) => {
//     await msg.create({name:"avde",email:"abcaaaa@gmail.com"}).then(()=>{
//         res.send("nice")
//     }
//     )
    

// })

// app.get("/users", (req, res) => {
//     res.json({ details });
// })

// app.post("/contact", async (req, res) => {
//     console.log(req.body.name);

//     const {name,email} =req.body;
//     // res.render("sucess");  //render success file in videw folder after submit
//     await msg.create({name,email });
//     res.redirect("/success");
// })


//authentication start form here 



//fuction for authentication
// here next work for commit to execute next command in row
const isAuthenticated=(req,res,next)=>{
    const {token}=req.cookies;

    if(token){
        next();
    }else{
        res.render("login");
    }
}

app.get("/",isAuthenticated ,(req, res) => {

    // console.log(req.cookies.token);                   // this show token in console

    res.render("logout")
});

app.post("/login",async(req,res)=>{

    const {name,email}=req.body;
    console.log(name,email);

    const user=await User.create({
        name,
        email,
    })

    const token=Jwt.sign({_id:user._id},"rydtsfyuidfuwe")
    console.log(token);

    res.cookie("token",token,{
        httpOnly:true,
        expires:new Date(Date.now()+60*1000),
    });
    res.redirect("/");

})

app.post("/logout",(req,res)=>{

    res.cookie("token",null,{
        httpOnly:true,
        expires:new Date(Date.now()),
    });
    res.redirect("/");

})

app.listen(5000, () => {
    console.log("server is running")
});