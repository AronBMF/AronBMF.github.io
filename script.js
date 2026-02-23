const langBtn = document.getElementById("langToggle");
const printBtn = document.getElementById("printBtn");
let currentLang = "no";

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "no" ? "en" : "no";
  langBtn.textContent = currentLang === "no" ? "EN" : "NO";

  document.querySelectorAll("[data-no]").forEach(el => {
    el.textContent = el.dataset[currentLang];
  });
});

printBtn.addEventListener("click", () => {
  window.print();
});
