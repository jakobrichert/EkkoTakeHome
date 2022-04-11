const database = require("./database");
const PORT = 4000;
const app = require("express")();

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





