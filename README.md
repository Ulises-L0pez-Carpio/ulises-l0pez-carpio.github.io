# Portafolio para GitHub Pages

Esta carpeta ya queda lista para publicarse como tu sitio principal de GitHub Pages.

## URL esperada

Tu cuenta activa en GitHub es `Ulises-L0pez-Carpio`, asi que el repo del sitio debe llamarse:

`ulises-l0pez-carpio.github.io`

Cuando ese repo exista y tenga este contenido, la URL sera:

`https://ulises-l0pez-carpio.github.io/`

## Archivos principales

- `index.html`: estructura general del portafolio
- `styles.css`: estilos
- `app.js`: proyectos destacados
- `.nojekyll`: evita procesamiento innecesario de Jekyll

## Que debes editar

1. Cambia el texto de presentacion en `index.html` si quieres otro enfoque.
2. Reemplaza los proyectos de ejemplo dentro de `app.js`.
3. Ajusta enlaces de GitHub, demos y tecnologias.

## Flujo recomendado para publicarlo

1. Crea en GitHub un repositorio publico llamado `ulises-l0pez-carpio.github.io`.
2. Sube estos archivos a la rama `main`.
3. En GitHub entra a `Settings` -> `Pages`.
4. En `Build and deployment`, deja `Source` en `Deploy from a branch`.
5. Selecciona la rama `main` y la carpeta `/(root)`.
6. Guarda y espera la publicacion.

## Comandos utiles si quieres conectarlo por Git local

```powershell
git init
git branch -M main
git add .
git commit -m "Initial GitHub Pages portfolio"
git remote add origin https://github.com/Ulises-L0pez-Carpio/ulises-l0pez-carpio.github.io.git
git push -u origin main
```

## Vista previa local

Puedes abrir `index.html` directamente en el navegador o levantar un servidor estatico simple, por ejemplo:

```powershell
python -m http.server 8000
```
