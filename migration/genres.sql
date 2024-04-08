CREATE TABLE genres (
	genre_id SERIAL PRIMARY KEY,
	genre_name VARCHAR(255) NOT NULL,
	created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP
);