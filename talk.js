// talk.js

document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.querySelector(".chat-input input");
    const sendButton = document.querySelector(".chat-input button");
    const messagesContainer = document.querySelector(".chat-messages");

    sendButton.addEventListener("click", () => {
        const messageText = inputField.value.trim();
        if (messageText) {
            // Add message to chat
            const newMessage = document.createElement("div");
            newMessage.classList.add("message", "user1");
            newMessage.textContent = messageText;
            messagesContainer.appendChild(newMessage);

            inputField.value = "";
            messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll to the latest message
        }
    });

    inputField.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            sendButton.click();
        }
    });
});
