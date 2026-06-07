run-backend:
	cd backend && py app.py

run-rust:
	cd audio-engine && cargo run

run-frontend:
	npm start

run-windows:
	cd windows && py main.py