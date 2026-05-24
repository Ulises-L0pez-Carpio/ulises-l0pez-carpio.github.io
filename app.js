var projects = [
  {
    title: "Afore Digital Funnel Analytics",
    type: "Análisis end-to-end de funnel digital",
    businessProblem: "Identificar puntos críticos de conversión, comportamiento de usuarios y oportunidades de seguimiento dentro de un proceso digital.",
    process: "Integración y limpieza de datos, análisis exploratorio, segmentación, métricas de conversión y lectura ejecutiva del embudo.",
    tools: ["Python", "SQL", "Power BI", "Pandas", "EDA", "Segmentación"],
    outcome: "Identificación de fricciones del funnel y recomendaciones accionables para mejorar conversión y seguimiento de usuarios.",
    tags: ["Funnel analytics", "Python", "SQL", "Power BI", "KPIs"],
    repoUrl: "https://github.com/Ulises-L0pez-Carpio/afore-digital-funnel-analytics",
    liveUrl: "",
    dashboardUrl: "",
    caseStudyUrl: "",
    previewImage: "",
    previewVideo: "project-previews/afore-digital-funnel-analytics.mp4",
    featured: false
  },
  {
    title: "Online Retail Retention Analysis",
    type: "Caso de estudio de retención y segmentación",
    businessProblem: "Detectar patrones de compra, clientes de alto valor y oportunidades de retención en un dataset histórico de retail.",
    process: "Pipeline reproducible, limpieza de datos, cohort analysis, segmentación RFM, visualizaciones ejecutivas y documentación pública.",
    tools: ["Python", "SQL", "Power BI", "Pandas", "Cohort analysis", "RFM"],
    outcome: "Segmentación de clientes, detección de perfiles de alto valor, riesgo de abandono y oportunidades comerciales para acciones de retención.",
    tags: ["Retención", "RFM", "Cohorts", "Power BI", "Python"],
    repoUrl: "https://github.com/Ulises-L0pez-Carpio/analisis-retencion-clientes-online-retail-ii",
    liveUrl: "",
    dashboardUrl: "",
    caseStudyUrl: "https://github.com/Ulises-L0pez-Carpio/analisis-retencion-clientes-online-retail-ii/blob/main/reports/caso_estudio_portafolio.md",
    previewImage: "",
    previewVideo: "project-previews/analisis-retencion-clientes-online-retail.mp4",
    featured: false
  },
  {
    title: "Rezzeta",
    type: "Aplicación web orientada a producto",
    businessProblem: "Construir una experiencia funcional para organizar recetas, publicar contenido y operar flujos reales de usuario.",
    process: "Diseño de interfaces, gestión de contenido dinámico, autenticación, publicación de demo y ajustes de experiencia de usuario.",
    tools: ["Next.js", "Supabase", "Vercel", "TypeScript", "UX"],
    outcome: "Demo publicada con flujos de usuario funcionales y estructura lista para evolucionar como producto digital.",
    tags: ["Producto", "UX", "Next.js", "Supabase"],
    repoUrl: "",
    liveUrl: "https://repo-app-recetas.vercel.app",
    dashboardUrl: "",
    caseStudyUrl: "",
    previewImage: "",
    previewVideo: "project-previews/rezetta.mp4",
    featured: false
  },
  {
    title: "Caso de Estudio Google Analytics",
    type: "Analítica y comunicación ejecutiva",
    businessProblem: "Analizar datos de comportamiento para comunicar patrones relevantes, resultados y oportunidades de acción.",
    process: "Exploración, limpieza, interpretación de métricas y presentación de hallazgos en formato de caso de estudio.",
    tools: ["Analytics", "EDA", "Reporting", "Storytelling con datos"],
    outcome: "Caso de estudio estructurado para mostrar lectura analítica, síntesis y comunicación de resultados.",
    tags: ["Analytics", "EDA", "Reporting"],
    repoUrl: "https://github.com/Ulises-L0pez-Carpio/Caso-de-estudio-Google-analytics",
    liveUrl: "",
    dashboardUrl: "",
    caseStudyUrl: "",
    previewImage: "",
    previewVideo: "",
    featured: false
  },
  {
    title: "Elden Ring Weakness Guide",
    type: "Companion app y organización de información",
    businessProblem: "Presentar información compleja de referencia de forma rápida, clara y útil para consulta móvil.",
    process: "Curación de información, organización de contenido, diseño de navegación y presentación visual para consulta eficiente.",
    tools: ["React Native", "Expo", "UX móvil", "Documentación"],
    outcome: "Guía móvil con estructura de consulta clara y enfoque en experiencia de usuario.",
    tags: ["Mobile UX", "Expo", "Research"],
    repoUrl: "https://github.com/Ulises-L0pez-Carpio/elden-ring-weakness-guide",
    liveUrl: "",
    dashboardUrl: "",
    caseStudyUrl: "",
    previewImage: "",
    previewVideo: "project-previews/elden-ring-weakness-guide.mp4",
    featured: false
  }
];

var projectIcons = ["query_stats", "groups", "web", "insights", "phone_iphone"];

