// // const express = require("express");
// // const app = express();


// // const say1 = "If you can't explain it to a six year old, you don't understand it yourself.";
// // const say2 = "Logic will get you from A to Z; imagination will get you everywhere.";
// // const say3 = "I have no special talents. I am only passionately curious.";


// // app.get('/albert/say1' ,(req , res)=>{
// //     res.send(say1)
// //     res.sendStatus(200)
// // })


// // app.get('/albert/say2' ,(req , res)=>{
// //         res.send(say2)
// //     res.sendStatus(200)
// // })


// // app.get('/albert/say3' ,(req , res)=>{
// //     res.send(say3)
// //     res.sendStatus(200)
// // })


// // app.listen(3000 , ()=>{
// //     console.log("the server is runing.....");
// // })



// const express = require("express");
// const app = express();

// app.get('/example' , (res , req)=>{
//     req.statusCode(200)
//     req.json({

//   message: "express is amazing"

// })
// })

// app.get('/example2' , (res , req)=>{
//     req.statusCode(404)
// })

// app.get('/example3' , (res , req)=>{
//     req.statusCode(400)
//     req.json({

//   message: "example for error json"

// })
// })



// app.listen(3000 , ()=>{
//     console.log("the server is runing.....");
// })


const express = require("express");
const app = express();

const users = [
  {
    name: "Marcy Craft",
    gender: "female",
    phone: "+1 (868) 444-3449"
  },
  {
    name: "Hattie Cobb",
    gender: "female",
    phone: "+1 (939) 563-2961"
  },
  {
    name: "Flossie Bowman",
    gender: "female",
    phone: "+1 (958) 551-2887"
  }
];

app.get('/users/1', (req, res) => {
  const user = users.find(u => u.name === "Hattie Cobb");
  res.status(200).json(user);
});

app.get('/users/2', (req, res) => {
  const user = users.find(u => u.name === "Flossie Bowman");
  res.status(200).json(user);
});

app.get('/users/3', (req, res) => {
  const user = users.find(u => u.name === "Marcy Craft");
  res.status(200).json(user);
});

app.listen(3000, () => {
  console.log("the server is running...");
});