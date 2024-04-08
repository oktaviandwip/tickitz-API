CREATE TABLE tickets (
	ticket_id SERIAL PRIMARY KEY,
	booking_id SERIAL NOT NUll,
	created_at TIMESTAMP DEFAULT NOW(),
	updated_at TIMESTAMP,
	CONSTRAINT fk_bookings FOREIGN KEY (booking_id) REFERENCES bookings(booking_id) ON DELETE CASCADE
);