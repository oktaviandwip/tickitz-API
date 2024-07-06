const models = {};
const db = require("../configs/db");

// Login
models.getPassByEmail = (email) => {
  return db.query(`SELECT * FROM users WHERE email = $1`, [email]);
};

// Get User
models.getUser = (id) => {
  return db.query(`SELECT * FROM users WHERE id = $1`, [id]);
};

// Add User
models.addUser = ({ email, password, picture }) => {
  return db.query(
    `INSERT INTO users (email, password, photo_profile) 
     VALUES ($1, $2, $3)`,
    [email, password, picture]
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
  let username;
  if (first_name && last_name) {
    username = (first_name + last_name).toLowerCase().replace(/\s/g, "");
  }

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
