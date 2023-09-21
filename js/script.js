document.addEventListener("DOMContentLoaded", function () {
    const chatContent = document.getElementById("chat-content");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", function () {
        const userMessage = userInput.value;
        if (userMessage) {
            appendUserMessage(userMessage);
           
            setTimeout(() => appendBotMessage(userMessage), 1000);
            userInput.value = "";
        }
    });

    function appendUserMessage(message) {
        const messageDiv = document.createElement("div");
        messageDiv.className = "chat-message user";
        messageDiv.textContent = message;
        chatContent.appendChild(messageDiv);
    }

    function appendBotMessage(message) {
        const messageDiv = document.createElement("div");
        messageDiv.className = "chat-message bot";
        messageDiv.textContent = "Bot: " + message;
        chatContent.appendChild(messageDiv);
    }
});
const inputElem = document.querySelector('.chatbot-input');
const messagesContainer = document.querySelector('.chatbot-messages');

inputElem.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && inputElem.value.trim() !== '') {
        const userMessage = document.createElement('div');
        userMessage.textContent = inputElem.value;
        messagesContainer.appendChild(userMessage);

        setTimeout(() => {
            const botReply = document.createElement('div');
            botReply.textContent = 'Bot: ' + inputElem.value;
            messagesContainer.appendChild(botReply);
        }, 1000);

        inputElem.value = '';
    }
});