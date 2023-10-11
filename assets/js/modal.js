// Получаем элементы кнопок
var fileButton = document.querySelector('.file-button');
var emodjiButton = document.querySelector('.emodji-button');

// Получаем модальные окна
var fileModal = document.querySelector('.file-modal');
var emodjiModal = document.querySelector('.emodji-modal');

// Обработчик события для кнопки загрузки файлов
fileButton.addEventListener('click', function() {
  fileModal.style.display = 'block';
});

// Обработчик события для кнопки эмодзи
emodjiButton.addEventListener('click', function() {
  emodjiModal.style.display = 'block';
});

// Закрываем модальные окна при клике вне них
window.addEventListener('click', function(event) {
  if (event.target == fileModal || event.target == emodjiModal) {
    fileModal.style.display = 'none';
    emodjiModal.style.display = 'none';
  }
});
