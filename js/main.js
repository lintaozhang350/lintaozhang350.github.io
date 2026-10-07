(function () {
  "use strict";

  const data = window.portfolioData;
  const icon = {
    email: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 5.25h17A1.75 1.75 0 0 1 22.25 7v10a1.75 1.75 0 0 1-1.75 1.75h-17A1.75 1.75 0 0 1 1.75 17V7A1.75 1.75 0 0 1 3.5 5.25Zm0 1.75a.25.25 0 0 0-.15.05L12 13.5l8.65-6.45a.25.25 0 0 0-.15-.05h-17ZM20.5 17V8.3l-8 5.96a.83.83 0 0 1-1 0l-8-5.96V17c0 .14.11.25.25.25h16.5c.14 0 .25-.11.25-.25Z"/></svg>',
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .75a11.26 11.26 0 0 0-3.56 21.94c.56.1.77-.24.77-.54v-2.1c-3.14.69-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.68.08-.68 1.13.08 1.73 1.16 1.73 1.16 1.01 1.73 2.66 1.23 3.31.94.1-.73.4-1.23.72-1.51-2.51-.29-5.15-1.26-5.15-5.6 0-1.24.44-2.25 1.16-3.04-.12-.29-.5-1.44.11-3 0 0 .95-.3 3.11 1.16A10.82 10.82 0 0 1 12 6.16c.96 0 1.93.13 2.83.38 2.16-1.46 3.11-1.16 3.11-1.16.61 1.56.23 2.71.11 3 .72.79 1.16 1.8 1.16 3.04 0 4.35-2.65 5.3-5.17 5.58.41.36.77 1.07.77 2.16v3.2c0 .3.2.65.78.54A11.26 11.26 0 0 0 12 .75Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.15 3.4a2.16 2.16 0 1 1 0 4.32 2.16 2.16 0 0 1 0-4.32ZM3.3 9.2h3.7V21H3.3V9.2Zm5.98 0h3.55v1.61h.05c.49-.93 1.7-1.91 3.5-1.91 3.75 0 4.44 2.47 4.44 5.68V21h-3.7v-5.69c0-1.36-.03-3.1-1.89-3.1-1.9 0-2.19 1.48-2.19 3v5.8H9.28V9.2Z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 18.2 16.2 7H9V5h10v10h-2V8.4L6.4 19.6 5 18.2Z"/></svg>'
  };

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
  }

  function tags(items, accentFirst = false) {
    return items.map((item, index) => `<span class="tag${accentFirst && index === 0 ? " tag-accent" : ""}">${escapeHtml(item)}</span>`).join("");
  }

  function renderPersonal() {
    $$('[data-personal]').forEach((element) => {
      const key = element.dataset.personal;
      element.textContent = data.personal[key] || "";
    });

    $("[data-hero-skills]").innerHTML = data.heroSkills.map((skill, index) => `<span class="tag${index === 0 ? " tag-accent" : ""}">${escapeHtml(skill)}</span>`).join("");
    $("[data-current-year]").textContent = new Date().getFullYear();

    const emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(data.personal.email)}`;
    $("[data-social-links]").innerHTML = `
      <a class="social-link" href="${emailComposeUrl}" target="_blank" rel="noreferrer" aria-label="Email Andy">${icon.email}</a>
      <a class="social-link" href="${data.personal.linkedin}" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">${icon.linkedin}</a>
      <a class="social-link" href="${data.personal.github}" target="_blank" rel="noreferrer" aria-label="GitHub profile">${icon.github}</a>
    `;
  }

  function renderProjects() {
    $("[data-projects]").innerHTML = data.projects.map((project, index) => `
      <article class="project-card reveal${project.featured ? " featured" : ""}">
        <div class="project-visual">
          <img src="${escapeHtml(project.image)}" alt="Screenshot preview for ${escapeHtml(project.title)}" loading="lazy" />
          <div class="project-overlay"><span class="project-index">0${index + 1}</span><span class="project-type">${escapeHtml(project.category)}</span></div>
        </div>
        <div class="project-body">
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.description)}</p>
          <div class="tag-list">${tags(project.tags)}</div>
          <div class="project-links">${project.links.map(linkMarkup).join("")}</div>
        </div>
      </article>
    `).join("");
  }

  function linkMarkup(link) {
    return `<a class="text-link" href="${escapeHtml(link.href)}"${link.href !== "#" ? ' target="_blank" rel="noreferrer"' : ""}${link.placeholder ? ` data-placeholder-link="${escapeHtml(link.placeholder)}"` : ""}>${escapeHtml(link.label)} <span aria-hidden="true">↗</span></a>`;
  }

  function renderExperience() {
    $("[data-experience]").innerHTML = data.experience.map((role, index) => `
      <article class="experience-card reveal">
        <div class="experience-head"><span class="experience-count">0${index + 1} / Role</span><span class="experience-date">${escapeHtml(role.dates)}</span></div>
        <h3>${escapeHtml(role.title)}</h3>
        <p class="experience-company">${escapeHtml(role.company)}</p>
        <p class="experience-location">${escapeHtml(role.location)}</p>
        <p>${escapeHtml(role.description)}</p>
        <div class="experience-tags">${tags(role.tags)}</div>
      </article>
    `).join("");
  }

  function renderEducation() {
    Object.entries(data.education).forEach(([key, value]) => {
      if (key !== "coursework") {
        const target = $(`[data-education="${key}"]`);
        if (target) target.textContent = value;
      }
    });
    $("[data-coursework]").innerHTML = data.education.coursework.map((course) => `<span class="tag">${escapeHtml(course)}</span>`).join("");
  }

  function renderSkills() {
    $("[data-skills]").innerHTML = data.skills.map((group) => `
      <article class="skill-group reveal">
        <h3>${escapeHtml(group.name)}</h3>
        <div class="skill-group-list">${tags(group.items)}</div>
      </article>
    `).join("");
  }

  function renderReports() {
    const section = $("[data-reports-section]");
    if (!data.reports.enabled || !data.reports.items.length) {
      section.hidden = true;
      return;
    }
    $("[data-reports]").innerHTML = data.reports.items.map((report) => `
      <article class="report-card reveal">
        <div class="project-visual"><img src="${escapeHtml(report.image)}" alt="Screenshot preview for ${escapeHtml(report.title)}" loading="lazy" /></div>
        <div class="report-content">
          <p class="report-label">${escapeHtml(report.label)}</p>
          <h3>${escapeHtml(report.title)}</h3>
          <p>${escapeHtml(report.description)}</p>
          <div class="tag-list">${tags(report.tags)}</div>
          <div class="project-links">${report.links.map(linkMarkup).join("")}</div>
        </div>
      </article>
    `).join("");
  }

  function setupNavigation() {
    const toggle = $(".menu-toggle");
    const nav = $(".site-nav");
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });
    $$(".site-nav a").forEach((link) => link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    }));

    const backToTop = $(".footer-inner a[href=\"#top\"]");
    if (backToTop) {
      backToTop.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
        });
        history.replaceState(null, "", "#top");
      });
    }
  }

  function setupPlaceholderLinks() {
    const toast = $(".toast");
    let timeout;
    document.addEventListener("click", (event) => {
      const link = event.target.closest("[data-placeholder-link]");
      if (!link) return;
      event.preventDefault();
      toast.textContent = link.dataset.placeholderLink;
      toast.classList.add("is-visible");
      clearTimeout(timeout);
      timeout = setTimeout(() => toast.classList.remove("is-visible"), 3200);
    });
  }

  function setupReveal() {
    const elements = $$(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          instance.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
  }

  renderPersonal();
  renderProjects();
  renderExperience();
  renderEducation();
  renderSkills();
  renderReports();
  setupNavigation();
  setupPlaceholderLinks();
  setupReveal();
})();
