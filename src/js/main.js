document.addEventListener("DOMContentLoaded", () => {
  // Scroll Reveal Animation
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // Only animate once
        }
      });
    },
    {
      root: null,
      threshold: 0.15, // Trigger when 15% visible
      rootMargin: "0px",
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // Navbar Scroll Effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(15, 23, 42, 0.95)";
      navbar.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
    } else {
      navbar.style.background = "rgba(15, 23, 42, 0.9)";
      navbar.style.boxShadow = "none";
    }
  });

  // Mobile Menu Toggle
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");

      // Hamburger Animation (Optional - specific span manipulation if desired, currently CSS handles opacity/rotation via class if set, otherwise simple toggle)
    });

    // Close menu when clicking a link
    document.querySelectorAll(".mobile-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
      });
    });
  }
});
