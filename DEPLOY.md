# Deploy to Vercel & GitHub

## Current git setup

- **`origin`**: `https://github.com/kamran011/kamranqayyum-portfolio.git` — your portfolio (push target).
- **`upstream`**: `https://github.com/MoncyDev/Portfolio-Website.git` — original template (read-only reference).

Your latest work is **committed locally** on `main`. To publish it:

## 1. Create the GitHub repository (once)

1. Open https://github.com/new  
2. Repository name: **`kamranqayyum-portfolio`** (must match `origin` above).  
3. Leave it **empty** (no README, no .gitignore).  
4. Create repository.

If you prefer another name, run:

```bash
git remote set-url origin https://github.com/kamran011/<YOUR-REPO-NAME>.git
```

## 2. Push to GitHub

From the project folder:

```bash
git push -u origin main
```

If GitHub asks for credentials, use a [Personal Access Token](https://github.com/settings/tokens) as the password (HTTPS), or set up [SSH keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) and change `origin` to the SSH URL.

## 3. Deploy on Vercel

1. Sign in at https://vercel.com with GitHub.  
2. **New Project** → Import **`kamranqayyum-portfolio`**.  
3. Framework: **Vite**. Build: `npm run build`. Output: `dist`.  
4. **Deploy**.

`vercel.json` includes SPA rewrites. `@vercel/analytics` is in `src/main.tsx` — enable Web Analytics in the Vercel project if you want the dashboard.
