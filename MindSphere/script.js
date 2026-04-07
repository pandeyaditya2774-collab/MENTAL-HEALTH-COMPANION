function sendMessage() {
    const input = document.getElementById("userInput");
    const chat = document.getElementById("chat-box");

    if (!input.value.trim()) return;

    const message = input.value.toLowerCase();

    // user message
    const userMsg = document.createElement("div");
    userMsg.className = "user-msg";
    userMsg.innerText = input.value;
    chat.appendChild(userMsg);

    input.value = "";

    // bot message
    const botMsg = document.createElement("div");
    botMsg.className = "bot-msg";
    chat.appendChild(botMsg);

    chat.scrollTop = chat.scrollHeight;

    // typing effect
    setTimeout(() => {
        const reply = smartReply(message);
        typeText(botMsg, reply);
    }, 500);
}

function typeText(el, text) {
    el.innerText = "";
    let i = 0;

    function typing() {
        if (i < text.length) {
            el.innerText += text[i];
            i++;
            setTimeout(typing, 15);
        }
    }
    typing();
}

function smartReply(msg) {

    // greetings
    if (msg.includes("hi") || msg.includes("hello")) {
        return "Hey 😊 I'm here for you. How are you feeling?";
    }

    // feelings
    if (msg.includes("sad")) {
        return "I'm really sorry you're feeling this way 💙 Want to talk about it?";
    }

    if (msg.includes("happy")) {
        return "That's amazing 😊 Keep enjoying the moment!";
    }

    if (msg.includes("stressed") || msg.includes("anxious")) {
        return "Take a deep breath 🫁 You're safe. Try the breathing exercise above.";
    }

    // school
    if (msg.includes("exam") || msg.includes("study")) {
        return "You’ve got this 📚 Try focusing in small sessions with breaks.";
    }

    // motivation
    if (msg.includes("motivate")) {
        return "You are stronger than you think 💪 Keep going!";
    }

    // fallback responses
    const replies = [
        "I'm here with you 🤍",
        "Tell me more about that...",
        "That sounds important. I'm listening.",
        "You're not alone in this 💭",
        "Take your time, I'm here."
    ];

    return replies[Math.floor(Math.random() * replies.length)];
}