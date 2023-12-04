document.addEventListener("DOMContentLoaded", function () {
    const filterLinks = document.querySelectorAll(".filter-item a");
  
    filterLinks.forEach(function (link) {
      link.addEventListener("click", (event) => {
        event.preventDefault();
  
        // Toggle 'active' class on the clicked filter link
        link.parentElement.classList.toggle("active");
  
        // Get all active categories
        const activeCategories = Array.from(document.querySelectorAll(".filter-item.active"))
          .map((activeLink) => activeLink.querySelector("a").getAttribute("href").substring(1));
  
        // Call a function to filter projects based on the active categories
        filterProjects(activeCategories);
      });
    });
  });
  
  // Function to filter projects
  function filterProjects(activeCategories) {
    const projects = document.querySelectorAll(".style1"); // Select projects based on your class
  
    projects.forEach(function (project) {
      const projectCategory = project.getAttribute("data-category");
  
      // Check if the project's category is included in the array of active categories
      if (activeCategories.length === 0 || activeCategories.includes(projectCategory)) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  }
  