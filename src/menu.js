export default function loadMenu() {
  const content = document.getElementById("content");
  const menuDiv = document.createElement("div");
  menuDiv.textContent = "Here's our delicious menu!";
  content.appendChild(menuDiv);
}
