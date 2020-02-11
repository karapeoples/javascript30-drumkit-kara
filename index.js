window.addEventListener("keydown", playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  !audio ? null : ((audio.currentTime = 0), audio.play(), key.classList.add("playing"));
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

function removeTransition(e) {
  e.propertyName !== "transform" ? null : this.classList.remove("playing");
}