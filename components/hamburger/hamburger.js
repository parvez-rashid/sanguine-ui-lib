function hamburgerTop() {
  const navLinks = document.querySelector("#nav-links");
  if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "block";
  }
}

const navIcon = document.querySelector("#nav-icon");
navIcon.addEventListener("click", hamburgerTop);
