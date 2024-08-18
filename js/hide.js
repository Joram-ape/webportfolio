document.addEventListener("DOMContentLoaded", function () {
  let header = document.getElementById("hide");

  document.addEventListener("scroll", function () {
    let scrollPosition = window.pageYOffset;

    // Calculate whether the scroll it 350px or not then set the opacity to face the header out
    if (scrollPosition <= 100) {
      header.style.opacity = 1 - scrollPosition / 100;
    } else {
      header.style.opacity = 0;
    }
  });

  const portfolioNavigate = () => {
    let sections = ["project1", "project2", "project3", "project4"];
    sections.forEach((sectionId) => {
      let sectionSelect = document.getElementById(sectionId);
      if (sectionSelect) {
        sectionSelect.style.display = "none";
      }
    });
  };

  const onclickNavigation0 = () => {
    portfolioNavigate();
    let project1Content0 = document.getElementById("project1");
    if (project1Content0) {
      project1Content0.style.display = "block";
      project1Content0.class = "active";
    }
  };

  const onclickNavigation1 = () => {
    portfolioNavigate();
    let project1Content1 = document.getElementById("project2");
    if (project1Content1) {
      project1Content1.style.display = "block";
      project1Content1.class = "active";
    }
  };
});
