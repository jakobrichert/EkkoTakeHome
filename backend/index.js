const database = require("./database");
const PORT = 4000;
const app = require("express")();
const cors = require('cors');
const express = require("express")
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.all('/users', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],);
  next();
 });


app.get("/", async (req, res) => {
  return res.send("Hello world");
});

app.get("/users", async (req, res) => {
  
  res.set('Access-Control-Allow-Origin', '*');

  const db = await database();
  const result = await db.all(`SELECT * FROM users u `);
  return res.json(result);
});
app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Backend started - listening on port ${PORT}`);
});

app.post("/users", async (req,res)=> {
  console.log(req.body);
  

  
  
  const db = await database();}
  
  
  //db.serialize(()=>{
    //db.run('INSERT INTO emp(id,name) VALUES(?,?)', [req.params.id, req.params.name], function(err) {
      //if (err) {
      //  return console.log(err.message);
     // }
     // console.log("New user has been added");
     // res.send("New employee has been added into the database with ID = "+req.params.id+ " and Name = "+req.params.name);
   // });
//});
//});


//app.get('/users', function(req,res){
//  db.serialize(()=>{
//    db.run('UPDATE emp SET name = ? WHERE id = ?', [req.params.name,req.params.id], function(err){
//      if(err){
//        res.send("Error encountered while updating");
//        return console.error(err.message);
//      }
//      res.send("Entry updated successfully");
//      console.log("Entry updated successfully");
//    });
//  });
//});


//app.get('/users', function(req,res){
//  db.serialize(()=>{
//    db.run('DELETE FROM emp WHERE id = ?', req.params.id, function(err) {
//      if (err) {
//        res.send("Error encountered while deleting");
//        return console.error(err.message);
//      }
//      res.send("Entry deleted");
//      console.log("Entry deleted");
//    });
//  });
//});




)
