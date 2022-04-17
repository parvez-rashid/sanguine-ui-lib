const allStars = document.querySelectorAll(".star");
const currentRating = document.querySelector(".current-rating");

allStars.forEach((star, i) => {
  star.addEventListener("click", () => {
    let current_star = i + 1;
    currentRating.innerText = `${current_star} of 5`;

    allStars.forEach((star, j) => {
      current_star >= j + 1
        ? (star.innerHTML = "&#9733")
        : (star.innerHTML = "&#9734");
    });
  });
});
