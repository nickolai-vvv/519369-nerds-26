var link = document.querySelector(".map-window__button");
var popup = document.querySelector(".write-us");
var close = document.querySelector(".write-us__close");

var form = popup.querySelector("form");
var firstName = popup.querySelector("[id=send-name]");
var email = popup.querySelector("[id=send-email]");
var text = popup.querySelector("[id=send-message]");

// Открываем popup при нажатии на ссыку "Напишите нам"
link.addEventListener("click", function (evt) {
  evt.preventDefault();

  popup.classList.add("write-us-show");
  // firstName.focus();
});

// Обработка закрытия popup'a.
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("write-us-show");
  popup.classList.remove("write-us-error");

});

// Обработка неверно заполненной формы popup'a.
form.addEventListener("submit", function (evt) {
  if(!firstName.value || !email.value || !text.value){
    evt.preventDefault();

    popup.classList.remove("write-us-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("write-us-error");
  }//if
});

// Обработка нажатия клавиши ESC при открытом popup'e
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("write-us-show")) {
      popup.classList.remove("write-us-show");
      popup.classList.remove("write-us-error");
    }
  }
});
