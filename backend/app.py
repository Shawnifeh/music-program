from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

songs = [
    {"id": "1", "name": "CosmicShift"},
    {"id": "2", "name": "Ghost Circuit"},
    {"id": "3", "name": "Song 3"},
    {"id": "4", "name": "Song 0"}
]

@app.route("/")
def home():
    return "Backend is running 🚀"

@app.route("/search")
def search():
    query = request.args.get("q", "").lower()

    results = [
        song for song in songs
        if query in song["name"].lower()
    ]

    return jsonify(results)

if __name__ == "__main__":
    app.run(debug=True)