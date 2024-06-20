const models = {};
const db = require("../configs/db");

// Create the existing table
models.createTable = async () =>
  await db.query(
    `CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      photo_profile TEXT NULL DEFAULT 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNy4yNTAwNyAyLjM4NzgyQzguNTQ4NzggMi4wOTkyIDEwLjEyNDMgMiAxMiAyQzEzLjg3NTcgMiAxNS40NTEyIDIuMDk5MiAxNi43NDk5IDIuMzg3ODJDMTguMDYgMi42Nzg5NyAxOS4xNDg4IDMuMTc2IDE5Ljk4NjQgNC4wMTM1OEMyMC44MjQgNC44NTExNiAyMS4zMjEgNS45NDAwMiAyMS42MTIyIDcuMjUwMDdDMjEuOTAwOCA4LjU0ODc4IDIyIDEwLjEyNDMgMjIgMTJDMjIgMTMuODc1NyAyMS45MDA4IDE1LjQ1MTIgMjEuNjEyMiAxNi43NDk5QzIxLjMyMSAxOC4wNiAyMC44MjQgMTkuMTQ4OCAxOS45ODY0IDE5Ljk4NjRDMTkuMTQ4OCAyMC44MjQgMTguMDYgMjEuMzIxIDE2Ljc0OTkgMjEuNjEyMkMxNS40NTEyIDIxLjkwMDggMTMuODc1NyAyMiAxMiAyMkMxMC4xMjQzIDIyIDguNTQ4NzggMjEuOTAwOCA3LjI1MDA3IDIxLjYxMjJDNS45NDAwMiAyMS4zMjEgNC44NTExNiAyMC44MjQgNC4wMTM1OCAxOS45ODY0QzMuMTc2IDE5LjE0ODggMi42Nzg5NyAxOC4wNiAyLjM4NzgyIDE2Ljc0OTlDMi4wOTkyIDE1LjQ1MTIgMiAxMy44NzU3IDIgMTJDMiAxMC4xMjQzIDIuMDk5MiA4LjU0ODc4IDIuMzg3ODIgNy4yNTAwN0MyLjY3ODk3IDUuOTQwMDIgMy4xNzYgNC44NTExNiA0LjAxMzU4IDQuMDEzNThDNC44NTExNiAzLjE3NiA1Ljk0MDAyIDIuNjc4OTcgNy4yNTAwNyAyLjM4NzgyWk0xMiA2QzkuNzkwODYgNiA4IDcuNzkwODYgOCAxMEM4IDEyLjIwOTEgOS43OTA4NiAxNCAxMiAxNEMxNC4yMDkxIDE0IDE2IDEyLjIwOTEgMTYgMTBDMTYgNy43OTA4NiAxNC4yMDkxIDYgMTIgNlpNMTguMzc3NSAxNy4yOTQyQzE4LjczMDMgMTcuODY5NSAxOC42MDU1IDE4LjYzIDE4LjAzNjkgMTguOTkzNUMxNy41MTk5IDE5LjMyNDEgMTYuOTE1OCAxOS41MjY1IDE2LjMxNTkgMTkuNjU5OEMxNS4yMzIyIDE5LjkwMDYgMTMuODI5OSAyMCAxMS45OTk4IDIwQzEwLjE2OTggMjAgOC43Njc0NCAxOS45MDA2IDcuNjgzODEgMTkuNjU5OEM3LjA5NTE2IDE5LjUyOSA2LjUwMjA1IDE5LjMzMTkgNS45OTEzMSAxOS4wMTJDNS40MTI0NyAxOC42NDk1IDUuMjg1MjMgMTcuODc4NiA1LjY0Njc0IDE3LjI5OTFDNi4wNjMwMyAxNi42MzE4IDYuNjM2NzYgMTYuMTA3NSA3LjQwODgyIDE1LjczNDRDOC41ODAyMiAxNS4xNjg0IDEwLjExNTcgMTUgMTEuOTk5NiAxNUMxMy44NzcxIDE1IDE1LjQxMDkgMTUuMTU0OCAxNi41ODA3IDE1LjcwNDdDMTcuMzcyNyAxNi4wNzcgMTcuOTU3MiAxNi42MDg5IDE4LjM3NzUgMTcuMjk0MloiIGZpbGw9IiMzMjMyMzIiLz4NCjwvc3ZnPg==' ,
      first_name VARCHAR(255),
      last_name VARCHAR(255),
      username TEXT,
      country_code INT DEFAULT 62,
      phone_number VARCHAR(15),
      role VARCHAR(255) DEFAULT 'user',
      email VARCHAR(255) UNIQUE NOT NULL,
      password TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP
    )`
  );

// Insert the existing data
models.saveData = async ({
  first_name,
  last_name,
  username,
  country_code,
  phone_number,
  role,
  email,
  password,
}) => {
  if (role === undefined) {
    role = "user";
  }

  if (country_code === undefined) {
    country_code = 62;
  }

  await db.query(
    `INSERT INTO users (first_name, last_name, username, country_code, phone_number, role, email, password) 
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
    [
      first_name,
      last_name,
      username,
      country_code,
      phone_number,
      role,
      email,
      password,
    ]
  );
};

// Login
models.getPassByEmail = (email) => {
  return db.query(`SELECT * FROM users WHERE email = $1`, [email]);
};

// Get User
models.getUser = (id) => {
  return db.query(`SELECT * FROM users WHERE id = $1`, [id]);
};

// Add User
models.addUser = ({
  first_name,
  last_name,
  username,
  phone_number,
  email,
  password,
}) => {
  return db.query(
    `INSERT INTO users (first_name, last_name, username, phone_number, email, password) 
     VALUES ($1, $2, $3, $4, $5, $6)`,
    [first_name, last_name, username, phone_number, email, password]
  );
};

// Update User
models.updateUser = (
  {
    photo_profile,
    first_name,
    last_name,
    country_code,
    phone_number,
    email,
    password,
  },
  id
) => {
  const username = (first_name + last_name).toLowerCase().replace(/\s/g, "");
  return db.query(
    `UPDATE users 
     SET photo_profile = $1, first_name = $2, last_name = $3, username = $4, country_code = $5, phone_number = $6, email = $7, password = $8, updated_at = NOW() 
     WHERE id = $9
     RETURNING *`,
    [
      photo_profile,
      first_name,
      last_name,
      username,
      country_code,
      phone_number,
      email,
      password,
      id,
    ]
  );
};

module.exports = models;
