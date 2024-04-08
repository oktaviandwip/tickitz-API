CREATE TABLE movies (
    movie_id SERIAL PRIMARY KEY,
    image TEXT NOT NULL,
    movie_name VARCHAR(255) NOT NULL,
    category VARCHAR(255)[] NOT NULL,
    director VARCHAR(255) NOT NULL,
    casts VARCHAR(255)[] NOT NULL,
    release_date DATE NOT NULL,
    duration_hour INT NOT NULL,
    duration_minute INT NOT NULL,
    synopsis TEXT NOT NULL,
	  created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);