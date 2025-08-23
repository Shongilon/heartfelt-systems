# GitHub Pages Deployment Guide

## Quick Setup

1. **Update Repository Name**: In `vite.config.ts`, replace `your-repo-name` with your actual GitHub repository name:
   ```ts
   base: mode === 'production' ? '/your-actual-repo-name/' : '/',
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

3. **Push Changes**: The GitHub Action will automatically build and deploy your site.

## Manual Deployment

If you prefer manual deployment:

```bash
# Build the project
npm run build

# The dist folder contains your built site
# Upload the contents of dist/ to your web server
```

## Troubleshooting

- **Blank Page**: Check if the base path in `vite.config.ts` matches your repository name
- **Assets Not Loading**: Ensure all image imports use relative paths
- **404 Errors**: Verify GitHub Pages is configured to serve from the correct branch/folder

Your site will be available at: `https://yourusername.github.io/your-repo-name/`