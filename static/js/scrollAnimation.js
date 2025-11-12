document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85; // 85% from top of screen

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("visible");
      } else {
        section.classList.remove("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
