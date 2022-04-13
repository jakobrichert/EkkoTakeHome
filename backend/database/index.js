const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

module.exports = async () => {
  const database = await open({
    filename: "./database/database-storage.db",
    driver: sqlite3.Database,
  });
  return database;
};

