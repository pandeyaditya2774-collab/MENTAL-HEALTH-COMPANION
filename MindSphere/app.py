from flask import Flask, render_template, request, jsonify
from chatbot import get_bot_reply
import sqlite3
from datetime import datetime

app = Flask(__name__)

# Save conversation to database
def log_message(user_msg, bot_msg, sentiment):
    conn = sqlite3.connect("database.db")
    c = conn.cursor()
    c.execute(
        "INSERT INTO messages (user_msg, bot_msg, sentiment, timestamp) VALUES (?, ?, ?, ?)",
        (user_msg, bot_msg, sentiment, datetime.now())
    )
    conn.commit()
    conn.close()

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get_response", methods=["POST"])
def get_response():
    data = request.get_json()
    user_msg = data["message"]

    bot_reply, sentiment = get_bot_reply(user_msg)

    log_message(user_msg, bot_reply, sentiment)

    return jsonify({"reply": bot_reply})

if __name__ == "__main__":
    app.run(debug=True)