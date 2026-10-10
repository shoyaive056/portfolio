# Mahmudul Hassan Shoyaive | Portfolio

A personal portfolio built with React and Vite. It is a static frontend project: no backend, no database, no API keys.

## Run it (Windows, VS Code)

Install Node.js 18 or newer from https://nodejs.org, open this folder in VS Code, open the terminal (Ctrl + `), then run:

```bash
npm install
npm run dev
```

Open the address shown in the terminal (usually http://localhost:5173).

To check the production build:

```bash
npm run build
npm run preview
```

## Edit these files first

| What | File |
| --- | --- |
| Name, title, About text, education, phone, email, LinkedIn, GitHub, Facebook | `src/data/profile.js` |
| Navigation links | `src/data/navigation.js` |
| Skills | `src/data/skills.js` |
| Projects | `src/data/projects.js` |
| Page title, description, Open Graph tags | `index.html` |
| Colors (ivory, forest, sage, champagne) and spacing | `src/styles/variables.css` |
| Email subject and prefilled message | `emailTemplate` in `src/data/profile.js` |
| Brand logo colors and which logos exist | `src/components/BrandLogo.jsx` |

Everything in `src/data/profile.js` marked as a placeholder (phone, email, social URLs) must be replaced with your real details.

## Replace the profile photo

1. Prepare a portrait photo, ratio 4:5, at least 800 x 1000 px. Compress it (for example with squoosh.app) to keep it under about 200 KB.
2. Save it as `src/assets/profile.jpg` (`.jpeg`, `.png` and `.webp` also work).
3. Restart `npm run dev` if it is running.

Until a photo exists, a monogram placeholder is shown. If the image fails to load, the same placeholder appears.

Privacy note: the photo is a normal project file, not an upload form. A static website cannot restrict who sees a deployed image, so only add a photo you are happy to make public. If you ever need a private upload dashboard, it requires a backend with authentication and storage permissions. Hiding a button in frontend code is not security.

## Add your CV

Save your PDF as `public/resume.pdf`. Both CV buttons then download it as `Mahmudul-Hassan-Shoyaive-CV.pdf`. To change the path or download name, edit `resume` in `src/data/profile.js`.

If the file is missing, the CV button explains where to put it instead of starting a download. This check works on `npm run dev`, `npm run preview` and hosted sites. It cannot run if you open `index.html` directly from disk, which is not supported by Vite builds anyway.

## Projects

Edit the entries in `src/data/projects.js`. Each project has `title`, `category`, `description`, `technologies`, `thumbnail`, `liveUrl`, `repoUrl`.

- Leave `liveUrl` or `repoUrl` as `''` and that button is hidden.
- For a screenshot, save it in `public/projects/` (for example `shop.png`, ratio 16:10) and set `thumbnail: 'projects/shop.png'`.
- Add or remove entries freely. The grid adapts, though the desktop layout is designed for five.

"View All Projects" points to the GitHub URL in `profile.js`.

## Email button

The Send Email button opens the visitor's email app through a `mailto:` link built in `src/utils/email.js`. The address comes from `profile.contact.email`, and the subject and message come from `profile.emailTemplate`. Every parameter is URL encoded (spaces as `%20`, line breaks as CRLF).

A website cannot tell whether a message was actually sent, and `mailto:` does nothing on a device with no email app set up. So if no email app takes over within about 1.5 seconds, the button shows an honest fallback panel: the address, a Copy address button, and a Write in Gmail link. It never shows a "sent" message.

No setup is needed for this to work, apart from replacing the placeholder email address in `profile.js`.

There is intentionally no contact form. A frontend-only form cannot send messages. For a form that delivers straight to your inbox, connect a form service (such as Formspree or Web3Forms) or your own backend, and keep the mailto button as the fallback.

## Design notes

- Palette: warm ivory background, deep forest green for text accents and primary buttons, muted sage for lines and details, champagne for secondary buttons and highlights. All tokens are in `src/styles/variables.css`.
- Fonts: Fraunces (headings) and Manrope (body), both self hosted through `@fontsource-variable`, so there are no requests to Google.
- Icons: interface icons come from `react-icons/lu` (Lucide). Brand logos (GitHub, LinkedIn, Facebook, Java, JavaScript, Python, C, C++, React, HTML5, CSS3, MySQL, MongoDB) come from `react-icons/fa6` and `react-icons/si` and are set to their official brand colors in `BrandLogo.jsx`. The site theme never applies filters, opacity or gradients to them.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

`node_modules`, `dist` and `.env` files are already ignored.

## Deploy

The build uses relative paths (`base: './'`), so it works on any static host.

- **Netlify:** import the repo. Build command `npm run build`, publish directory `dist`.
- **Vercel:** import the repo. The Vite preset is detected automatically.
- **GitHub Pages:** in the repository go to Settings > Pages and set Source to "GitHub Actions". The included workflow (`.github/workflows/deploy.yml`) builds and publishes on every push to `main`. The relative base path means no extra configuration is needed for `https://USERNAME.github.io/REPO/`. If you ever switch to absolute asset paths, set `base: '/REPO/'` in `vite.config.js`.

After deploying, update `og:url` in `index.html` and consider adding an `og:image` (a 1200 x 630 image) so links look good when shared.

## Project structure

```
public/            favicon, resume.pdf (you add), projects/ (screenshots)
src/
  assets/          profile.jpg (you add)
  components/      Navbar, MobileMenu, Button, CvButton, EmailAction, BrandLogo, SectionHeading,
                   ProfileImage, SkillGroup, ProjectCard, SocialLinks, ContactItem, Footer
  sections/        Hero, About, Skills, Projects, Education, Contact
  hooks/           useActiveSection, useResumeStatus
  data/            profile.js, navigation.js, skills.js, projects.js
  utils/           email.js
  styles/          variables.css, global.css, layout.css, components.css, responsive.css
  App.jsx, main.jsx
```
