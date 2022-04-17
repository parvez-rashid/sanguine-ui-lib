const btnCentre = document.querySelector("#btn-toast-centre");
const btnLeft = document.querySelector("#btn-toast-left");
const btnRight = document.querySelector("#btn-toast-right");
const toastCentre = document.querySelector("#toast-centre");
const toastLeft = document.querySelector("#toast-left");
const toastRight = document.querySelector("#toast-right");
const toast = document.querySelectorAll(".toast");

btnCentre.addEventListener("click", () => {
  toastCentre.style.visibility = "visible";
  setTimeout(() => (toastCentre.style.visibility = "hidden"), 3000);
});

btnLeft.addEventListener("click", () => {
  toastLeft.style.visibility = "visible";
  setTimeout(() => (toastLeft.style.visibility = "hidden"), 3000);
});

btnRight.addEventListener("click", () => {
  toastRight.style.visibility = "visible";
  setTimeout(() => (toastRight.style.visibility = "hidden"), 3000);
});

close.addEventListener("click", () => {
  toast.style.visibility = "hidden";
});
