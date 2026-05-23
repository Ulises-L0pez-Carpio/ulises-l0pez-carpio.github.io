const projects = [
  {
    id: "01",
    type: "Analisis de datos",
    title: "Analisis de retencion de clientes online retail",
    summary:
      "Pipeline reproducible con cohortes, segmentacion RFM y dashboard ejecutivo para explicar retencion, frecuencia y valor del cliente.",
    repoUrl: "https://github.com/Ulises-L0pez-Carpio/analisis-retencion-clientes-online-retail-ii",
    liveUrl: "",
    status: "Python + SQL + Power BI",
    tags: ["Python", "SQL", "Power BI", "RFM"]
  },
  {
    id: "02",
    type: "Producto web",
    title: "App de recetas full stack",
    summary:
      "Aplicacion con autenticacion, manejo de contenido y foco en flujos reales de usuario, pensada como producto y no solo como ejercicio tecnico.",
    repoUrl: "https://github.com/Ulises-L0pez-Carpio/Repo_App_Recetas",
    liveUrl: "https://repo-app-recetas.vercel.app",
    status: "Next.js + Supabase",
    tags: ["Next.js", "Supabase", "Vercel", "UX"]
  },
  {
    id: "03",
    type: "Caso de estudio",
    title: "Afore digital funnel analytics",
    summary:
      "Caso end-to-end para analizar un funnel digital con SQL, Python, segmentacion y modelado predictivo orientado a decisiones de negocio.",
    repoUrl: "https://github.com/Ulises-L0pez-Carpio/afore-digital-funnel-analytics",
    liveUrl: "",
    status: "Analytics + negocio",
    tags: ["SQL", "Python", "Modelado", "Dashboard"]
  },
  {
    id: "04",
    type: "Producto movil",
    title: "Elden Ring Weakness Guide",
    summary:
      "Presentacion de una companion app enfocada en referencias de combate, debilidades de bosses y experiencia movil clara para consulta rapida.",
    repoUrl: "https://github.com/Ulises-L0pez-Carpio/elden-ring-weakness-guide",
    liveUrl: "",
    status: "UX + producto",
    tags: ["Research", "Mobile UX", "Presentation"]
  },
  {
    id: "05",
    type: "Analitica",
    title: "Caso de estudio Google Analytics",
    summary:
      "Analisis mensual de postulantes con lectura ejecutiva y estructura de caso para comunicar patrones, resultados y oportunidades concretas.",
    repoUrl: "https://github.com/Ulises-L0pez-Carpio/Caso-de-estudio-Google-analytics",
    liveUrl: "",
    status: "Storytelling con datos",
    tags: ["Analytics", "EDA", "Reporting"]
  }
];

const grid = document.getElementById("project-grid");

function createTag(tag) {
  const element = document.createElement("span");
  element.className = "tag";
  element.textContent = tag;
  return element;
}

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "project-card";

  const links = [];

  if (project.repoUrl) {
    links.push(`<a class="project-link" href="${project.repoUrl}" target="_blank" rel="noreferrer">Repositorio</a>`);
  }

  if (project.liveUrl) {
    links.push(`<a class="project-link project-link-accent" href="${project.liveUrl}" target="_blank" rel="noreferrer">Demo en vivo</a>`);
  }

  article.innerHTML = `
    <div class="project-topline">
      <span class="project-index">${project.id}</span>
      <span class="project-type">${project.type}</span>
    </div>
    <div class="project-meta">
      <h3>${project.title}</h3>
      <span class="meta-chip">${project.status}</span>
    </div>
    <p class="project-summary">${project.summary}</p>
    <div class="tag-list"></div>
    <div class="project-links">${links.join("")}</div>
  `;

  const tagList = article.querySelector(".tag-list");
  project.tags.forEach((tag) => {
    tagList.appendChild(createTag(tag));
  });

  return article;
}

projects.forEach((project) => {
  grid.appendChild(createProjectCard(project));
});
