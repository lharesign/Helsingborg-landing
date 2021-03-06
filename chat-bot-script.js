// FOR CHAT BOT

// Add on click listener to the chat-box button
document.getElementById("chat-clickme").addEventListener("click", openChat);

// If chat bot box display is none, display chat bot box, else hide
function openChat() {
    var chatBox = document.getElementById("chat-clickme-display");
    if (chatBox.style.display === "block") {
      chatBox.style.display = "none";
    } else {
      chatBox.style.display = "block";
    }
}

// Add on click listener to the chat-box close button
document.getElementById("chat-box-close").addEventListener("click", closeChat);

// Set display to none
function closeChat() {
    var chatBox = document.getElementById("chat-clickme-display");
    chatBox.style.display = "none";
}
