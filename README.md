# Andrea Bianchi — CV

A single-page academic CV for [Andrea Bianchi](http://andrea.kaist.id), Associate Professor at KAIST's Department of Industrial Design (tenured) and Adjunct Professor at the School of Computing and the Human-Robot Interaction Center.

Built with [Astro](https://astro.build) and deployed at **[andrea.kaist.id](http://andrea.kaist.id)**.

## Project Structure

```
src/
├── components/       # One .astro component per CV section
├── content/
│   └── markdown/     # Awards, press, services, talks (Markdown)
├── data/             # Publications (.bib), experience, education,
│                     # patents, teaching (YAML)
├── layouts/
│   └── Layout.astro  # Base HTML layout
└── pages/
    └── index.astro   # Single-page entry point
public/
└── assets/
    └── images/       # Profile photo and other static images
```

## Commands

| Command           | Action                                        |
| :---------------- | :-------------------------------------------- |
| `npm install`     | Install dependencies                          |
| `npm run dev`     | Start local dev server at `localhost:4321`    |
| `npm run build`   | Build for production to `./dist/`             |
| `npm run preview` | Preview the production build locally          |
| `npm run publish` | Build and deploy to `andrea.kaist.id` (Surge) |

## Updating Content

| What to edit                   | Where                          |
| :----------------------------- | :----------------------------- |
| Profile info                   | `src/components/Profile.astro` |
| Experience                     | `src/data/experience.yaml`     |
| Education                      | `src/data/education.yaml`      |
| Teaching                       | `src/data/teaching.yaml`       |
| Patents                        | `src/data/patents.yaml`        |
| Publications                   | `src/data/andrea-pub.bib`      |
| Awards, talks, press, services | `src/content/markdown/*.md`    |

## Deployment

The site is deployed as a static site via [Surge](https://surge.sh) to `andrea.kaist.id`. Run `npm run publish` to build and push a new version.
