from flask import Flask, jsonify
from flask_cors import CORS
import json
import os
import requests

app = Flask(__name__)
CORS(app)

# ✅ IMPORT FIRST
from routes.search import search_bp
from routes.feedback import feedback_bp

# ✅ REGISTER BLUEPRINTS
app.register_blueprint(search_bp)
app.register_blueprint(feedback_bp)

# ---------------- RUST ROUTE ----------------
@app.route("/rust")
def rust():
    try:
        r = requests.get("http://127.0.0.1:8080")
        return r.json()
    except Exception as e:
        return {"error": str(e)}

# ---------------- SONGS ----------------
SONG_FILE = os.path.join(os.path.dirname(__file__), "song.json")

def load_songs():
    with open(SONG_FILE, "r", encoding="utf-8") as f:
        return json.load(f)

@app.route("/songs")
def songs():
    return jsonify(load_songs())

# ---------------- HOME ----------------
@app.route("/")
def home():
    return "Backend is running!"

# ---------------- START ----------------
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)