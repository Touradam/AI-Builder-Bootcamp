# AI Mastery Program — Friends Beta Website

A static 2-page website for the free friends-only beta cohort of the AI Mastery Program. Built with HTML, CSS, and vanilla JavaScript — no build step.

## Pages

- **index.html** — Home: warm beta messaging, what you'll learn, hands-on callout, gated signup flow (Notion form)
- **success.html** — Get Ready: requirements, expectations, and 1-month outcomes

## Project Structure

```
├── index.html
├── success.html
├── css/
│   └── styles.css
├── js/
│   ├── data.js          # Site constants, cohort schedule, roadmap phases
│   ├── layout.js        # Header and footer
│   ├── interactions.js  # Roadmap flip cards, animations, countdown
│   ├── beta-gate.js     # Signup gate validation and modal
│   └── main.js          # Mobile nav, dynamic sections
├── assets/
│   ├── logo.svg
│   └── course-roadmap.svg
├── robots.txt
├── sitemap.xml
└── README.md
```

## Getting Started

Open `index.html` in a browser — no server required.

Optional local server:

```bash
python -m http.server 8000
```

## Customization

### Notion signup form

In `js/data.js`, set:

```js
const NOTION_FORM_URL = 'https://your-notion-form-url';
```

### Gate allowed values

Gate input constraints live in `js/data.js` (`betaGateDigits1`, `betaGateDigits2`, `betaGatePairs`). Validation logic is in `js/beta-gate.js`.

### Cohort schedule

Edit `cohortSchedule` in `js/data.js`. Home page elements with `data-cohort-start` update automatically.

### Styling

Colors and layout use CSS variables at the top of `css/styles.css` (Midnight Champagne theme).

## Deployment

Repository: [github.com/Touradam/AIBuilder](https://github.com/Touradam/AIBuilder)

Only website files are tracked in git (HTML, CSS, JS, `assets/logo.svg`, `assets/course-roadmap.svg`, `robots.txt`, `sitemap.xml`, and the Pages workflow). Flyers, drafts, team images, and course materials stay local via `.gitignore`.

GitHub Pages deploys automatically via `.github/workflows/static.yml` on push to `master`.

```bash
git remote set-url origin https://github.com/Touradam/AIBuilder.git
git push -u origin master
```

If the site returns 404 after the first push, open the repo **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.

## License

This project is private and proprietary.
