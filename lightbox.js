(() => {
  const box = document.getElementById("lightbox");
  const lightImg = document.getElementById("lightboxImg");
  const caption = document.getElementById("lightboxCaption");
  if (!box || !lightImg || !caption) return;

  function open(src, alt) {
    lightImg.src = src;
    caption.textContent = alt || "";
    box.classList.add("open");
    box.setAttribute("aria-hidden", "false");
  }

  function close() {
    box.classList.remove("open");
    box.setAttribute("aria-hidden", "true");
    lightImg.src = "";
    caption.textContent = "";
  }

  document.querySelectorAll("img.zoomable").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      open(thumb.src, thumb.alt);
    });
  });

  box.addEventListener("click", close);
})();
