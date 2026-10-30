# Ved Falke — Personal Portfolio

A responsive, multi-page personal portfolio for **Ved Falke**, Software Development Engineer. It uses semantic HTML, custom CSS, and lightweight JavaScript without any external UI frameworks or build dependencies.

## Pages

- **Home** (`index.html`) — hero, intro, live technology ticker, core highlights, selected projects (Stock Operator, XcaliDraw, CodSoft Web Apps), and call to action.
- **About** (`about.html`) — professional summary, career story, academic background (PCCOER Pune, Nirala Junior, Sanjo Convent), work experience (CodSoft internship), and full skills toolkit.
- **Projects** (`projects.html`) — project cards with multi-category filtering (Full Stack, Frontend, JavaScript) and technical specs.
- **Contact** (`contact.html`) — verified contact channels (Email, Phone, Location, LinkedIn, LeetCode, GitHub) and message preparation form.

## Tools and features

- HTML5 semantic elements and accessible form labels
- CSS Grid and Flexbox for responsive layouts
- Custom design tokens, responsive breakpoints, and dark/light mode toggle
- Vanilla JavaScript for mobile navigation, theme persistence, scroll reveals, category filters, and mailto form handling
- Dedicated printable HTML resume (`resume/ved-falke-resume.html`) and text resume (`resume/ved-falke-resume.txt`)
- No required UI libraries or compilation build step

## File structure

```text
portfolio-website/
├── index.html
├── about.html
├── projects.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── icons/
│       └── favicon.svg
├── resume/
│   ├── ved-falke-resume.html
│   ├── ved-falke-resume.txt
│   └── README.txt
├── screenshots/
│   └── README.md
└── README.md
```

## Run locally

1. Open `index.html` directly in any web browser, or use VS Code's Live Server extension.
2. No package installation or compilation is required.

## Configured Contact & Profiles

- **Email**: falkeved9@gmail.com
- **Phone**: +91 9284405117
- **LinkedIn**: https://www.linkedin.com/in/ved-falke/
- **LeetCode**: https://leetcode.com/u/vedfalke/
- **GitHub**: https://github.com/vedfalke
- **Location**: Ravet, Pune, India

The contact form uses a `mailto:` workflow. It opens the visitor's default email application and does not submit data to a server. For a server-backed form, connect a service such as Formspree or your own backend.

## Deploy with GitHub Pages

1. Create a GitHub repository, for example `portfolio-website`.
2. Upload or push all project files to the repository's root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
5. Wait for the deployment to finish. Your public URL will be shown in the Pages settings, usually `https://YOUR-USERNAME.github.io/portfolio-website/`.
6. Add that exact URL here once published.

## Screenshots

Capture the site after adding your real contact information and deploying it. Save clear, cropped screenshots in `screenshots/` using these names:

- `home-desktop.png` — full-page homepage on desktop
- `home-mobile.png` — homepage in a mobile viewport
- `projects-section.png` — projects grid and filters
- `contact-page.png` — contact information and form

The screenshot checklist is in `screenshots/README.md`. These should be genuine captures of your final deployed site, not mock screenshots.
