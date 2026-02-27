from textblob import TextBlob
import random

emotion_responses = {
    "positive": [
        "That’s beautiful to hear 💛",
        "I’m really glad you’re feeling that way 😊",
        "You deserve that happiness 🌼"
    ],
    "negative": [
        "I’m really sorry you’re feeling this way 💙",
        "That sounds really hard… I’m here with you.",
        "You’re not alone. Let’s take this one step at a time."
    ],
    "neutral": [
        "I hear you 🌿",
        "Tell me a little more about that.",
        "I’m listening."
    ]
}

def detect_sentiment(text):
    blob = TextBlob(text)
    polarity = blob.sentiment.polarity

    if polarity > 0.3:
        return "positive"
    elif polarity < -0.3:
        return "negative"
    else:
        return "neutral"

def get_bot_reply(user_input):
    sentiment = detect_sentiment(user_input)
    reply = random.choice(emotion_responses[sentiment])
    return reply, sentiment