# about.me

Personal profile site of Vipin V Kartha, built with [Astro](https://astro.build) and Tailwind CSS.
Live at https://about-me-ten-nu.vercel.app/.

## Commands

| Command           | Action                                     |
| :---------------- | :----------------------------------------- |
| `npm install`     | Install dependencies                       |
| `npm run dev`     | Start a local server at `localhost:4321`   |
| `npm run build`   | Build the site to `./dist/`                |
| `npm run preview` | Serve the built site locally               |

## Updating content

- **Profile, skills, experience, education and awards:** the `profile` object at the top of `src/pages/index.astro`.
- **CV PDF:** build `resume.pdf` in the MyCV repository and copy it to `public/vipin_kartha_cv.pdf`.
- **Site address** (used for link previews): `site` in `astro.config.mjs`.
