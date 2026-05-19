from flask import Blueprint, request, jsonify

feedback_bp = Blueprint("feedback", __name__)

feedback_list = []

@feedback_bp.route("/feedback", methods=["POST"])
def feedback():

    data = request.get_json()

    if not data or "message" not in data:
        return jsonify({"error": "No message provided"}), 400

    message = data["message"]

    feedback_list.append(message)

    print("NEW FEEDBACK:", message)

    return jsonify({"status": "ok"})