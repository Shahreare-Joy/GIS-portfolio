# GIS Project Portfolio

Portfolio website for Shahreare Joy's GIS / geospatial analysis coursework at Temple University.

## What Is Included

- React + Vite + TypeScript app
- Tailwind CSS styling
- Project data in `src/data/projects.ts`
- PDF work samples in `public/assets/downloads`
- Rendered preview images in `public/assets/previews`

The original GIS lab exports remain in:

`Fundamentals_of_Geographic_Information_systems_export/`

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL Vite prints in the terminal, usually:

```text
http://localhost:5173/
```

## Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Edit Projects

Edit project titles, descriptions, skills, preview images, and PDF links in:

`src/data/projects.ts`

To add a new PDF work sample:

1. Copy the PDF into `public/assets/downloads/`.
2. Add a preview image to `public/assets/previews/`.
3. Add a new entry to the `projects` array in `src/data/projects.ts`.

## Deploy

### GitHub Pages

GitHub Pages can host this site for free without buying a domain. The default URL will look like:

```text
https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY-NAME/
```

This project includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds and deploys the site automatically.

1. Create a new GitHub repository.
2. Push this project to the repository.
3. In GitHub, open the repository settings.
4. Go to **Pages**.
5. Set **Source** to **GitHub Actions**.
6. Push to the `main` branch.
7. Open the **Actions** tab and wait for **Deploy to GitHub Pages** to finish.

Example first push:

```bash
git init
git add .
git commit -m "Create GIS portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/YOUR-REPOSITORY-NAME.git
git push -u origin main
```

### Netlify

1. Push the project to GitHub.
2. Create a new Netlify site from the repository.
3. Set the build command to `npm run build`.
4. Set the publish directory to `dist`.

### Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Vercel should detect Vite automatically.
4. Confirm the build command is `npm run build` and the output directory is `dist`.
