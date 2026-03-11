## NAIC-AHIS website

### Environment variables
- **Local dev**: copy `.env.example` to `.env.local` (or `.env`) and set:
  - `VITE_GEMINI_API_ENDPOINT`
  - `VITE_GEMINI_API_KEY`

- **GitHub Pages deploy**: set a repo secret named `VITE_GEMINI_API_KEY`. The workflow injects it at build time.
