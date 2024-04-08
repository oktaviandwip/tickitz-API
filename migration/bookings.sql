CREATE TABLE bookings (
	booking_id SERIAL PRIMARY KEY,
	user_id SERIAL NOT NUll,
	schedule_id SERIAL NOT NUll,
	date DATE NOT NUll,
	time TIME NOT NULL,
	seat_choosed VARCHAR(255)[] NOT NUll,
	total_seat INTEGER NOT NUll,
	total_payment REAL NOT NUll,
	payment_method VARCHAR(255) NOT NUll,
	created_at TIMESTAMP DEFAULT NOW(),
	updated_at TIMESTAMP,
	CONSTRAINT fk_users FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
	CONSTRAINT fk_schedules FOREIGN KEY (schedule_id) REFERENCES schedules(schedule_id) ON DELETE CASCADE
);