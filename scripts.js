// Animaciones adicionales (opcional)
document.addEventListener("DOMContentLoaded", function () {
    const skills = document.querySelectorAll(".skill");
    skills.forEach((skill) => {
      skill.addEventListener("mouseenter", () => {
        skill.style.backgroundColor = "#bdc3c7";
      });
      skill.addEventListener("mouseleave", () => {
        skill.style.backgroundColor = "#ecf0f1";
      });
    });
  });