const $bg = document.querySelectorAll(".bg");

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  $bg[0].style.transform = `translate(0px, ${-y / 20}%)`;
  $bg[1].style.transform = `translate(0px, ${-y / 60}%)`;
});
