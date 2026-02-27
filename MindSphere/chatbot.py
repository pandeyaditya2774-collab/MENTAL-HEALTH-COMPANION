from textblob import TextBlob
import random

responses = {
    "positive": [
        "That's wonderful to hear! 😊",
        "I'm glad you're feeling good!",
        "You deserve this happiness 💛"
    ],
    "negative": [
        "I'm here for you. 💙",
        "That sounds tough. Want to talk more?",
        "You're not alone. I'm listening."
    ],
    "neutral": [
        "I hear you 🌱",
        "Thanks for sharing that.",
        "Go on, I'm here."
    ]
}

def get_sentiment(text):
    blob = TextBlob(text)
    polarity = blob.sentiment.polarity
    if polarity > 0.3:
        return "positive"
    elif polarity < -0.3:
        return "negative"
    return "neutral"

def get_bot_reply(user_input):
    sentiment = get_sentiment(user_input)
    return random.choice(responses[sentiment])