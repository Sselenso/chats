const myChatsButton = document.getElementById("general-chats-button");
const allChatsButton = document.getElementById("my-chats-button");
const chatListAll = document.querySelector(".chat-list-all");
const chatListSpec = document.querySelector(".chat-list-spec");
const greenBar = document.querySelector(".green-bar");
const blueBar = document.querySelector(".blue-bar");
const chatWindow = document.querySelector(".chat-window");
const chatInfoblock = document.querySelector(".user-info");
const clientBlock = document.querySelector(".client-details");
const chatAction = document.querySelector(".chat-actions-block");
const chat = document.querySelector(".chat");
const chatElements = document.querySelectorAll(".chat-list-all .chat");
const chatElementsAll = document.querySelectorAll(".chat-list-all .chat");
const messageTextSpec = document.querySelector(".specialist-message");
const supportButton = document.querySelector(".support-button");
const connectionButton = document.querySelector(".connection-button");
const closeChatButton = document.querySelector(".close-chat-button");
const releaseChatButton = document.querySelector(".release-chat-button");
const smallSupport = document.querySelector(".small-support");
const smallSales = document.querySelector(".small-sales");
const closeSmallButton = document.querySelector(".small-close");
const releaseSmallButton = document.querySelector(".small-transfer");
const specialistButtons = document.querySelectorAll(".specialist-button");
const searchCenter = document.querySelector(".search-center");
const confirmPopup = document.getElementById("confirmPopup");
const confirmYesButton = document.getElementById("confirmYes");
const confirmNoButton = document.getElementById("confirmNo");



myChatsButton.addEventListener("click", showMyChats);
allChatsButton.addEventListener("click", showAllChats);

function showMyChats() {
	chatListAll.style.display = "none";
	chatListSpec.style.display = "block";
	greenBar.style.display = "block";
	blueBar.style.display = "none";
}

function showAllChats() {
	const messageTextSpecList = document.querySelectorAll(".specialist-message");
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
	chatAction.style.display = "none";
}

// Перенос чата
chatElements.forEach((chatElement) => {
	chatElement.addEventListener("click", moveChatElement);
});

function moveChatElement(event) {
	const chat = event.target.closest(".chat");
	if (chatListAll.contains(chat)) {
		chatListAll.removeChild(chat);
		chatListSpec.appendChild(chat);
	}
}

const chatElementsSpec = document.querySelectorAll(".chat-list-spec");
chatElementsSpec.forEach((chatElement) => {
	chatElement.addEventListener("click", toggleChatStyle);
});

function toggleChatStyle() {
	const chat = event.target.closest(".chat");
	chatElements.forEach((chatElement) => {
		chatElement.classList.remove("active");
	});
	chat.classList.add("active");
	searchCenter.style.display ="block";
	chatWindow.style.display = "block";
	chatInfoblock.style.display = "block";
	clientBlock.style.display = "block";
	chatAction.style.display = "block";
}

//Отказаться от чата
releaseChatButton.addEventListener("click", releaseChat);
releaseSmallButton.addEventListener("click", releaseChat);

function releaseChat() {
	const activeChat = document.querySelector(".chat.active");
	const messageTextSpecList = document.querySelectorAll(".specialist-message");
	const messageTextSpec = messageTextSpecList[messageTextSpecList.length - 1];
	for (let i = 2; i < messageTextSpecList.length; i++) {
		messageTextSpecList[i].remove();
	}
	if (activeChat) {
		chatListAll.appendChild(activeChat);
		activeChat.classList.remove("active");
		searchCenter.style.display ="none";
		chatWindow.style.display = "none";
		chatInfoblock.style.display = "none";
		clientBlock.style.display = "none";
		chatAction.style.display = "none";
		messageTextSpec.style.display = "none";
	}
}

//Закрыть чат
closeChatButton.addEventListener("click", showConfirmPopup);
closeSmallButton.addEventListener("click", showConfirmPopup);
confirmYesButton.addEventListener("click", closeChat);
confirmNoButton.addEventListener("click", closeConfirmPopup);

function showConfirmPopup() {
  confirmPopup.style.display = "block";
}

function closeConfirmPopup() {
  confirmPopup.style.display = "none";
}

function closeChat() {
  const activeChat = document.querySelector(".chat.active");
  const messageTextSpecList = document.querySelectorAll(".specialist-message");
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
    messageTextSpec.style.display = "none";
		searchCenter.style.display ="none";
  }
  closeConfirmPopup();
}

//Смена типа чата
function changeChatType(color) {
	const activeChat = document.querySelector(".chat.active");
	if (activeChat) {
		const chatTypeIndicator = activeChat.querySelector(".chat-type-indicator");
		chatTypeIndicator.style.backgroundColor = color;
	}
}
supportButton.addEventListener("click", () => {
	changeChatType("#35add1");
});
smallSupport.addEventListener("click", () => {
	changeChatType("#35add1");
});

function changeChatType(color) {
	const activeChat = document.querySelector(".chat.active");
	if (activeChat) {
		const chatTypeIndicator = activeChat.querySelector(".chat-type-indicator");
		chatTypeIndicator.style.backgroundColor = color;
	}
}
connectionButton.addEventListener("click", () => {
	changeChatType("#66cc66");
});
smallSales.addEventListener("click", () => {
	changeChatType("#66cc66");
});

//Передача чата
let lastButtonClickTime = 0;
const BUTTON_CLICK_TIMEOUT = 1000;
specialistButtons.forEach((button) => {
	button.addEventListener("click", handleSpecialistButton);
});

function handleSpecialistButton(event) {
	const targetButton = event.target;
	if (!targetButton.classList.contains("specialist-button")) {
		return;
	}
	const parentElement = targetButton.parentElement;
	const chatCount = parentElement.querySelector(".chat-count");
	let count = parseInt(chatCount.textContent);
	if (count === 6) {
		return;
	}
	const currentTime = Date.now();
	const timeSinceLastClick = currentTime - lastButtonClickTime;
	if (timeSinceLastClick < BUTTON_CLICK_TIMEOUT) {
		targetButton.classList.add("blue-bg");
		clearTimeout(targetButton.timer);
		targetButton.timer = null;
		const activeChat = document.querySelector(".chat.active");
		if (activeChat) {
			const messageTextSpecList = document.querySelectorAll(".specialist-message");
			for (let i = 2; i < messageTextSpecList.length; i++) {
				messageTextSpecList[i].remove();
			}
			activeChat.remove();
			messageTextSpec.remove();
			searchCenter.style.display ="none";
			chatWindow.style.display = "none";
			chatInfoblock.style.display = "none";
			clientBlock.style.display = "none";
			messageTextSpec.style.display = "none";
			chatAction.style.display = "none";
			count++;
			chatCount.textContent = count;
			specialistButtons.forEach((button) => {
				button.classList.remove("blue-bg");
				clearTimeout(button.timer);
				button.timer = null;
			});
		}
	} else {
		specialistButtons.forEach((button) => {
			button.classList.remove("blue-bg");
			clearTimeout(button.timer);
			button.timer = null;
		});
		targetButton.classList.add("blue-bg");
		targetButton.timer = setTimeout(() => {
			targetButton.classList.remove("blue-bg");
			targetButton.timer = null;
		}, BUTTON_CLICK_TIMEOUT);
	}

	lastButtonClickTime = currentTime;
}