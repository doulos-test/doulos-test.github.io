document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  const dropdowns = document.querySelectorAll(".dropdown");

  // Mobile menu toggle
  menuToggle?.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  // Dropdown toggle buttons on mobile
  const submenuToggles = document.querySelectorAll(".submenu-toggle");

  submenuToggles.forEach(toggle => {
    toggle.addEventListener("click", e => {
      e.stopPropagation();
      const parent = toggle.closest(".dropdown");

      // Close other dropdowns
      dropdowns.forEach(drop => {
        if (drop !== parent) {
          drop.classList.remove("open");
        }
      });

      // Toggle this dropdown
      parent.classList.toggle("open");
    });
  });

  // Close all dropdowns if clicking outside
  document.addEventListener("click", () => {
    dropdowns.forEach(drop => drop.classList.remove("open"));
  });
});
