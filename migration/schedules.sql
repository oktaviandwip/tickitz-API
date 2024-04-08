CREATE TABLE schedules (
    schedule_id SERIAL PRIMARY KEY,
    movie_id SERIAL NOT NULL,
    price REAL NOT NULL,
    cinema VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    date_start DATE NOT NULL,
    date_end DATE NOT NULL,
    time TIME[] NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP,
    CONSTRAINT fk_movies FOREIGN KEY (movie_id) REFERENCES movies(movie_id) ON DELETE CASCADE
);