# Saur Capital Website Deployment Guide

This guide will help you deploy the Saur Capital static HTML website to GitHub Pages with a custom domain.

## GitHub Pages Deployment

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com/) and sign in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., "saurcapital-website")
4. Choose public visibility
5. Click "Create repository"

### Step 2: Upload Website Files

**Option 1: Using GitHub Web Interface**

1. In your new repository, click "Add file" > "Upload files"
2. Drag and drop all files from the "static_html" folder or use the file browser
3. Write a commit message (e.g., "Initial website upload")
4. Click "Commit changes"

**Option 2: Using Git Command Line**

```bash
# Clone the repository
git clone https://github.com/yourusername/saurcapital-website.git

# Copy all files from static_html to the repository folder
cp -r /path/to/static_html/* /path/to/saurcapital-website/

# Navigate to the repository
cd saurcapital-website

# Add all files
git add .

# Commit changes
git commit -m "Initial website upload"

# Push to GitHub
git push origin main
```

### Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" > "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Select the "main" branch and "/ (root)" folder
5. Click "Save"
6. Wait a few minutes for GitHub to build and deploy your site

### Step 4: Configure Custom Domain

1. In your domain registrar's DNS settings (e.g., GoDaddy), configure:

   **A Records** - point your apex domain to GitHub Pages' IP addresses:
   ```
   A @ 185.199.108.153
   A @ 185.199.109.153
   A @ 185.199.110.153
   A @ 185.199.111.153
   ```

   **CNAME Record** - set up www subdomain:
   ```
   CNAME www yourusername.github.io
   ```

2. In your GitHub repository settings:
   - Go to "Settings" > "Pages"
   - Under "Custom domain", enter "saurcapital.com"
   - Click "Save"
   - Check "Enforce HTTPS" (available after DNS propagation)

3. Wait for DNS propagation (up to 48 hours)

## Verification

After deployment, verify that:

- The website is accessible at https://saurcapital.com
- All pages load correctly
- Links between pages work properly
- Images display correctly
- Contact form submits properly
- The website works on different devices and browsers

## Updating the Website

To update the website after initial deployment:

1. Make changes to the HTML, CSS, or image files
2. Upload the modified files to GitHub using either the web interface or Git commands
3. GitHub Pages will automatically rebuild and deploy your site

## Troubleshooting

If you encounter issues with the deployment:

- Ensure DNS settings are correctly configured
- Check GitHub Pages settings in your repository
- Verify that the CNAME file contains the correct domain name
- Make sure all file paths in HTML and CSS files are correct
- Check GitHub Pages build logs for any errors