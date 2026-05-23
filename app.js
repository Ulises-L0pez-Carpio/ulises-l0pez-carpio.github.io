const projects = [
  {
    id: "01",
    title: "Caso de estudio de analisis de datos",
    summary:
      "Proyecto orientado a portafolio con limpieza de datos, hallazgos ejecutivos y narrativa de negocio lista para presentar.",
    repoUrl: "https://github.com/Ulises-L0pez-Carpio/tu-repo-analisis",
    liveUrl: "",
    tags: ["Python", "EDA", "Dashboard"]
  },
  {
    id: "02",
    title: "Aplicacion web full stack",
    summary:
      "Producto con autenticacion, persistencia y flujos reales de usuario, documentado con foco en decisiones tecnicas y resultado final.",
    repoUrl: "https://github.com/Ulises-L0pez-Carpio/tu-repo-app",
    liveUrl: "",
    tags: ["Next.js", "Supabase", "UX"]
  },
  {
    id: "03",
    title: "Proyecto interactivo o juego",
    summary:
      "Experiencia enfocada en jugabilidad, feedback visual y resolucion tecnica, ideal para mostrar variedad dentro del portafolio.",
    repoUrl: "https://github.com/Ulises-L0pez-Carpio/tu-repo-juego",
    liveUrl: "",
    tags: ["Unity", "C#", "Gameplay"]
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

  const tagMarkup = project.tags.map(createTag);
  const links = [];

  if (project.repoUrl) {
    links.push(`<a class="text-link" href="${project.repoUrl}" target="_blank" rel="noreferrer">Repositorio</a>`);
  }

  if (project.liveUrl) {
    links.push(`<a class="text-link" href="${project.liveUrl}" target="_blank" rel="noreferrer">Demo</a>`);
  }

  article.innerHTML = `
    <span class="project-number">${project.id}</span>
    <h3>${project.title}</h3>
    <p>${project.summary}</p>
    <div class="tag-list"></div>
    <div class="link-row">${links.join("")}</div>
  `;

  const tagList = article.querySelector(".tag-list");
  tagMarkup.forEach((tag) => tagList.appendChild(tag));

  return article;
}

projects.forEach((project) => {
  grid.appendChild(createProjectCard(project));
});
