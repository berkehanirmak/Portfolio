document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".project");
  const photo1 = document.getElementById("photo1");

  projects.forEach((project) => {
    project.addEventListener("mouseenter", function () {
      if (project !== photo1) {
        photo1.classList.add("hidden");
      }
    });

    project.addEventListener("mouseleave", function () {
      if (project !== photo1) {
        photo1.classList.remove("hidden");
      }
    });
  });
});
