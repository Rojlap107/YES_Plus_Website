# Youth Empowerment Support (YES+) Website

This is the official website for Youth Empowerment Support (YES+), an initiative by the Central Tibetan Administration dedicated to empowering Tibetan youth through education, skills training, and leadership development.

## Structure

The website consists of:

- `index.html` - Homepage
- `about.html` - About YES+
- `programmes.html` - Programmes Overview
- `contact.html` - Contact YES+ Form
- `/css/style.css` - Main styling file
- `/images/` - All banners, logos, partner logos
- `/js/main.js` - JavaScript for site functionality

## Setup Instructions

### Local Development

1. Clone or download this repository to your local machine
2. Open the files in your preferred code editor
3. Preview the site by opening any HTML file in a web browser

### Deployment to Netlify

1. Create a Netlify account at [netlify.com](https://www.netlify.com/)
2. From the Netlify dashboard, click "New site from Git"
3. Connect to your Git provider (GitHub, GitLab, or Bitbucket) and select this repository
4. Configure build settings (not needed for this static site - leave default)
5. Click "Deploy site"

The contact form is already configured with Netlify Forms functionality using the `data-netlify="true"` attribute.

## Adding Real Images

Replace the placeholder images in the `/images/` directory with real images:

- `hero-bg.jpg` - Background for the homepage hero section (recommended size: 1920x1080px)
- `banner-bg.jpg` - Background for page banners (recommended size: 1920x600px)
- `partner-placeholder.png` - Partner logos (recommended size: 200x200px)
- `leadership-placeholder.jpg` - Leadership programme image (recommended size: 600x400px)
- `digital-placeholder.jpg` - Digital skills programme image (recommended size: 600x400px)
- `culture-placeholder.jpg` - Cultural programme image (recommended size: 600x400px)

## Customization

- Update the content in HTML files to reflect accurate programme information
- Modify the colors in CSS by changing the CSS variables at the top of the `style.css` file
- Add additional pages by copying the structure of existing pages