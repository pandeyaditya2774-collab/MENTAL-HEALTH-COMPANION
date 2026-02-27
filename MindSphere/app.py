from flask import Flask, render_template, request, jsonify
from chatbot import get_bot_reply
import sqlite3
from datetime import datetime

app = Flask(__name__)

# Save message to DB
def log_message(user_msg, bot_msg):
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    c.execute("INSERT INTO messages (user_msg, bot_msg, timestamp) VALUES (?, ?, ?)", 
              (user_msg, bot_msg, datetime.now()))
    conn.commit()
    conn.close()

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get_response", methods=["POST"])
def get_response():
    user_msg = request.json["message"]
    bot_msg = get_bot_reply(user_msg)
    log_message(user_msg, bot_msg)
    return jsonify({"reply": bot_msg})

if __name__ == "__main__":
    app.run(debug=True)