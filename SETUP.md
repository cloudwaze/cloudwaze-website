# CloudWaze Website Setup Instructions

This document provides step-by-step instructions for setting up and deploying the CloudWaze website.

## Initial Setup

1. Create a new repository on GitHub
   - Go to GitHub.com
   - Click "New repository"
   - Name it "cloudwaze-website"
   - Make it public
   - Don't initialize with any files

2. Clone and set up the project locally:
   ```bash
   # Clone the repository
   git clone https://github.com/your-username/cloudwaze-website.git
   cd cloudwaze-website

   # Create a new Astro project
   npm create astro@latest .
   ```

## Configuration Updates

1. Update `astro.config.mjs`:
   - Replace `your-username` with your GitHub username
   - Update the repository name if different from 'cloudwaze-website'

2. GitHub Pages Setup:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Source", select "GitHub Actions"
   - If using a custom domain:
     - Add your domain in the "Custom domain" section
     - Update the `cname` in `.github/workflows/deploy.yml`
     - Update the `site` in `astro.config.mjs`

## Required Files Structure

Ensure you have the following key files: 


/
├── .github/
│ └── workflows/
│ └── deploy.yml
├── src/
│ ├── components/
│ │ ├── Header.astro
│ │ ├── Footer.astro
│ │ ├── HeroSection.astro
│ │ ├── ServicesGrid.astro
│ │ └── Metrics.astro
│ ├── layouts/
│ │ └── BaseLayout.astro
│ └── pages/
│ └── index.astro
├── astro.config.mjs
├── package.json
└── README.md


## Dependencies Installation

Install required dependencies:

bash
Install Astro and Tailwind CSS
npm install @astrojs/tailwind tailwindcss

Install development dependencies
npm install -D @types/node typescript


## Local Development

1. Start the development server:
   ```bash
   npm run dev
   ```

2. View the site at `http://localhost:4321`

## Deployment Process

1. Initial Deployment:
   ```bash
   git add .
   git commit -m "Initial website setup"
   git push origin main
   ```

2. The GitHub Action will automatically:
   - Build the website
   - Deploy to GitHub Pages
   - Set up your custom domain (if configured)

3. Monitor deployment:
   - Go to your repository's "Actions" tab
   - Watch the deployment workflow
   - Check for any errors in the logs

## Troubleshooting

Common issues and solutions:

1. If deployment fails:
   - Check if GitHub Pages is enabled in repository settings
   - Verify GitHub Actions has necessary permissions
   - Ensure all dependencies are properly installed

2. If styles aren't loading:
   - Verify Tailwind CSS is properly configured
   - Check for any console errors
   - Ensure base path is correctly set in astro.config.mjs

3. If custom domain isn't working:
   - Verify DNS settings
   - Check CNAME file exists in deployment
   - Wait for DNS propagation (can take up to 48 hours)

## Maintenance

Regular maintenance tasks:

1. Keep dependencies updated:
   ```bash
   npm update
   ```

2. Monitor GitHub Actions usage
3. Regularly backup your content
4. Test the site after major dependency updates

## Additional Resources

- [Astro Documentation](https://docs.astro.build)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Support

If you encounter any issues:
1. Check the GitHub Issues tab
2. Review Astro's Discord community
3. Consult the documentation
4. Create a new issue in the repository

Remember to replace placeholder values (like 'your-username') with actual values before deploying.