function createMedia(project, className, iconName) {
  var media = document.createElement("div");
  media.className = className;

  var fallback = document.createElement("div");
  fallback.className = "media-fallback";
  fallback.innerHTML = '<span class="material-symbols-outlined" aria-hidden="true">' + iconName + "</span>";
  media.appendChild(fallback);

  if (project.previewImage) {
    var image = document.createElement("img");
    image.src = project.previewImage;
    image.alt = "Preview visual de " + project.title;
    image.addEventListener("load", function () {
      media.classList.add("has-media");
    });
    image.addEventListener("error", function () {
      media.classList.remove("has-media");
    });
    media.appendChild(image);
  }

  if (project.previewVideo) {
    var video = document.createElement("video");
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.setAttribute("aria-label", "Preview de " + project.title);
    video.innerHTML = '<source src="' + project.previewVideo + '" type="video/mp4">';
    video.addEventListener("loadeddata", function () {
      media.classList.add("has-media");
      video.play().catch(function () {});
    });
    video.addEventListener("error", function () {
      media.classList.remove("has-media");
    });
    media.appendChild(video);
  }

  return media;
}

function createTagList(items) {
  var list = document.createElement("div");
  list.className = "tag-list";
  items.forEach(function (item) {
    var tag = document.createElement("span");
    tag.textContent = item;
    list.appendChild(tag);
  });
  return list;
}

function createProjectActions(project) {
  var actions = document.createElement("div");
  actions.className = "project-actions";

  [
    { url: project.repoUrl, label: "Ver repositorio", className: "btn btn-ghost" },
    { url: project.liveUrl, label: "Ver demo", className: "btn btn-primary" },
    { url: project.dashboardUrl, label: "Ver dashboard", className: "btn btn-secondary" },
    { url: project.caseStudyUrl, label: "Leer caso de estudio", className: "btn btn-ghost" }
  ].forEach(function (action) {
    if (!action.url) {
      return;
    }

    var link = document.createElement("a");
    link.className = action.className;
    link.href = action.url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = action.label;
    actions.appendChild(link);
  });

  return actions;
}

function createProjectCard(project, index) {
  var article = document.createElement("article");
  article.className = "project-card";
  article.appendChild(createMedia(project, "project-media", projectIcons[index % projectIcons.length]));

  var body = document.createElement("div");
  body.className = "project-body";
  body.innerHTML =
    '<span class="project-type">' + project.type + "</span>" +
    "<h3>" + project.title + "</h3>" +
    '<p class="project-detail"><strong>Problema:</strong> ' + project.businessProblem + "</p>" +
    '<p class="project-detail"><strong>Proceso:</strong> ' + project.process + "</p>" +
    '<p class="project-detail"><strong>Resultado:</strong> ' + project.outcome + "</p>";

  body.appendChild(createTagList(project.tags));
  body.appendChild(createProjectActions(project));
  article.appendChild(body);

  return article;
}

var projectGrid = document.getElementById("project-grid");

if (projectGrid) {
  projects.forEach(function (project, index) {
    projectGrid.appendChild(createProjectCard(project, index));
  });
}

var menuBtn = document.getElementById("mobile-menu-btn");
var navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", function () {
    var isOpen = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.querySelector(".material-symbols-outlined").textContent = isOpen ? "close" : "menu";
  });

  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.querySelector(".material-symbols-outlined").textContent = "menu";
    });
  });
}

var sections = Array.from(document.querySelectorAll("main section[id]"));
var anchorLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));

function updateActiveNav() {
  var current = sections[0] ? sections[0].id : "";
  var offset = window.scrollY + 120;

  sections.forEach(function (section) {
    if (section.offsetTop <= offset) {
      current = section.id;
    }
  });

  anchorLinks.forEach(function (link) {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
}

window.addEventListener("scroll", updateActiveNav, { passive: true });
window.addEventListener("load", updateActiveNav);
updateActiveNav();

var revealElements = Array.from(document.querySelectorAll(".reveal"));

if ("IntersectionObserver" in window) {
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(function (element) {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach(function (element) {
    element.classList.add("visible");
  });
}

var contactEmail = "istilezzhom@ciencias.unam.mx";
var mailtoSubject = "Contacto desde portafolio";
var mailtoBody = [
  "Hola Ulises,",
  "",
  "Te contacto desde tu portafolio porque me interesa hablar contigo sobre una oportunidad relacionada con datos o Business Intelligence.",
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
});

var copyEmailBtn = document.getElementById("copy-email-btn");
var copyEmailStatus = document.getElementById("copy-email-status");
var copyEmailStatusTimer = null;

function setCopyEmailStatus(message, isError) {
  if (!copyEmailStatus) {
    return;
  }

  copyEmailStatus.textContent = message;
  copyEmailStatus.classList.toggle("error", !!isError);

  if (copyEmailStatusTimer) {
    clearTimeout(copyEmailStatusTimer);
  }

  if (message) {
    copyEmailStatusTimer = setTimeout(function () {
      copyEmailStatus.textContent = "";
      copyEmailStatus.classList.remove("error");
    }, 2600);
  }
}

if (copyEmailBtn) {
  copyEmailBtn.addEventListener("click", function () {
    function fallbackCopy() {
      var textArea = document.createElement("textarea");
      textArea.value = contactEmail;
      textArea.setAttribute("readonly", "");
      textArea.setAttribute("aria-hidden", "true");
      textArea.style.position = "fixed";
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.width = "1px";
      textArea.style.height = "1px";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      textArea.setSelectionRange(0, textArea.value.length);

      try {
        var copied = document.execCommand("copy");
        if (copied) {
          setCopyEmailStatus("Correo copiado.", false);
        }
        return copied;
      } catch (error) {
        return false;
      } finally {
        document.body.removeChild(textArea);
      }
    }

    if (fallbackCopy()) {
      return;
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(contactEmail)
        .then(function () {
          setCopyEmailStatus("Correo copiado.", false);
        })
        .catch(function () {
          setCopyEmailStatus("No se pudo copiar. Usa el enlace de correo.", true);
        });
      return;
    }

    setCopyEmailStatus("No se pudo copiar. Usa el enlace de correo.", true);
  });
}
