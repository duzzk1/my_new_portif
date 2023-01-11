const portfolioBtn = document.querySelectorAll(".projetos_lateral img");
const iframes = document.querySelectorAll(".projetos_central iframe");
const header = document.querySelector("header");

for (let i = 0; i < portfolioBtn.length; i++) {
  portfolioBtn[i].addEventListener("click", function () {
    if (iframes[i].style.display != "block") {
      iframes[i].style.display = "block";
    } else if (iframes[i].style.display != "none") {
      iframes[i].style.display = "none";
    }
  });
}

addEventListener("scroll", (event) => {
  if (window.scrollY > 45) {
    header.style.opacity = 0.5;
  } else {
    header.style.opacity = 1;
  }
});
