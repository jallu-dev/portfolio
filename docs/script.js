const btnHome = document.querySelector(".nav-bar__nav-link--home");
const btnAbout = document.querySelector(".nav-bar__nav-link--about");
const btnSkills = document.querySelector(".nav-bar__nav-link--skills");
const btnContact = document.querySelector(".nav-bar__nav-link--contact");
const btnScrollBox = document.querySelector(".scroll-box");

const homeSection = document.querySelector(".section-header");
const aboutSection = document.querySelector(".section-about");
const skillsSection = document.querySelector(".section-skills");
const contactSection = document.querySelector(".section-contact");

const navbar = document.querySelector(".nav-bar");
const navlinks = document.querySelectorAll(".nav-bar__nav-link");

const image = document.querySelector(".big-box__image-box-image");
const responsiveIcons = document.querySelector(".big-box__about-responsive");

const technologyIcons = document.querySelector(".big-box__about-technology");
//SCROLLS
btnHome.addEventListener("click", (e) => {
  e.preventDefault();

  homeSection.scrollIntoView({ behavior: "smooth" });
});

btnAbout.addEventListener("click", (e) => {
  e.preventDefault();

  aboutSection.scrollIntoView({ behavior: "smooth" });
});
btnSkills.addEventListener("click", (e) => {
  e.preventDefault();

  skillsSection.scrollIntoView({ behavior: "smooth" });
});
btnContact.addEventListener("click", (e) => {
  e.preventDefault();

  contactSection.scrollIntoView({ behavior: "smooth" });
});

btnScrollBox.addEventListener("click", (e) => {
  e.preventDefault();

  aboutSection.scrollIntoView({ behavior: "smooth" });
});

//FIXED NAVIGATION BAR
const homeCallBackFunction = (entries, options) => {
  if (entries[0].isIntersecting === false) {
    navbar.style.position = "fixed";
    navbar.style.backgroundColor = "var(--color-primary-dark)";

    navlinks.forEach((link) => {
      link.style.color = "var(--color-grey-light-4)";

      link.addEventListener("mouseover", () => {
        link.style.color = "var(--color-grey-light-2)";
        link.style.borderBottom = "5px solid var(--color-grey-light-2)";
      });

      link.addEventListener("mouseout", () => {
        link.style.color = "var(--color-grey-light-4)";
        link.style.borderBottom = "none";
      });
    });
  } else {
    navbar.style.position = "absolute";
    navbar.style.backgroundColor = "transparent";
    navlinks.forEach((link) => {
      link.style.color = "var(--color-grey-dark-3)";

      link.addEventListener("mouseover", () => {
        link.style.color = "var(--color-primary)";
        link.style.borderBottom = "5px solid var(--color-primary)";
      });

      link.addEventListener("mouseout", () => {
        link.style.color = "var(--color-grey-dark-3)";
        link.style.borderBottom = "none";
      });
    });
  }
};
const homeoptions = {
  root: null,
  threshold: 0,
  rootMargin: "-10px",
};

const homeobserver = new IntersectionObserver(
  homeCallBackFunction,
  homeoptions
);
homeobserver.observe(homeSection);

// REVEAL SKILLS PAGE
const skillsCallBackFunction = (entries, options) => {
  if (entries[0].isIntersecting === true) {
    image.style.transform = "rotateX(0deg)";
    responsiveIcons.style.transform = "translateX(0)";
    technologyIcons.style.transform = "translateY(0)";
    skillsObserver.unobserve(skillsSection);
  }
};
const skillsOptions = {
  root: null,
  threshold: 0.6,
};

const skillsObserver = new IntersectionObserver(
  skillsCallBackFunction,
  skillsOptions
);

skillsObserver.observe(skillsSection);
