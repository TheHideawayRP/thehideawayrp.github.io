// ============================
// YEAR
// ============================
document.getElementById("year").textContent = new Date().getFullYear();

// ============================
// COPY TO CLIPBOARD
// ============================
const toast = document.getElementById("toast");
let toastTimer;

function showToast(text = "Copied") {
  toast.textContent = text;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1200);
}

document.querySelectorAll("[data-copy]").forEach(btn => {
  btn.addEventListener("click", async () => {
    const value = btn.getAttribute("data-copy");
    try {
      await navigator.clipboard.writeText(value);
      showToast();
    } catch {
      const t = document.createElement("textarea");
      t.value = value;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      document.body.removeChild(t);
      showToast();
    }
  });
});

// ============================
// GALLERY (STATIC MANIFEST)
// ============================
const galleryImages = [
  "gallery-1.png",
  "gallery-2.png",
  "gallery-3.png",
  "gallery-4.png",
  "gallery-5.png",
  "gallery-6.png"
];

const grid = document.getElementById("galleryGrid");

if (grid) {
  galleryImages.forEach(file => {
    const img = document.createElement("img");
    img.src = `images/${file}`;
    img.alt = "The Hideaway Roleplay screenshot";
    img.loading = "lazy";
    img.className = "gallery-img";
    grid.appendChild(img);
  });
}
