# Portafolio profesional para GitHub Pages

Sitio estático de una sola página para presentar el perfil profesional de Ulises López Carpio como BI Analyst y Analista de Datos.

## URL esperada

Tu cuenta activa en GitHub es `Ulises-L0pez-Carpio`, así que el repo del sitio debe llamarse:

`ulises-l0pez-carpio.github.io`

Cuando ese repo exista y tenga este contenido, la URL será:

`https://ulises-l0pez-carpio.github.io/`

## Archivos principales

- `index.html`: estructura general del portafolio
- `styles.css`: estilos
- `app.js`: datos y renderizado de proyectos, menú móvil y botón de copiar correo
- `CV_Ulises_Lopez_Carpio_Analista_Datos.pdf`: CV descargable
- `project-previews/`: videos de preview de proyectos
- `.nojekyll`: evita procesamiento innecesario de Jekyll

## Vista previa local

Levanta un servidor estático desde esta carpeta:

```powershell
python -m http.server 8000
```

Luego abre:

`http://localhost:8000/`

## Qué revisar antes de publicar

1. Que `CV_Ulises_Lopez_Carpio_Analista_Datos.pdf` descargue correctamente.
2. Que los anchors del menú funcionen en desktop y móvil.
3. Que los videos de `project-previews/` carguen sin cambiar sus nombres.
4. Que el botón `Copiar correo` funcione.
5. Que no existan errores en consola.

## Flujo recomendado para publicarlo

1. Crea en GitHub un repositorio público llamado `ulises-l0pez-carpio.github.io`.
2. Sube estos archivos a la rama `main`.
3. En GitHub entra a `Settings` -> `Pages`.
4. En `Build and deployment`, deja `Source` en `Deploy from a branch`.
5. Selecciona la rama `main` y la carpeta `/(root)`.
6. Guarda y espera la publicación.

## Comandos útiles si quieres conectarlo por Git local

```powershell
git init
git branch -M main
git add .
git commit -m "Initial GitHub Pages portfolio"
git remote add origin https://github.com/Ulises-L0pez-Carpio/ulises-l0pez-carpio.github.io.git
git push -u origin main
```
