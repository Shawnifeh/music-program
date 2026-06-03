from flask import Blueprint, request, jsonify

search_bp = Blueprint("search", __name__)

songs = [
    {"id": "1", "name": "Digital Memory", "priority": 100},
    {"id": "2", "name": "Parallel Horizon", "priority": 90},
    {"id": "3", "name": "Ghost Circuit", "priority": 80},
    {"id": "4", "name": "CosmicShift", "priority": 70},
    {"id": "5", "name": "Fading Signals", "priority": 60},
    {"id": "6", "name": "Wistful IceCave", "priority": 50},
    {"id": "7", "name": "Afterglow", "priority": 40},
    {"id": "8", "name": "Echoes Of Yesterday", "priority": 30},
    {"id": "9", "name": "Song 0", "priority": 20}
]

@search_bp.route("/search")
def search():

    query = request.args.get("q", "").lower()

    results = [
        song for song in songs
        if query in song["name"].lower()
    ]

    return jsonify(results)