# Azure Deployment Guide - Frontend Only

This guide covers deploying your React/Vite frontend app to Azure Static Web Apps.

## Architecture

- **Frontend**: Azure Static Web Apps (serves static files from `dist/` folder)

## Prerequisites

1. Azure account (free tier available) - Sign up at [azure.com](https://azure.microsoft.com/free/)
2. GitHub account (for automatic deployments)
3. Node.js installed (for local development and building)

## Deploy Frontend to Azure Static Web Apps

### Option A: Using Azure Portal (Recommended - Easiest)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Create Static Web App in Azure Portal:**
   - Go to [Azure Portal](https://portal.azure.com)
   - Click "Create a resource"
   - Search for "Static Web App"
   - Click "Create"
   - Fill in:
     - **Subscription**: Your subscription
     - **Resource Group**: Create new (e.g., `my-app-rg`)
     - **Name**: `your-app-name` (must be globally unique)
     - **Plan type**: Free
     - **Region**: Choose closest to you (e.g., `East US 2`)
     - **Source**: GitHub
     - **Sign in with GitHub**: Click and authorize
     - **Organization**: Your GitHub username or org
     - **Repository**: Your repo name
     - **Branch**: `main`
     - **Build Presets**: Custom
     - **App location**: `/` (root of your repo)
     - **Api location**: Leave empty
     - **Output location**: `dist` (this is where Vite builds to)

3. **Azure will automatically:**
   - Create a GitHub Actions workflow file (`.github/workflows/azure-static-web-apps.yml`)
   - Add a secret to your GitHub repo (`AZURE_STATIC_WEB_APPS_API_TOKEN`)
   - Deploy on every push to `main` branch
   - Provide you with a URL like `https://your-app-name.azurestaticapps.net`

4. **Wait for first deployment:**
   - Go to your GitHub repo → Actions tab
   - Watch the deployment workflow run
   - Once complete, visit your Azure Static Web App URL

### Option B: Using Azure CLI

```bash
# Login to Azure
az login

# Create resource group
az group create --name myResourceGroup --location eastus

# Create Static Web App
az staticwebapp create \
  --name your-app-name-frontend \
  --resource-group myResourceGroup \
  --source https://github.com/YOUR_USERNAME/YOUR_REPO \
  --location eastus \
  --branch main \
  --app-location "/" \
  --output-location "dist"
```

## What Gets Deployed

When you deploy, Azure will:
1. Run `npm install` in your repo root
2. Run `npm run build` (which runs `vite build`)
3. Deploy the `dist/` folder to Azure Static Web Apps
4. Serve your React app at your Azure URL

## Build Configuration

The build process is configured in:
- `package.json` - Contains `"build": "vite build"` script
- `vite.config.js` - Vite configuration
- `.github/workflows/azure-static-web-apps.yml` - GitHub Actions workflow (auto-created by Azure)

## Environment Variables (Optional)

If you need environment variables in your frontend:

1. **Create `.env.production` file:**
   ```
   VITE_API_URL=https://your-api-url.com
   ```

2. **Use in your code:**
   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

3. **Azure will use these during build** (they're baked into the build, not runtime)

## Files Structure

```
app/
├── src/                    # Frontend React code
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── staticwebapp.config.json  # Azure Static Web Apps config (routing)
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml  # GitHub Actions workflow (auto-created)
├── package.json            # Dependencies and build script
├── vite.config.js          # Vite configuration
├── index.html              # HTML entry point
└── AZURE_DEPLOYMENT.md     # This file
```

## Testing Locally

Before deploying, test your build locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (same as Azure will do)
npm run build

# Preview production build
npm run preview
```

The `dist/` folder is what gets deployed to Azure.

## Cost

- **Azure Static Web Apps Free Tier** includes:
  - 100 GB bandwidth/month
  - Custom domains
  - SSL certificates (automatic)
  - GitHub Actions integration
  - **Total: FREE** (perfect for getting started!)

## Next Steps

1. Set up custom domains (optional)
2. Configure SSL certificates (automatic with Azure)
3. Set up monitoring and logging
4. Configure CI/CD pipelines
5. Add authentication if needed

## Troubleshooting

- **Build fails**: 
  - Check GitHub Actions logs in your repo → Actions tab
  - Verify `npm run build` works locally
  - Check that `dist/` folder is generated after build

- **Site not loading**:
  - Verify the build completed successfully
  - Check Azure Portal → Your Static Web App → Deployment history
  - Ensure `staticwebapp.config.json` is correct

- **Routes not working (404 errors)**:
  - The `staticwebapp.config.json` file handles routing
  - It redirects all routes to `index.html` (for React Router)
  - Verify the file exists in your repo root

- **Changes not deploying**:
  - Ensure you pushed to `main` branch
  - Check GitHub Actions workflow is running
  - Wait a few minutes for deployment to complete
