// NAVBAR ACTIVE ON SCROLL
const navBar = document.getElementById("navBar");
const logo = document.getElementById("logo");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    navBar.classList.add("active");
    logo.src = "assets/logo.png";
  } else {
    navBar.classList.remove("active");
    logo.src = "assets/logo-white.png";
  }
});

// TYPED.JS ANIMATIONS
var typedHome = new Typed("#typedHome", {
  strings: [
    "Latest cyber security technology",
    "Keep personal info private",
    "Protect your data from hackers",
    "Secure your online presence",
  ],
  typeSpeed: 30,
  backSpeed: 10,
  fadeOut: false,
  loop: true,
});

// ACCORDION ACTIONS  
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {
    accordionItems.forEach((otherItem) => {
      if (
        otherItem !== item &&
        otherItem.classList.contains("active")
      ) {
        otherItem.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});
