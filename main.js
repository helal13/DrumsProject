function playsound(e) {
  const sound = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key = "${e.keyCode}"]`);
  if (!sound) return;

  sound.play();
  sound.currentTime = 0;
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  addEventListener("transitionend", removeTransition);
});

window.addEventListener("keydown", playsound);
