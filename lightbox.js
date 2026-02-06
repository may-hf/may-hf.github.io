(() => {
  const box = document.getElementById("lightbox");
  const lightImg = document.getElementById("lightboxImg");
  const caption = document.getElementById("lightboxCaption");
  if (!box || !lightImg || !caption) return;

  function getTitle(thumb) {
    // 1) data-title があればそれ
    if (thumb.dataset && thumb.dataset.title) return thumb.dataset.title;

    // 2) 同じカード内の .caption を拾う（あなたのHTML構造に合うはず）
    const card = thumb.closest(".card");
    const capEl = card ? card.querySelector(".caption") : null;
    if (capEl && capEl.textContent.trim()) return capEl.textContent.trim();

    // 3) 最後の手段：alt
    return thumb.alt || "";
  }

  function open(thumb) {
    lightImg.src = thumb.src;
    caption.textContent = getTitle(thumb);
    box.classList.add("open");
    box.setAttribute("aria-hidden", "false");
  }

  function close() {
    box.classList.remove("open");
    box.setAttribute("aria-hidden", "true");
    lightImg.src = "";
    caption.textContent = "";
  }

  // クリックで開く
  document.querySelectorAll("img.zoomable").forEach((thumb) => {
    thumb.addEventListener("click", () => open(thumb));
  });

  // 背景クリック（黒いところ）だけで閉じる：中身クリックでは閉じない
  box.addEventListener("click", (e) => {
    if (e.target === box) close();
  });

  // Escで閉じる
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && box.classList.contains("open")) close();
  });
})();
