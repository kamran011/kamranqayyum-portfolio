# Deploy to Vercel

## One-time setup

1. **Create a GitHub repository** (empty) under your account: https://github.com/new  
   Example: `kamranqayyum-portfolio`

2. **Point this repo at your GitHub remote** (replace `<YOUR-REPO>`):

   ```bash
   git remote set-url origin https://github.com/kamran011/<YOUR-REPO>.git
   git remote -v
   ```

3. **Commit and push** (ensure Git LFS is installed if you use LFS for `character.glb`):

   ```bash
   git add .
   git commit -m "Personalize portfolio"
   git push -u origin main
   ```

   If your default branch is not `main`, use `git push -u origin HEAD`.

## Vercel

1. Sign in at https://vercel.com with GitHub.
2. **New Project** → Import your repository.
3. Framework: **Vite** (auto-detected). Build: `npm run build`. Output: `dist`.
4. **Deploy**.

`vercel.json` includes SPA rewrites so client-side routing works. `@vercel/analytics` is enabled in `src/main.tsx` — enable Web Analytics in your Vercel project settings if you want the dashboard.
