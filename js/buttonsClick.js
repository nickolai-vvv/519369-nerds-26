function logoClick() {
  document.querySelector(".header__logo").classList.add("header__logo-click");
}

document.onclick = function(){
  var target = event.target;

  if (!target.classList.contains("button")) return;

  target.classList.add("button-click");
}
