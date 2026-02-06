(() => {
  const box = document.getElementById("lightbox");
  const lightImg = document.getElementById("lightboxImg");
  if (!box || !lightImg) return;

  // 開く
  document.querySelectorAll("img.zoomable").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      lightImg.src = thumb.src;
      box.classList.add("open");
      box.setAttribute("aria-hidden", "false");
    });
  });

  // 閉じる（背景タップ）
  box.addEventListener("click", () => {
    box.classList.remove("open");
    box.setAttribute("aria-hidden", "true");
    lightImg.src = "";
  });

  // 閉じる（Esc）
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && box.classList.contains("open")) {
      box.classList.remove("open");
      box.setAttribute("aria-hidden", "true");
      lightImg.src = "";
    }
  });
})();
