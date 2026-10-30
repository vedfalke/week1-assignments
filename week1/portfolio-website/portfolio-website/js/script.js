(() => {
  const root = document.documentElement;
  const themeButtons = document.querySelectorAll(".theme-toggle");
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme === "dark" || savedTheme === "light") root.dataset.theme = savedTheme;
  const updateThemeIcon = () => {
    themeButtons.forEach((button) => {
      const icon = button.querySelector(".theme-icon");
      if (icon) icon.textContent = root.dataset.theme === "dark" ? "☀" : "☾";
      button.setAttribute("aria-label", root.dataset.theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
    });
  };
  updateThemeIcon();
  themeButtons.forEach((button) => button.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("portfolio-theme", root.dataset.theme);
    updateThemeIcon();
  }));

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }));
    document.addEventListener("click", (event) => {
      if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          instance.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const filterButtons = document.querySelectorAll("[data-filter]");
  const projectCards = document.querySelectorAll(".projects-page-grid [data-category]");
  const emptyState = document.querySelector(".empty-state");
  filterButtons.forEach((button) => button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    let visibleCount = 0;
    projectCards.forEach((card) => {
      const categories = card.dataset.category ? card.dataset.category.split(" ") : [];
      const visible = filter === "all" || categories.includes(filter);
      card.hidden = !visible;
      if (visible) visibleCount++;
    });
    if (emptyState) emptyState.hidden = visibleCount > 0;
  }));

  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;
      const data = new FormData(contactForm);
      const subject = encodeURIComponent(data.get("subject") || "Portfolio enquiry");
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
      );
      const status = document.querySelector("#form-status");
      if (status) status.textContent = "Opening your email app with your message ready to send.";
      window.location.href = `mailto:falkeved9@gmail.com?subject=${subject}&body=${body}`;
    });
  }
})();