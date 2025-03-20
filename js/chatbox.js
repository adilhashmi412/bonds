document.addEventListener("DOMContentLoaded", function () {
  const chatButton = document.getElementById("chat-button");
  const chatBox = document.getElementById("chat-box");
  const closeChat = document.getElementById("close-chat");
  const chatMessages = document.getElementById("chat-messages");
  const chatInput = document.getElementById("chat-input");
  const sendChat = document.getElementById("send-chat");

  // Toggle chat box visibility
  chatButton.addEventListener("click", function () {
      chatBox.style.display = (chatBox.style.display === "none" || chatBox.style.display === "") ? "flex" : "none";
  });

  // Close chat box
  closeChat.addEventListener("click", function () {
      chatBox.style.display = "none";
  });

  // Function to display messages in chat
  function addMessage(sender, message, isHTML = false) {
      const msgDiv = document.createElement("div");
      msgDiv.classList.add(sender === "You" ? "user-message" : "bot-message");

      if (isHTML) {
          msgDiv.innerHTML = message; // Insert HTML directly
      } else {
          msgDiv.textContent = `${sender}: ${message}`; // Insert text
      }

      chatMessages.appendChild(msgDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Simple AI Chatbot Logic
  function chatbotResponse(userMessage) {
      const lowerMessage = userMessage.toLowerCase();
      if (lowerMessage.includes("hi")) return "Hi! How can I assist you?";
      if (lowerMessage.includes("bonds")) return "We offer secure online bonds in DFW. Do you need help with something specific?";
      if (lowerMessage.includes("services")) return "We provide surety bonds for various needs. Let me know if you want more details!";

      // Return HTML form as a string
      return `
          <form id="userForm">
              <label for="username">Name:</label>
              <input type="text" id="username" name="username" required><br>

              <label for="phone">Phone No:</label>
              <input type="tel" id="phone" name="phone" required><br>

              <label for="email">Email Address:</label>
              <input type="email" id="email" name="email" required><br>

              <button type="submit">Submit</button>
          </form>
      `;
  }

  // Function to handle form submission
  function handleFormSubmission() {
      const form = document.getElementById("userForm");
      if (!form) return;

      form.addEventListener("submit", function (event) {
          event.preventDefault(); // Prevent page reload

          // Get user inputs
          const name = document.getElementById("username").value;
          const phone = document.getElementById("phone").value;
          const email = document.getElementById("email").value;

          // Show the submitted data in the chat
          addMessage("You", `Thank you, ${name}! We will contact you at ${email} or ${phone}.`);

          // Clear the form after submission
          form.parentElement.innerHTML = "Your details have been submitted. Thank you!";
      });
  }

  // Send message on button click
  sendChat.addEventListener("click", function () {
      const userMessage = chatInput.value.trim();
      if (userMessage) {
          addMessage("You", userMessage);
          setTimeout(() => {
              const botReply = chatbotResponse(userMessage);
              if (botReply.includes("<form")) {
                  addMessage("AI Chatbot", botReply, true); // Pass true to insert HTML
                  handleFormSubmission(); // Attach event listener to the form
              } else {
                  addMessage("AI Chatbot", botReply);
              }
          }, 1000);
      }
      chatInput.value = "";
  });

  // Send message on Enter key press
  chatInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") sendChat.click();
  });
});
