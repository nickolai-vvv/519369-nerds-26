var link = document.querySelector(".map-window__button");
var popup = document.querySelector(".write-us");
var close = document.querySelector(".write-us__close");

var inputsInPopup = document.querySelectorAll("write-us__input");
var form = popup.querySelector("form");
var firstName = popup.querySelector("[id=send-name]");
var email = popup.querySelector("[id=send-email]");
var text = popup.querySelector("[id=send-message]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();

  popup.classList.add("write-us-show");
  // firstName.focus();

  inputsInPopup.forEach(function (item) {
    item.classList.add("write-us__input-error")
  });
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("write-us-show");
  popup.classList.remove("write-us-error");

});

form.addEventListener("submit", function (evt) {
  if(!firstName.value || !email.value || !text.value){
    evt.preventDefault();

    popup.classList.remove("write-us-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("write-us-error");

    // for(var i = 0; i < inputsInPopup.length; i++){
    //   if(!inputsInPopup[i].value){
    //     inputsInPopup[i].classList.add("write-us__input-error");
    //   }
    // }

    // inputsInPopup.forEach(elem, function () {
    //   if(!elem.value){
    //     elem.classList.add("write-us__input-error");
    //   }
    // })
  }//if
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("write-us-show")) {
      popup.classList.remove("write-us-show");
      popup.classList.remove("write-us-error");
    }
  }
});
