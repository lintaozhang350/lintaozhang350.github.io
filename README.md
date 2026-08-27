# Lintao (Andy) Zhang — Personal Portfolio

An original, responsive portfolio website for Lintao (Andy) Zhang, a Computer and Information Science student at The Ohio State University with a Business minor and experience across software, data, AI, IT, research, and logistics operations.

![Portfolio screenshot placeholder](assets/images/projects/ai-customer-support.svg)

## Tech stack

- Semantic HTML5
- CSS3 with responsive layouts, accessible focus states, reduced-motion support, and subtle reveal effects
- Vanilla JavaScript
- Inline SVG placeholder artwork
- No build step or runtime backend required

## Project structure

```text
.
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── data.js       # All editable portfolio content
│   └── main.js       # Rendering and interactions
├── assets/
│   ├── favicon.svg
│   ├── images/
│   │   ├── profile/
│   │   └── projects/
│   └── resume/
└── README.md
```

## Run locally

Because this is a static site, the simplest option is to open `index.html` in a browser. For a local server, run one of these from the project folder:

```bash
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Edit personal information

Open `js/data.js` and update the `personal` object. The page layout reads the name, school, links, resume path, positioning line, and introduction from that object.

## Add, remove, or reorder a project

Edit the `projects` array in `js/data.js`. Each project supports:

- `title`
- `category`
- `image`
- `description`
- `tags`
- `featured` (optional; set `true` for the wide first-card layout)
- `links`

Use a relative asset path for a screenshot. Until a real link is available, use `href: "#"` with a `placeholder` message; the site will show a small, accessible notice instead of navigating.

## Add a new experience

Add another object to the `experience` array in `js/data.js` with `title`, `company`, `location`, `dates`, `description`, and `tags`.

## Replace the profile photo

Replace `assets/images/profile/profile-placeholder.svg` with a photo file, then update the `src` in `index.html` if the filename changes. Keep the alt text meaningful.

## Replace the resume PDF

Add the real file at `assets/resume/Lintao_Zhang_Resume.pdf`. The Resume button already points to that relative path. The current repository includes a small placeholder PDF so the link is present during development.

## Add project screenshots

Place an image in `assets/images/projects/`, then update the matching `image` value in `js/data.js`. The current SVGs are intentional placeholders and can be replaced one at a time.

## Manage Analysis & Reports

The optional section is controlled by `reports.enabled` in `js/data.js`. Set it to `false` to hide the entire section. Add report objects to `reports.items` with the same image, description, tags, and links pattern used by projects.

## Deploy to GitHub Pages

Before pushing, create an empty GitHub repository named `lintaozhang350.github.io` under the `lintaozhang350` account. Then run these commands from the project folder:

```bash
git init
git add .
git commit -m "Build personal portfolio website"
git branch -M main
git remote add origin https://github.com/lintaozhang350/lintaozhang350.github.io.git
git push -u origin main
```

In the repository, open:

`Settings` → `Pages`

For **Source**, select **Deploy from a branch**. Choose branch **main** and folder **/ (root)**, then select **Save**. The site will be available at:

<https://lintaozhang350.github.io>

## Before publishing

Replace these content placeholders when ready:

1. `assets/images/profile/profile-placeholder.svg` with a real profile photo.
2. The placeholder PDF at `assets/resume/Lintao_Zhang_Resume.pdf` with the final resume.
3. Project placeholder artwork in `assets/images/projects/` with real screenshots where available.
4. `href: "#"` project and report links in `js/data.js` with live demos, repositories, reports, or details pages.

The only external runtime request is the optional Google Fonts stylesheet; the page keeps a system-font fallback if it is unavailable.
