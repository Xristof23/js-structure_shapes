import getRandomColor from "../../utils/randomColor.js";

export default function Pentagon() {
  const pentagon = document.createElement("funfeck");
  pentagon.classList.add("pentagon");
  pentagon.addEventListener("click", () => {
    pentagon.style.backgroundColor = getRandomColor();
  });
  return pentagon;
}
