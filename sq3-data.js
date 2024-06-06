const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("database.db");

db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT null,
    age INTEGER NOT null 
)`);

module.exports = {
  async getUsers() {
    try {
      const users = await new Promise((resolve, reject) => {
        db.all("SELECT * FROM users", [], (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
      });
      return users;
    } catch (err) {
      return null;
    }
  },
  async addUser(user) {
    const lastId = await new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO users (name , age) VALUES (?, ?)",
        [user.name, user.age],
        function (err) {
          if (err) {
            reject(err);
          } else {
            resolve(this.lastID);
          }
        }
      );
    });
    return { id: lastId, ...user };
  },
  async getUser(id) {
    const user = await new Promise((resolve, reject) => {
      db.get("SELECT * FROM users WHERE id = ?", [id], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
    return user;
  },
  async deleteUser(id) {
    const user = await new Promise((resolve, reject) => {
      db.run("DELETE FROM users WHERE id = ?", [id], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
    return await this.getUsers();
  },
  async updateUser(id, updatedUser) {
    const update = await new Promise((resolve, reject) => {
      db.run(
        "UPDATE users SET name = ?, age = ? WHERE id = ?",
        [updatedUser.name, updatedUser.age, id],
        function (err) {
          if (err) {
            reject(err);
          } else {
            resolve(this.changes);
          }
        }
      );
    });
    return await this.getUser(id);
  },
};
