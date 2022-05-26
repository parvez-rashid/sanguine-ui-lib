const modal = document.querySelector(".modal");
const btn = document.querySelector("#modal-open");
const approve = document.querySelector("#modal-approve");
const span = document.querySelector("#modal-close");

btn.addEventListener("click", () => {
  console.log("clicked");
  modal.style.display = "block";
});

span.addEventListener("click", () => {
  console.log("clicked");
  modal.style.display = "none";
});

approve.addEventListener("click", () => {
  console.log("clicked");
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
