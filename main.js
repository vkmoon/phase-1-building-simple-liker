// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

document.querySelector(".like-glyph").addEventListener("click", toggleHeart);

function toggleHeart(e) {
  const heart = e.target;
  if (heart.getAttribute("heart-status") === "empty") {
    mimicServerCall()
      .then(() => fullHeart(heart))
      .catch(() => showErrorMessage());
  } else {
    emptyHeart(heart);
  }
}

function fullHeart(heart) {
  heart.innerText = FULL_HEART;
  heart.classList.add("activated-heart");
  heart.setAttribute("heart-status", "full");
}

function emptyHeart(heart) {
  heart.innerText = EMPTY_HEART;
  heart.classList.remove("activated-heart");
  heart.setAttribute("heart-status", "empty");
}

function showErrorMessage() {
  const modal = document.getElementById("modal");
  modal.classList.remove("hidden");
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 3000);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
