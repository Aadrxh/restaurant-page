export default function loadHome() {
  const content = document.getElementById("content");
  const homeDiv = document.createElement("div");
  homeDiv.textContent = "Welcome to our restaurant!";
  content.appendChild(homeDiv);
}
