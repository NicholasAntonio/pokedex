const changeThemeButton = document.getElementById("change-theme-button");
const body = document.querySelector("body");
const buttonImg = document.querySelector(".img-button");

changeThemeButton.addEventListener("click", () => {
  const DarkModeOn = body.classList.contains("dark-mode");

  body.classList.toggle("dark-mode");

  if (DarkModeOn) {
    buttonImg.setAttribute("src", "./src/imagens/sun.png");
  } else {
    buttonImg.setAttribute("src", "./src/imagens/moon.png");
  }
});
