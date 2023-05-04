const express = require("express");

const app = express();

// Coded Made By Dayln - find out how to make it with this code line? 
//const item = Math.floor(Math.random() * items.length);
//const items = [
//"",""
// ];

// res.json({result: items[item] });
//});
//app.get("/ok", (req, res) => {



app.get("/", (req, res) => {
  

 
 res.send("Code is working right!")
});


const listener = app.listen(process.env.PORT, () => {
console.log("Your app is listening on port " + listener.address().port);
console.log("All apis are working");
});
