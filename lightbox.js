(() => {
  const box = document.getElementById("lightbox");
  const lightImg = document.getElementById("lightboxImg");
  if (!box || !lightImg) return;

  function open(src, alt) {
    lightImg.src = src;
    lightImg.alt = alt || "";
    box.classList.add("open");
    box.setAttribute("aria-hidden", "false");
  }

  function close() {
    box.classList.remove("open");
    box.setAttribute("aria-hidden", "true");
    lightImg.src = "";
    lightImg.alt = "";
  }

  // サムネ（作品画像）をクリックで開く
  document.querySelectorAll("img.zoomable").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      open(thumb.src, thumb.alt);
    });
  });

  // 背景クリックで閉じる
  box.addEventListener("click", close);

  // Escで閉じる（PC）
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && box.classList.contains("open")) close();
  });
})();
