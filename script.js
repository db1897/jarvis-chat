function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');

    const userMessage = userInput.value;
    if (userMessage.trim() === "") return;

    // User message
    const userMessageElement = document.createElement('div');
    userMessageElement.textContent = "Du: " + userMessage;
    userMessageElement.style.marginBottom = '10px';
    chatBox.appendChild(userMessageElement);

    // Jarvis response (Simuliert)
    const jarvisResponse = "Jarvis: Das habe ich leider noch nicht verstanden.";
    const jarvisMessageElement = document.createElement('div');
    jarvisMessageElement.textContent = jarvisResponse;
    jarvisMessageElement.style.marginBottom = '10px';
    jarvisMessageElement.style.color = 'blue';
    chatBox.appendChild(jarvisMessageElement);

    // Scroll to the bottom of the chat
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear input
    userInput.value = '';
}
