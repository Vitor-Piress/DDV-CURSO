const mobileMenu = document.getElementById("overlay-container");
const menuBtn = document.getElementById("menu-img");
const overlayContent = document.getElementById("overlay-content");

menuBtn.addEventListener("click", () => {
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    overlayContent.style.animation = "fadeIn 0.2s ease-in-out forwards";
  } else {
    overlayContent.style.animation = "fadeOut 0.2s ease-in-out forwards";

    overlayContent.addEventListener(
      "animationend",
      () => {
        mobileMenu.classList.add("hidden");
      },
      { once: true },
    );
  }
});
