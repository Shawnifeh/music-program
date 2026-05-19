from flask import Blueprint, request, jsonify

search_bp = Blueprint("search", __name__)

songs = [
    {"id": "1", "name": "Digital Memory"},
    {"id": "2", "name": "Parallel Horizon"},
    {"id": "3", "name": "Ghost Circuit"},
    {"id": "4", "name": "CosmicShift"},
    {"id": "5", "name": "Fading Signals"},
    {"id": "6", "name": "Wistful IceCave"},
    {"id": "7", "name": "Song 0"}
]

@search_bp.route("/search")
def search():

    query = request.args.get("q", "").lower()

    results = [
        song for song in songs
        if query in song["name"].lower()
    ]

    return jsonify(results)