const taxiContainer = document.querySelector(".taxi-container");
let position = 0;
let direction = 1;

setInterval(() => {
  position += direction * 5;
  taxiContainer.style.left = `${position}px`;

  if (position > 200) {
    direction = -1;
    taxiContainer.style.transform = "scaleX(-1)";
  } else if (position < 0) {
    direction = 1;
    taxiContainer.style.transform = "scaleX(1)";
  }
}, 50);