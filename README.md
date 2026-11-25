# Muhammad Nouman Faiz — portfolio

Static, single-page portfolio. No build step and no dependencies.

| File | What it is |
| --- | --- |
| `index.html` | The whole site: markup, styles and script in one file |
| `resume.pdf` | Two-page résumé behind the "Download résumé" buttons |
| `vercel.json` | Tells Vercel to serve the files as-is (framework "Other", no install or build) and sets a few headers |

## Deploying

The repo is linked to the Vercel project `portfolio_`. Every push to `main` deploys to production at
https://portfolio-olive-one-92.vercel.app. Other branches get preview URLs.

## Editing

- Work history, projects and research are plain HTML in `index.html`. The detail panels that slide up live in the
  `#details` block near the bottom of the file, keyed by `data-id`.
- To update the résumé, replace `resume.pdf` and keep the file name.

## Previous version

The earlier Create React App portfolio is in the history at commit `7ef6336` (`git checkout 7ef6336`).
