// SPA Navigation
(function () {
  var pages = document.querySelectorAll(".page-section");
  var navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
  var sections = document.querySelectorAll(".section-divider");

  function showPage(name) {
    var found = false;
    pages.forEach(function (page) {
      if (page.dataset.page === name) {
        page.classList.remove("hidden");
        found = true;
      } else {
        page.classList.add("hidden");
      }
    });

    // Show dividers only when both adjacent sections are visible on home page
    sections.forEach(function (div) {
      if (name === "inicio") {
        div.classList.remove("hidden");
      } else {
        div.classList.add("hidden");
      }
    });

    // Update active nav link
    navLinks.forEach(function (link) {
      if (link.dataset.page === name) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // Update URL
    var url = name === "inicio" ? "/" : "/" + name;
    if (window.location.pathname !== url) {
      history.pushState({ page: name }, "", url);
    }

    // Re-trigger animations
    if (found) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(function () {
        document.querySelectorAll(".reveal").forEach(function (el) {
          el.classList.remove("visible");
        });
        setTimeout(revealOnScroll, 50);
      }, 100);
    }
  }

  // Click handlers
  document.addEventListener("click", function (e) {
    var link = e.target.closest("[data-page]");
    if (link) {
      e.preventDefault();
      var page = link.dataset.page;
      showPage(page);

      // Close mobile menu
      var mobileMenu = document.getElementById("mobile-menu");
      var menuBtn = document.getElementById("mobile-menu-btn");
      if (mobileMenu && menuBtn && !mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
        menuBtn.querySelector(".material-symbols-outlined").textContent = "menu";
      }
    }
  });

  // Handle back/forward browser buttons
  window.addEventListener("popstate", function (e) {
    var path = window.location.pathname.replace(/\/$/, "");
    var page = path === "" || path === "/" ? "inicio" : path.replace("/", "");
    showPage(page);
  });

  // Initial load
  var initialPath = window.location.pathname.replace(/\/$/, "");
  var initialPage = initialPath === "" || initialPath === "/" ? "inicio" : initialPath.replace("/", "");
  showPage(initialPage);
})();

// Project data and rendering
var projects = [
  {
    id: "01",
    type: "Business Intelligence",
    title: "Dashboard de análisis comercial",
    summary: "Dashboard interactivo enfocado en indicadores clave de negocio, segmentación de clientes, tendencias y visualización ejecutiva para apoyar la toma de decisiones.",
    repoUrl: "https://github.com/Ulises-L0pez-Carpio/analisis-retencion-clientes-online-retail-ii",
    liveUrl: "",
    tags: ["Power BI", "DAX", "Power Query", "Data Visualization"]
  },
  {
    id: "02",
    type: "Producto web",
    title: "App de recetas full stack",
    summary: "Aplicación con autenticación, manejo de contenido y flujos reales de usuario, pensada como producto y no solo como ejercicio técnico.",
    repoUrl: "",
    liveUrl: "https://repo-app-recetas.vercel.app",
    tags: ["Next.js", "Supabase", "Vercel", "UX"]
  },
  {
    id: "03",
    type: "Caso de estudio",
    title: "Afore digital funnel analytics",
    summary: "Caso end-to-end de análisis de funnel digital con SQL, Python, segmentación y modelado predictivo orientado a decisiones de negocio.",
    repoUrl: "https://github.com/Ulises-L0pez-Carpio/afore-digital-funnel-analytics",
    liveUrl: "",
    tags: ["SQL", "Python", "Modelado", "Dashboard"]
  },
  {
    id: "04",
    type: "Producto",
    title: "Elden Ring Weakness Guide",
    summary: "Companion app enfocada en referencias de combate, debilidades de bosses y experiencia móvil clara para consulta rápida durante el juego.",
    repoUrl: "https://github.com/Ulises-L0pez-Carpio/elden-ring-weakness-guide",
    liveUrl: "",
    tags: ["Research", "Mobile UX", "Presentation"]
  },
  {
    id: "05",
    type: "Analítica",
    title: "Caso de estudio Google Analytics",
    summary: "Análisis mensual de postulantes con lectura ejecutiva y estructura de caso para comunicar patrones, resultados y oportunidades concretas.",
    repoUrl: "https://github.com/Ulises-L0pez-Carpio/Caso-de-estudio-Google-analytics",
    liveUrl: "",
    tags: ["Analytics", "EDA", "Reporting"]
  }
];

const bannerIcons = ["analytics", "monitoring", "hub", "bar_chart", "insights"];
const bannerColors = ["#2563EB", "#38BDF8", "#0EA5E9", "#6366F1", "#8B5CF6"];

function createProjectCard(project, idx) {
  const article = document.createElement("article");
  article.className = "project-card group bg-white border border-border rounded-2xl shadow-sm hover:-translate-y-1 hover:border-primary hover:shadow-xl transition-all duration-300 overflow-hidden reveal";

  const links = [];
  if (project.repoUrl) {
    links.push(
      '<a class="inline-flex items-center px-4 py-2 rounded-lg border border-primary text-primary text-xs font-semibold hover:bg-primary hover:text-white transition-colors" href="' +
        project.repoUrl + '" target="_blank" rel="noreferrer">Repositorio</a>'
    );
  }
  if (project.liveUrl) {
    links.push(
      '<a class="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-white text-xs font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all" href="' +
        project.liveUrl + '" target="_blank" rel="noreferrer">Demo</a>'
    );
  }

  const icon = bannerIcons[idx % bannerIcons.length];
  const color = bannerColors[idx % bannerColors.length];

  article.innerHTML =
    '<div class="project-banner" style="background: linear-gradient(135deg, ' + color + '15 0%, ' + color + '08 100%);">' +
      '<span class="material-symbols-outlined" style="font-size: 3rem; color: ' + color + '; opacity: 0.3; font-variation-settings:\'FILL\' 1;">' + icon + '</span>' +
    '</div>' +
    '<div class="p-6 space-y-4">' +
      '<div class="flex items-center justify-between gap-3">' +
        '<span class="text-accent font-bold uppercase tracking-wider text-xs">' + project.type + '</span>' +
        '<span class="text-amber text-xs font-bold">' + project.id + '</span>' +
      '</div>' +
      '<h3 class="text-text font-headline text-xl font-bold leading-tight">' + project.title + '</h3>' +
      '<p class="text-muted text-sm leading-relaxed">' + project.summary + '</p>' +
      '<div class="flex flex-wrap gap-2" id="tag-list-' + idx + '"></div>' +
      '<div class="flex flex-wrap gap-3 pt-3 border-t border-border">' + links.join("") + '</div>' +
    '</div>';

  const tagList = article.querySelector("#tag-list-" + idx);
  project.tags.forEach(function (tag) {
    var span = document.createElement("span");
    span.className = "px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium";
    span.textContent = tag;
    tagList.appendChild(span);
  });

  return article;
}

var grid = document.getElementById("project-grid");
if (grid) {
  projects.forEach(function (project, i) {
    grid.appendChild(createProjectCard(project, i));
  });
}

// Scroll reveal
var revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  var windowHeight = window.innerHeight;
  revealElements.forEach(function (el) {
    var top = el.getBoundingClientRect().top;
    if (top < windowHeight - 80) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", function () {
  revealOnScroll();
  // Reveal project cards after they're rendered
  setTimeout(function () {
    document.querySelectorAll(".project-card").forEach(function (card) {
      var top = card.getBoundingClientRect().top;
      if (top < window.innerHeight - 80) {
        card.classList.add("visible");
      }
    });
  }, 100);
});

// Mobile menu toggle
var menuBtn = document.getElementById("mobile-menu-btn");
var mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", function () {
    var isHidden = mobileMenu.classList.contains("hidden");
    if (isHidden) {
      mobileMenu.classList.remove("hidden");
      menuBtn.querySelector(".material-symbols-outlined").textContent = "close";
    } else {
      mobileMenu.classList.add("hidden");
      menuBtn.querySelector(".material-symbols-outlined").textContent = "menu";
    }
  });

  // Close menu on link click
  mobileMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.classList.add("hidden");
      menuBtn.querySelector(".material-symbols-outlined").textContent = "menu";
    });
  });
}

