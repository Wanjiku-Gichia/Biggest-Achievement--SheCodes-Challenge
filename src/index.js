function changeTheme(params) {
  let body = document.querySelector("body");
  body.classList.toggle("darkTheme");
}

let darkTheme = document.querySelector(".darkTheme");
darkTheme.addEventListener("click", changeTheme);

function userFeedback(event) {
  event.preventDefault();
  let feedbackInput = document.querySelector("#userFeedback");
  let feedback = feedbackInput.value;
  if (feedback.length > 0) {
    alert(`Thank you! Your feedback ("${feedback}") is very much appreciated.`);
    feedbackInput.value = "";
  } else {
    alert("please 🙏 give me some feedbak to help improve my project.");
  }
}
let feedback = document.querySelector("#submitFeedback");
feedback.addEventListener("click", userFeedback);
