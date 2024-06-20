CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    photo_profile TEXT NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    username TEXT NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    role VARCHAR(255) DEFAULT 'user',
    email VARCHAR(255) UNIQUE NOT NULL,
   	password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);