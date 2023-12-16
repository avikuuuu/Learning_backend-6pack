import express  from "express";
import path from "path";


const app =express();

const details=[];

//using middleware
app.use(express.static(path.join(path.resolve(),"public")));
app.use(express.urlencoded({extended:true}))

app.set("view engine","ejs");          //setting up view engine for rending without anychange

app.get("/",(req,res)=>{
    // res.send('hi');
    // res.status(404).send("not found");


    //  sending json data as Api 
    // res.json({
    //     sucess:true,
    //     product:[]
    // })
    // const currentpath=path.resolve();  // for getting current directory


    // res.sendFile(path.join(currentpath,"./home.html")); //for adding directory
    

    res.render("index",{name:"avdesh"});                    //here they render code with only name 
    // res.sendFile("index");
});

app.get("/success",(req,res)=>{
    res.render("success");
})

app.get("/users",(req,res)=>{
    res.json({details});
})

app.post("/contact",(req,res)=>{
    console.log(req.body.name);

    details.push({username:req.body.name,email:req.body.email});
    // res.render("sucess");  //render success file in videw folder after submit
    
    res.redirect("/success");
})

app.listen(5000,()=>{
    console.log("server is running")
});