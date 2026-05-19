from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# import routes
from routes.search import search_bp
from routes.feedback import feedback_bp

app.register_blueprint(search_bp)
app.register_blueprint(feedback_bp)

@app.route("/")
def home():
    return "Backend is running!"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)