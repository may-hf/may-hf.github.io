(() => {
  // スマホでは無効にしたいなら true のままでOK
  const disableOnMobile = true;
  const mobileQuery = window.matchMedia("(max-width: 767px)");

  function enabled() {
    return !(disableOnMobile && mobileQuery.matches);
  }

  const box = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  if (!box || !img) return;

  // クリックで閉じる
  box.addEventListener("click", () => {
    box.classList.remove("open");
    box.setAttribute("aria-hidden", "true");
    img.src = "";
  });

  // ESCで閉じる
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && box.classList.contains("open")) {
      box.click();
    }
  });

  // 作品画像クリックで開く
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!enabled()) return;

    if (target && target.classList && target.classList.contains("zoomable")) {
      e.preventDefault();
      img.src = target.src;  // 同じ画像を拡大表示（高解像を別にしたいならここ変える）
      img.alt = target.alt || "";
      box.classList.add("open");
      box.setAttribute("aria-hidden", "false");
    }
  });
})();
