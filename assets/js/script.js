// Get the buttons and chat lists
const myChatsButton = document.getElementById("general-chats-button");
const allChatsButton = document.getElementById("my-chats-button");
const chatListAll = document.querySelector(".chat__list-all");
const chatListSpec = document.querySelector(".chat__list-spec");
const greenBar = document.querySelector(".green-bar");
const blueBar = document.querySelector(".blue-bar");
const chatWindow = document.querySelector(".chat-window");
const chatInfoblock = document.querySelector(".user__info");
const clientBlock = document.querySelector(".client-details");
const chatAction = document.querySelector(".chat-actions-block");
const chat = document.querySelector(".chat");
const supportButton = document.querySelector(".support-button");
const connectionButton = document.querySelector(".connection-button");
const chatElements = document.querySelectorAll(".chat__list-all .chat");
const messageTextSpec = document.querySelector (".specialist-message")



// Add click event listeners to the buttons
myChatsButton.addEventListener("click", showMyChats);
allChatsButton.addEventListener("click", showAllChats);

// Function to show "Мои чаты"
function showMyChats() {

	chatListAll.style.display = "none";
	chatListSpec.style.display = "block";
	greenBar.style.display = "block";
	blueBar.style.display = "none";
}

// Function to show "Общие чаты"
function showAllChats() {


	const messageTextSpecList = document.querySelectorAll('.specialist-message'); 
	for (let i = 2; i < messageTextSpecList.length; i++) {
		messageTextSpecList[i].remove();
	}

	chatListAll.style.display = "block";
	chatListSpec.style.display = "none";
	greenBar.style.display = "none";
	blueBar.style.display = "block";
	chatWindow.style.display = "none";
	chatWindow.style.display = "none";
	chatInfoblock.style.display = "none";
	clientBlock.style.display = "none";
	chatAction.style.display = "none	";

}


const chatElementsAll = document.querySelectorAll(".chat__list-all .chat");

chatElementsAll.forEach((chatElement) => {
	chatElement.addEventListener("click", moveChatElement);
});

// Function to move chat element
function moveChatElement(event) {
	const chat = event.target.closest(".chat");
	if (chatListAll.contains(chat)) {
				chatListAll.removeChild(chat); 
		chatListSpec.appendChild(chat); 
	}
}

const chatElementsSpec = document.querySelectorAll(".chat__list-spec");

// Loop through each chat element
chatElementsSpec.forEach((chatElement) => {
	// Add double-click event listener to each chat element
	chatElement.addEventListener("click", toggleChatStyle);
});

// Function to toggle chat style
function toggleChatStyle() {
	const chat = event.target.closest(".chat");
	chatElements.forEach((chatElement) => {
		chatElement.classList.remove("active");
	});

	chat.classList.add("active");	
	chatWindow.style.display = "block";
	chatInfoblock.style.display = "block";
	clientBlock.style.display = "block";
	chatAction.style.display = "block";
}

//Function release chat
const releaseChatButton = document.querySelector('.release-chat-button');
releaseChatButton.addEventListener('click', releaseChat);

function releaseChat() {
  const activeChat = document.querySelector('.chat.active');
  const messageTextSpecList = document.querySelectorAll('.specialist-message');
  const messageTextSpec = messageTextSpecList[messageTextSpecList.length - 1];
  for (let i = 2; i < messageTextSpecList.length; i++) {
		messageTextSpecList[i].remove();
	}

  if (activeChat) {
    chatListAll.appendChild(activeChat);
    activeChat.classList.remove('active');
    chatWindow.style.display = 'none';
    chatInfoblock.style.display = 'none';
    clientBlock.style.display = 'none';
    chatAction.style.display = 'none';
    messageTextSpec.style.display = 'none';
  }
}


//Function delete chat

const closeChatButton = document.querySelector(".close-chat-button");
closeChatButton.addEventListener("click", closeChat);

function closeChat() {
	const activeChat = document.querySelector(".chat.active");
	const messageTextSpecList = document.querySelectorAll('.specialist-message');
  const messageTextSpec = messageTextSpecList[messageTextSpecList.length - 1];
	for (let i = 2; i < messageTextSpecList.length; i++) {
		messageTextSpecList[i].remove();
	}

	if (activeChat) {
		activeChat.style.display = "none";
		chatWindow.style.display = "none";
		chatInfoblock.style.display = "none";
		clientBlock.style.display = "none";
		chatAction.style.display = "none";
		messageTextSpec.style.display = 'none';
  
	}
}


//Function change type of chat
supportButton.addEventListener('click', () => {
	const activeChat = document.querySelector('.chat.active');
	if (activeChat) {
			const chatTypeIndicator = activeChat.querySelector('.chat-type-indicator');
			chatTypeIndicator.style.backgroundColor = '#35add1';
			
	}
});

// Обработчик нажатия на кнопку "Подключение"
connectionButton.addEventListener('click', () => {
	const activeChat = document.querySelector('.chat.active');
	if (activeChat) {
			const chatTypeIndicator = activeChat.querySelector('.chat-type-indicator');
			chatTypeIndicator.style.backgroundColor = "#66cc66";
			
	}
});

//Function transfer chat

const specialistButtons = document.querySelectorAll('.specialist-button');
specialistButtons.forEach(button => {
  button.addEventListener('click', transferChat);
});

function transferChat(event) {
  const activeChat = document.querySelector('.chat.active');
  const messageTextSpecList = document.querySelectorAll('.specialist-message');
  const messageTextSpec = messageTextSpecList[messageTextSpecList.length - 1];
	for (let i = 2; i < messageTextSpecList.length; i++) {
		messageTextSpecList[i].remove();
	}

  const targetButton = event.target;
  if (!targetButton.classList.contains('specialist-button')) {
    return;
  }

  const parentElement = targetButton.parentElement;
  const chatCount = parentElement.querySelector('.chat-count');

  let count = parseInt(chatCount.textContent);
  if (count === 6) {		        
    return; 
  }

  if (activeChat) {
    activeChat.remove(); // Remove the active chat element
		messageTextSpec.remove();
    // Hide other related elements
    chatWindow.style.display = 'none';
    chatInfoblock.style.display = 'none';
    clientBlock.style.display = 'none';  
    messageTextSpec.style.display = 'none';

    count++;
    chatCount.textContent = count;
  }
}


