// ── Language toggle ──
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

// ── Print ──
printBtn.addEventListener("click", () => {
  window.print();
});

// ── Lightbox ──
const lightbox   = document.getElementById("lightbox");
const lbFrame    = document.getElementById("lbFrame");
const lbBackdrop = document.getElementById("lbBackdrop");
const lbClose    = document.getElementById("lbClose");

function openLightbox(src) {
  lbFrame.src = src;
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("active");
  lbFrame.src = "";
  document.body.style.overflow = "";
}

document.querySelectorAll(".video-thumb").forEach(thumb => {
  thumb.addEventListener("click", () => openLightbox(thumb.dataset.src));
});

lbBackdrop.addEventListener("click", closeLightbox);
lbClose.addEventListener("click", closeLightbox);

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeLightbox();
});
