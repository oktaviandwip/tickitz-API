CREATE TABLE movies_genres (
	movie_id SERIAL NOT NULL,
	genre_id SERIAL NOT NULL,
	CONSTRAINT fk_movies FOREIGN KEY (movie_id) REFERENCES movies(movie_id) ON DELETE CASCADE,
	CONSTRAINT fk_genres FOREIGN KEY (genre_id) REFERENCES genres(genre_id) ON DELETE CASCADE
);