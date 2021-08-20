let icon = document.querySelector(".burger");
let nav = document.querySelector(".nav");

let showNav = () => {
  if (icon.getAttribute("src") === "./images/icon-hamburger.svg") {
    icon.setAttribute("src", "./images/icon-close.svg");
    nav.style.top = "72px";
    document.body.style.overflow = "hidden";
  } else {
    icon.setAttribute("src", "./images/icon-hamburger.svg");
    nav.style.top = "-100%";
    document.body.style.overflow = "visible";
  }
};

icon.addEventListener("click", showNav);
