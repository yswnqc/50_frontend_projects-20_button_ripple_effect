const button = document.querySelector("button");

const buttonTop = button.offsetTop;
const buttonLeft = button.offsetLeft;

button.addEventListener("click", (e) => {
  button.innerHTML = "Click Me";
  const x = e.clientX;
  const y = e.clientY;

  const xInside = x - buttonLeft;
  const yInside = y - buttonTop;

  const circle = document.createElement("span");
  circle.classList = "circle";

  circle.style.top = yInside + "px";
  circle.style.left = xInside + "px";

  e.target.append(circle);
});
