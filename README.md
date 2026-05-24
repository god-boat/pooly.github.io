# pooly.github.io

Documentation and user manual for [Pooly](https://pooly.studio), a mobile DAW.

Built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) and deployed via GitHub Actions.

## Local development

```
pip install -r requirements.txt
python -m mkdocs serve
```

Then open http://127.0.0.1:8000

If `mkdocs` is on your PATH you can use `mkdocs serve` directly instead.

## Deployment

Pushes to `main` automatically build and deploy to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.

The custom domain (`pooly.studio`) must be configured in the repo's **Settings > Pages > Custom domain** — not via a CNAME file.
