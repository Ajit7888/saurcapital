# Saur Capital Website (Static HTML)

This is a static HTML website for Saur Capital, a premier advisory firm specializing in infrastructure financing, project investments, and renewable energy sector consulting.

## Website Structure

The website consists of the following pages:

- `index.html` - Home page
- `about.html` - About Us page with company information
- `services.html` - Services page detailing the company's offerings
- `contact.html` - Contact page with a form and company contact information
- `404.html` - Custom 404 error page
- `CNAME` - File for GitHub Pages custom domain configuration

## Technologies Used

- HTML5
- CSS3
- Font Awesome icons

## Deployment

### GitHub Pages Deployment

1. Create a new GitHub repository
2. Upload all files from this folder to the repository
3. Go to repository Settings > Pages
4. Set the source to "main" branch and the folder to "/ (root)"
5. The CNAME file is already included to configure the custom domain

### DNS Configuration for Custom Domain

To configure the custom domain (saurcapital.com) with GitHub Pages:

1. In your domain registrar (like GoDaddy), configure the following DNS settings:
   - A Records pointing to GitHub Pages IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - CNAME Record:
     ```
     www -> [your-github-username].github.io
     ```

2. Wait for DNS propagation (can take up to 48 hours)

## Customization

- Edit the HTML files to modify content
- Modify `css/styles.css` to change the website's appearance
- Replace or add images in the `images` folder