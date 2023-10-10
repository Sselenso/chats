window.addEventListener('DOMContentLoaded', function() {
  const messageInput = document.getElementById('message-text');
  const sendButton = document.getElementById('send-button');
  const chatWindow = document.querySelector('.chat-window-all');

  messageInput.addEventListener('input', handleInput);
  sendButton.addEventListener('click', handleSend);

  function handleInput() {
    if (messageInput.value.trim() !== '') {
      sendButton.disabled = false;
      sendButton.classList.add('actived');
    } else {
      sendButton.disabled = true;
      sendButton.classList.remove('actived');
    }
  }

  function handleSend() {
    if (!sendButton.disabled) {
      const messageText = messageInput.value;

      if (messageText.trim() !== '') {
        const specialistMessage = createSpecialistMessage(messageText);
        chatWindow.appendChild(specialistMessage);

        messageInput.value = '';
        sendButton.disabled = true;
        sendButton.classList.remove('actived');

        scrollToBottom();
      }
    }
  }

  messageInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      handleSend();
    }
  });

  // Функция для прокручивания к самому нижнему сообщению
  function scrollToBottom() {
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }
});

function createSpecialistMessage(messageText) {
  const specialistMessage = document.createElement('div');
  specialistMessage.classList.add('message__spec');

  const messageContainer = document.createElement('div');
  messageContainer.classList.add('specialist-message');

  const messageInfo = document.createElement('div');
  messageInfo.classList.add('message-info');

  const username = document.createElement('span');
  username.classList.add('username');
  username.textContent = 'Специалист';

  const timestamp = document.createElement('span');
  timestamp.classList.add('timestamp');
  const currentDate = new Date();
  timestamp.textContent = currentDate.getHours() + ':' + currentDate.getMinutes() + ' ' + (currentDate.getHours() >= 12 ? 'PM' : 'AM');

  const messageTextSpec = document.createElement('div');
  messageTextSpec.classList.add('message-text-spec');
  messageTextSpec.textContent = messageText;

  messageInfo.appendChild(username);
  messageInfo.appendChild(timestamp);
  messageContainer.appendChild(messageInfo);
  messageContainer.appendChild(messageTextSpec);
  specialistMessage.appendChild(messageContainer);

  return specialistMessage;
}
