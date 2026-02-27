function sendMessage() {
    const input = document.getElementById("userInput");
    const chat = document.getElementById("chat-box");

    if (!input.value.trim()) return;

    const userMsg = document.createElement("div");
    userMsg.className = "user-msg";
    userMsg.innerText = input.value;
    chat.appendChild(userMsg);

    const botMsg = document.createElement("div");
    botMsg.className = "bot-msg";
    botMsg.innerText = "I hear you 🌱 Take your time";

    setTimeout(() => {
        chat.appendChild(botMsg);
        chat.scrollTop = chat.scrollHeight;
    }, 600);

    input.value = "";
}

function changeMood() {
    const orb = document.getElementById("orb");
    const mood = document.getElementById("mood").value;

    const colors = {
        happy: "#ffe082",
        sad: "#90caf9",
        anxious: "#ffab91",
        stressed: "#ef9a9a",
        calm: "#a5d6a7"
    };

    if (!mood) return;

    orb.style.background = `radial-gradient(circle, ${colors[mood]}, #000)`;
    orb.style.boxShadow = `0 0 40px ${colors[mood]}`;
}

const affirmations = [
    "You are enough, just as you are.",
    "This feeling will pass.",
    "You’re allowed to rest.",
    "Small steps still count.",
    "You matter more than you know."
];

function newAffirmation() {
    const i = Math.floor(Math.random() * affirmations.length);
    document.getElementById("affirmation").innerText = affirmations[i];
}

function startBreathing() {
    document.getElementById("breathingText").innerText =
        "Inhale… Hold… Exhale… 🌬️";
}