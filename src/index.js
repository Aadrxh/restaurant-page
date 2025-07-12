console.log("chips khao")
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function clearContent() {
  document.getElementById("content").textContent = "";
}

function addNavEvents() {
  document.getElementById("homeBtn").addEventListener("click", () => {
    clearContent();
    loadHome();
  });

  document.getElementById("menuBtn").addEventListener("click", () => {
    clearContent();
    loadMenu();
  });

  document.getElementById("contactBtn").addEventListener("click", () => {
    clearContent();
    loadContact();
  });
}

//default
loadHome();
addNavEvents();
