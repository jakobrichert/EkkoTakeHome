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

//fix CORS errors and allow headers
app.all('/users', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],);
  next();
 });


app.get("/", async (req, res) => {
  return res.send("Hello world");
});
//gets the user list
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
//post method to add the user using sql
app.post("/users", async (req,res)=> {
  console.log(req.body);
  const name = req.body.firstname
  const lastname = req.body.lastname
  const country = req.body.country
  const db = await database();
  const result = await db.all('INSERT INTO users(firstname,lastname,country) VALUES(?,?,?)',
  [name,lastname,country]);
  return res.json(result);
});
// DELETE method to delete user using sql (references id)
app.delete("/users", async (req,res)=> {
  console.log(req.body);
  const id = req.body.id
  
  const db = await database();
  const result = await db.all('DELETE FROM users WHERE id = (?)',
  id)
  return res.json(result);
});

// PUT method to update user using sql
app.put("/users", async (req,res)=> {
  console.log(req.body);
  const id = req.body.id
  const name = req.body.firstname
  const lastname = req.body.lastname
  const country = req.body.country
  const db = await database();
  const result = await db.all('UPDATE users SET firstname = (?),lastname = (?), country= (?) WHERE id = (?)',
  name,lastname,country,id)
  return res.json(result);
});









  





