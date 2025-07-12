export default function loadContact() {
  const content = document.getElementById("content");
  const contactDiv = document.createElement("div");
  contactDiv.textContent = "Contact us at food@example.com";
  content.appendChild(contactDiv);
}
