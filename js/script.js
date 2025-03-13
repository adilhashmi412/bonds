document.addEventListener("DOMContentLoaded", function () {
    const chatButton = document.getElementById("chat-button");
    const chatBox = document.getElementById("chat-box");
    const closeChat = document.getElementById("close-chat");
    const chatMessages = document.getElementById("chat-messages");
    const chatInput = document.getElementById("chat-input");
    const sendChat = document.getElementById("send-chat");
  
    // Open chat box with animation
    chatButton.addEventListener("click", function () {
      chatBox.classList.add("active");
    });
  
    // Close chat box
    closeChat.addEventListener("click", function () {
      chatBox.classList.remove("active");
    });
  
    // Function to display messages
    function addMessage(sender, message, type) {
      const msgDiv = document.createElement("div");
      msgDiv.classList.add(type === "user" ? "user-message" : "bot-message");
      msgDiv.textContent = message;
      chatMessages.appendChild(msgDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  
    // Simple AI Chatbot Logic
    function chatbotResponse(userMessage) {
      const lowerMessage = userMessage.toLowerCase();
      if (lowerMessage.includes("hello")) return "Hi! How can I assist you?";
      if (lowerMessage.includes("bonds")) return "We offer secure online bonds in DFW. Need help with something specific?";
      if (lowerMessage.includes("services")) return "We provide surety bonds for various needs. Let me know if you want details!";
      return "I'm still learning! Can you ask something else?";
    }
  
    // Send message on button click
    sendChat.addEventListener("click", function () {
      const userMessage = chatInput.value.trim();
      if (userMessage) {
        addMessage("You", userMessage, "user");
        setTimeout(() => {
          const botReply = chatbotResponse(userMessage);
          addMessage("AI Chatbot", botReply, "bot");
        }, 1000);
      }
      chatInput.value = "";
    });
  
    // Send message on Enter key
    chatInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") sendChat.click();
    });
  });
  