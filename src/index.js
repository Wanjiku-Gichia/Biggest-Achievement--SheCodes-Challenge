function changeTheme(params) {
  let body = document.querySelector("body");
  body.classList.toggle("darkTheme");
}

let darkTheme = document.querySelector(".darkTheme");
darkTheme.addEventListener("click", changeTheme);