// Mailto enrichment + copy fallback
var contactEmail = "istilezzhom@ciencias.unam.mx";
var mailtoSubject = "Contacto desde portafolio";
var mailtoBody = [
  "Hola Ulises,",
  "",
  "Te contacto desde tu portafolio porque me interesa hablar contigo sobre una oportunidad o colaboracion.",
  "",
  "Mi nombre es:",
  "Empresa o proyecto:",
  "Mensaje:",
  ""
].join("\n");

var mailtoHref =
  "mailto:" +
  contactEmail +
  "?subject=" + encodeURIComponent(mailtoSubject) +
  "&body=" + encodeURIComponent(mailtoBody);

document.querySelectorAll("[data-mailto-target]").forEach(function (link) {
  link.setAttribute("href", mailtoHref);
  link.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = mailtoHref;
    setCopyEmailStatus("Si no se abre tu correo, usa Copiar correo.", false);
  });
});

var copyEmailBtn = document.getElementById("copy-email-btn");
var copyEmailStatus = document.getElementById("copy-email-status");
var copyEmailStatusTimer = null;

function setCopyEmailStatus(message, isError) {
  if (!copyEmailStatus) {
    return;
  }

  copyEmailStatus.textContent = message;
  copyEmailStatus.classList.toggle("text-red-600", !!isError);
  copyEmailStatus.classList.toggle("text-green-600", !isError && !!message);
  copyEmailStatus.classList.toggle("text-muted", !message);

  if (copyEmailStatusTimer) {
    clearTimeout(copyEmailStatusTimer);
  }

  if (message) {
    copyEmailStatusTimer = setTimeout(function () {
      copyEmailStatus.textContent = "";
      copyEmailStatus.classList.remove("text-red-600", "text-green-600");
      copyEmailStatus.classList.add("text-muted");
    }, 2500);
  }
}

if (copyEmailBtn) {
  copyEmailBtn.addEventListener("click", async function () {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopyEmailStatus("Correo copiado.", false);
    } catch (error) {
      setCopyEmailStatus("No se pudo copiar. Usa el boton Enviar correo.", true);
    }
  });
}

// 3D tilt effect for contact cards
document.querySelectorAll(".contact-tilt").forEach(function (card) {
  card.addEventListener("mousemove", function (e) {
    var rect = card.getBoundingClientRect();
    var x = (e.clientX - rect.left) / rect.width - 0.5;
    var y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = "translateY(-4px) rotateX(" + (y * -8) + "deg) rotateY(" + (x * 8) + "deg)";
  });

  card.addEventListener("mouseleave", function () {
    card.style.transform = "translateY(0) rotateX(0) rotateY(0)";
  });
});
