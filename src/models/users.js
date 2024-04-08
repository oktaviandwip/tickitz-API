const models = {};
const db = require("../configs/db");

//Create the existing table
models.createTable = async () =>
  await db.query(
    `CREATE TABLE users (
      user_id SERIAL PRIMARY KEY,
      first_name VARCHAR(255),
      last_name VARCHAR(255),
      username TEXT,
      country_code INT DEFAULT 62,
      phone_number VARCHAR(15),
      role VARCHAR(255) DEFAULT 'user',
      email VARCHAR(255) UNIQUE NOT NULL,
      password TEXT NOT NULL,
      confirm_password TEXT,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP
    )`
  );

//Insert the existing data
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

//Get the user's password
models.getPassword = async (email) => {
  try {
    const { rows } = await db.query(
      `SELECT user_id, password, role FROM users WHERE email = $1`,
      [email]
    );
    return rows;
  } catch (err) {
    throw err;
  }
};

//Get all the users
models.getData = async (page) => {
  try {
    const offset = (page - 1) * 10;
    const { rows } = await db.query(`SELECT * FROM users LIMIT 10 OFFSET $1`, [
      offset,
    ]);
    let {
      rows: [{ count }],
    } = await db.query("SELECT COUNT(*) FROM users");
    count = parseInt(count);

    const meta = {
      next:
        count <= 10 ? null : page === Math.ceil(count / 10) ? null : page + 1,
      prev: page === 1 ? null : page - 1,
      total: count,
    };

    return { rows, meta };
  } catch (err) {
    throw err;
  }
};

//Get a user
models.getUser = async (id) => {
  try {
    const { rows } = await db.query(`SELECT * FROM users WHERE user_id = $1`, [
      id,
    ]);
    return { rows };
  } catch (err) {
    throw err;
  }
};

//Add a user
models.addData = async ({
  first_name,
  last_name,
  username,
  phone_number,
  role,
  email,
  password,
}) => {
  if (role === undefined) {
    role = "user";
  }

  return await db.query(
    `INSERT INTO users (first_name, last_name, username, phone_number, role, email, password) 
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING user_id`,
    [first_name, last_name, username, phone_number, role, email, password]
  );
};

//Update a user
models.updateData = async (
  {
    first_name,
    last_name,
    country_code,
    phone_number,
    email,
    password,
    confirm_password,
  },
  id
) => {
  const username = (first_name + last_name).toLowerCase().replace(/\s/g, "");
  return await db.query(
    `UPDATE users 
     SET first_name = $1, last_name = $2, username = $3, country_code = $4, phone_number = $5, email = $6, password = $7, confirm_password = $8, updated_at = NOW() 
     WHERE user_id = $9
     RETURNING user_id`,
    [
      first_name,
      last_name,
      username,
      country_code,
      phone_number,
      email,
      password,
      confirm_password,
      id,
    ]
  );
};

//Delete a user
models.deleteData = async (id) => {
  return await db.query(
    `DELETE FROM users WHERE user_id = $1
     RETURNING user_id`,
    [id]
  );
};

module.exports = models;
