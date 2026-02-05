document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const toggle = document.getElementById("mobile-toggle");

  // Mobile toggle
  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("show");
  });

  // Close sidebar when clicking outside on mobile
  document.addEventListener("click", (e) => {
    if (
      window.innerWidth <= 768 &&
      sidebar.classList.contains("show") &&
      !sidebar.contains(e.target) &&
      e.target !== toggle
    ) {
      sidebar.classList.remove("show");
    }
  });

  // Active link highlight
  const links = document.querySelectorAll(".nav-link");
  const current = window.location.pathname.split("/").pop();
  links.forEach((link) => {
    if (link.getAttribute("href").endsWith(current)) {
      link.classList.add("active");
    }
  });

  // Collapsible sections
  const collapsibles = document.querySelectorAll(".collapsible h2");
  collapsibles.forEach((header) => {
    header.style.cursor = "pointer";
    const content = header.nextElementSibling;
    header.addEventListener("click", () => {
      if (content.style.display === "none") {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});
