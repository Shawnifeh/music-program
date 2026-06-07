@echo off

start cmd /k "cd backend && py app.py"
start cmd /k "cd audio-engine && cargo run"
start cmd /k "npm start"