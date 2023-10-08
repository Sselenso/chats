// script.js

// Получаем ссылки на элементы страницы
const specialistButton = document.querySelector('.specialist-button');
const chatList = document.querySelector('.chat-list');
const chatMessages = document.querySelector('.chat-messages');
const previousChatButton = document.querySelector('.previous-chat-button');
const messageInput = document.querySelector('.message-input input');
const sendButton = document.querySelector('.message-input button');
const editButton = document.querySelector('.edit-button');
const releaseChatButton = document.querySelector('.release-chat-button');
const closeChatButton = document.querySelector('.close-chat-button');
const supportButton = document.querySelector('.support-button');
const connectionButton = document.querySelector('.connection-button');

// Обработчик нажатия на кнопку специалиста
specialistButton.addEventListener('click', () => {
    const activeChat = document.querySelector('.chat.active');
    if (activeChat) {
        const specialistName = specialistButton.textContent;
        const chatName = activeChat.querySelector('.chat-name').textContent;
        const confirmTransfer = confirm(`Вы уверены, что хотите передать чат "${chatName}" специалисту ${specialistName}?`);
        if (confirmTransfer) {
            // Код для передачи активного чата другому специалисту
            activeChat.remove();
            console.log(`Передача чата "${chatName}" специалисту ${specialistName}`);
        }
    }
});

// Обработчик нажатия на чат в списке
chatList.addEventListener('click', (event) => {
    const chat = event.target.closest('.chat');
    if (chat) {
        // Код для отображения сообщений выбранного чата
        console.log('Отображение сообщений выбранного чата');
        const activeChat = document.querySelector('.chat.active');
        if (activeChat) {
            activeChat.classList.remove('active');
        }
        chat.classList.add('active');
    }
});

// Обработчик нажатия на кнопку "Прошлый чат"
previousChatButton.addEventListener('click', () => {
    const activeChat = document.querySelector('.chat.active');
    if (activeChat) {
        const previousChat = activeChat.previousElementSibling;
        if (previousChat && previousChat.classList.contains('chat')) {
            // Код для переключения на предыдущий чат
            activeChat.classList.remove('active');
            previousChat.classList.add('active');
            console.log('Переключение на предыдущий чат');
        }
    }
});

// Обработчик нажатия на кнопку "Отправить"
sendButton.addEventListener('click', () => {
    const messageText = messageInput.value;
    if (messageText.trim() !== '') {
        // Код для отправки сообщения
        console.log(`Отправка сообщения: ${messageText}`);
        const activeChat = document.querySelector('.chat.active');
        if (activeChat) {
            const messageHistory = activeChat.querySelector('.message-history');
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.textContent = messageText;
            messageHistory.appendChild(messageElement);
        }
        messageInput.value = '';
    }
});

// Обработчик нажатия на кнопку "Редактировать"
editButton.addEventListener('click', () => {
    // Код для редактирования информации о клиенте
    console.log('Редактирование информации о клиенте');
});

// Обработчик нажатия на кнопку "Отказаться от чата"
releaseChatButton.addEventListener('click', () => {
    const activeChat = document.querySelector('.chat.active');
    if (activeChat) {
        const confirmRelease = confirm('Вы уверены, что хотите отказаться от этого чата?');
        if (confirmRelease) {
            // Код для отказа от чата
            activeChat.classList.remove('active');
            chatList.appendChild(activeChat);
            console.log('Отказ от чата');
        }
    }
});

// Обработчик нажатия на кнопку "Закрыть чат"
closeChatButton.addEventListener('click', () => {
    const activeChat = document.querySelector('.chat.active');
    if (activeChat) {
        const confirmClose = confirm('Вы уверены, что хотите закрыть этот чат?');
        if (confirmClose) {
            // Код для закрытия чата
            activeChat.remove();
            console.log('Закрытие чата');
        }
    }
});

// Обработчик нажатия на кнопку "Поддержка"
supportButton.addEventListener('click', () => {
    const activeChat = document.querySelector('.chat.active');
    if (activeChat) {
        const chatTypeIndicator = activeChat.querySelector('.chat-type-indicator');
        chatTypeIndicator.style.backgroundColor = 'blue';
        console.log('Изменение типа чата на "Поддержка"');
    }
});

// Обработчик нажатия на кнопку "Подключение"
connectionButton.addEventListener('click', () => {
    const activeChat = document.querySelector('.chat.active');
    if (activeChat) {
        const chatTypeIndicator = activeChat.querySelector('.chat-type-indicator');
        chatTypeIndicator.style.backgroundColor = 'green';
        console.log('Изменение типа чата на "Подключение"');
    }
});
