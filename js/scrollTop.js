const btn = document.querySelector(".scroll-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 80) btn.style.display = "block";
  else btn.style.display = "none";
});

btn.addEventListener("click", () => {
  document.body.scrollTop = 0; //Safari
  document.documentElement.scrollTop = 0; //Other browsers
});
