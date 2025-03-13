// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
/** END google_map js **/


/** Chatbox js **/
document.addEventListener("DOMContentLoaded", function () {
    const chatButton = document.getElementById("chat-button");
    const chatBox = document.getElementById("chat-box");
    const closeChat = document.getElementById("close-chat");
    const chatMessages = document.getElementById("chat-messages");
    const chatInput = document.getElementById("chat-input");
    const sendChat = document.getElementById("send-chat");
  
    // Open chat box
    chatButton.addEventListener("click", function () {
      chatBox.style.display = "flex";
    });
  
    // Close chat box
    closeChat.addEventListener("click", function () {
      chatBox.style.display = "none";
    });
  
    // Function to display messages
    function addMessage(sender, message) {
      const msgDiv = document.createElement("div");
      msgDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
      chatMessages.appendChild(msgDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  
    // Simple AI Chatbot Logic
    function chatbotResponse(userMessage) {
      const lowerMessage = userMessage.toLowerCase();
      if (lowerMessage.includes("hello")) return "Hi! How can I assist you?";
      if (lowerMessage.includes("bonds")) return "We offer secure online bonds in DFW. Do you need help with something specific?";
      if (lowerMessage.includes("services")) return "We provide surety bonds for various needs. Let me know if you want more details!";
      return "I'm still learning! Can you ask something else?";
    }
  
    // Send message on button click
    sendChat.addEventListener("click", function () {
      const userMessage = chatInput.value.trim();
      if (userMessage) {
        addMessage("You", userMessage);
        setTimeout(() => {
          const botReply = chatbotResponse(userMessage);
          addMessage("AI Chatbot", botReply);
        }, 1000);
      }
      chatInput.value = "";
    });
  
    // Send message on Enter key
    chatInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") sendChat.click();
    });
  });
  /** End of chatbox js **/
  