const pages = document.querySelectorAll(".page");
const book = document.getElementById("book");
const music = document.getElementById("bgMusic");

let current = 0;
let musicStarted = false;

book.addEventListener("click", () => {
  if (!musicStarted) {
    music.play().catch(() => {});
    musicStarted = true;
  }
  flipNext();
});

let startX = 0;

book.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

book.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) flipNext();
  if (endX - startX > 50) flipPrev();
});

function flipNext() {
  if (current < pages.length) {
    pages[current].classList.add("flipped");
    current++;
  } else {
    resetBook();
  }
}

function flipPrev() {
  if (current > 0) {
    current--;
    pages[current].classList.remove("flipped");
  }
}

function resetBook() {
  pages.forEach((p) => p.classList.remove("flipped"));
  current = 0;
}
