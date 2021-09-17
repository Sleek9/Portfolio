//Observer para la secion de Sobre Mi (about)
const $about = document.querySelector(".about");
const $aboutTitle = document.querySelector(".about-info h2");

const observerElement = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      $aboutTitle.classList.add("animation");
      observer.disconnect();
    }
  });
};

const observer = new IntersectionObserver(observerElement, {
  root: null,
  threshold: 0.3,
});

observer.observe($about);

//Observer para la secion de Habilidades (Skills)
const $skills = document.querySelector(".skills");
const $skillsTitle = document.querySelector(".skills h2");

const observerElement = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      $skillsTitle.classList.add("animation");
      observer.disconnect();
    }
  });
};

const observer = new IntersectionObserver(observerElement, {
  root: null,
  threshold: 0.2,
});

observer.observe($skills);
