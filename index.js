const navBar = document.querySelector(".nav__list");
const navToggle = document.querySelector(".mobile-navigation-button");

navToggle.addEventListener("click", () => {
    const visibility = navBar.getAttribute("data-visible");
    console.log(typeof visibility)
    if (visibility === "false") {
        navBar.setAttribute("data-visible", "true");
        navToggle.setAttribute("data-visible", "true");
    } else {
        navBar.setAttribute("data-visible", "false");
        navToggle.setAttribute("data-visible", "false")
    }
})

// Stop animations from happening on window resize
let resizeTimer;
window.addEventListener("resize", () => {
  navBar.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    navBar.classList.remove("resize-animation-stopper");
  }, 400);
});