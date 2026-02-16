# Azhar Hamim - Portfolio Website

A modern, responsive portfolio website for a Flutter Developer and Computer Science student.

## 🌟 Features

- **Fully Responsive Design** - Works seamlessly on mobile, tablet, and desktop devices
- **Modern Dark Theme** - Professional color palette with teal accents
- **Smooth Animations** - Subtle scroll reveals and hover effects
- **Clean Code** - Well-organized HTML, CSS, and JavaScript
- **SEO Optimized** - Proper meta tags and semantic HTML5
- **Fast Loading** - Optimized performance with minimal dependencies
- **Accessibility** - ARIA labels, keyboard navigation, and reduced motion support

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styling
├── script.js           # JavaScript functionality
├── favicon.png         # Favicon (placeholder - add your own)
└── README.md           # This file
```

## 🚀 Getting Started

### Option 1: Local Development

1. Download all files to a folder
2. Open `index.html` in your web browser
3. That's it! No build process required.

### Option 2: Deploy to Web

#### GitHub Pages (Recommended)
1. Create a new GitHub repository
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select your main branch and save
5. Your site will be live at `https://yourusername.github.io/repository-name`

#### Netlify
1. Drag and drop the folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site is instantly deployed!

#### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project folder
3. Follow the prompts

## ✏️ Customization Guide

### 1. Personal Information

**Update in `index.html`:**

- **Name**: Line 67 - Change "Azhar Hamim"
- **Title**: Line 68 - Update the hero title
- **Bio**: Lines 70-73 - Modify the hero description
- **About Section**: Lines 93-111 - Update your story
- **Email**: Replace `azhar.hamim@example.com` with your actual email
- **LinkedIn**: Replace `linkedin.com/in/azharhamim` with your profile URL
- **GitHub**: Replace `github.com/azharhamim` with your username

### 2. Projects

**Modify the Projects Section (Lines 264-427):**

Each project has:
- Title
- Description
- Tech tags
- GitHub link
- Live demo link

**To add a new project**, copy this template:

```html
<article class="project-card">
    <div class="project-number">04</div>
    <div class="project-content">
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-description">
            Project description here...
        </p>
        <div class="project-tech">
            <span class="tech-tag">Technology</span>
            <span class="tech-tag">Another Tech</span>
        </div>
        <div class="project-links">
            <a href="YOUR_GITHUB_URL" class="project-link">GitHub</a>
            <a href="YOUR_DEMO_URL" class="project-link">Live Demo</a>
        </div>
    </div>
</article>
```

### 3. Skills

**Add or modify skills in the Skills Section (Lines 176-263):**

Each skill card includes:
- Icon (SVG)
- Skill name
- Description

To add a skill, duplicate a `.skill-card` div and update the content.

### 4. Colors & Theme

**Modify colors in `styles.css` (Lines 5-20):**

```css
:root {
    --color-accent-primary: #06b6d4;  /* Main accent color */
    --color-accent-secondary: #0891b2;
    --color-bg-primary: #0a0e1a;      /* Background */
}
```

**Change to your preferred colors:**
- Blue: `#3b82f6`
- Purple: `#8b5cf6`
- Green: `#10b981`
- Orange: `#f59e0b`

### 5. Fonts

**Current fonts (Google Fonts):**
- **Headings & Body**: Sora
- **Code/Mono**: JetBrains Mono

**To change fonts:**

1. Visit [Google Fonts](https://fonts.google.com)
2. Select your preferred fonts
3. Replace the Google Fonts link in `index.html` (Line 22)
4. Update the CSS variables in `styles.css`:

```css
--font-primary: 'Your Font', sans-serif;
--font-mono: 'Your Mono Font', monospace;
```

### 6. Images & Favicon

**Add your favicon:**
1. Create or generate a favicon (16x16 or 32x32 PNG)
2. Name it `favicon.png`
3. Place it in the same folder as `index.html`

**Add profile image (optional):**
- Add an `<img>` tag in the hero or about section
- Style it with CSS

### 7. SEO Optimization

**Update meta tags in `index.html`:**

```html
<meta name="description" content="Your custom description">
<meta name="keywords" content="Your, Custom, Keywords">
<meta property="og:title" content="Your Name - Portfolio">
```

## 🎨 Optional Enhancements

The JavaScript file includes several optional features you can enable:

### Enable Typing Effect in Code Window
Uncomment line 76 in `script.js`:
```javascript
typeCodeEffect();
```

### Enable Theme Toggle
Uncomment line 143 in `script.js`:
```javascript
loadTheme();
```

### Enable Custom Cursor (Desktop Only)
Uncomment lines 156-158 in `script.js`:
```javascript
if (window.innerWidth > 768) {
    initCursorEffect();
}
```

### Enable Parallax Effect
Uncomment line 176 in `script.js`:
```javascript
parallaxEffect();
```

### Enable 3D Card Tilt Effect
Uncomment lines 193-195 in `script.js`:
```javascript
if (window.innerWidth > 768) {
    initTiltEffect();
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🛠️ Technologies Used

- HTML5 (Semantic markup)
- CSS3 (Flexbox, Grid, CSS Variables, Animations)
- JavaScript (ES6+, Intersection Observer API)
- Google Fonts (Sora, JetBrains Mono)

## ⚡ Performance Tips

1. **Optimize Images**: Use WebP format for better compression
2. **Lazy Loading**: Add `loading="lazy"` to images
3. **Minimize CSS/JS**: Use tools like [CSS Minifier](https://cssminifier.com)
4. **CDN**: Consider using a CDN for fonts
5. **Caching**: Configure proper cache headers on your server

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This template is free to use for personal and commercial projects.

## 🤝 Credits

Designed and developed by **Azhar Hamim**

---

## 📞 Need Help?

If you need help customizing your portfolio:

1. Check the comments in the code
2. Search for the section you want to modify
3. Make small changes and test in the browser
4. Use browser DevTools (F12) to debug

**Common Issues:**

- **Mobile menu not working**: Check that `script.js` is properly linked
- **Fonts not loading**: Verify Google Fonts link is correct
- **Animations not smooth**: Check if "prefers-reduced-motion" is enabled in browser

---

**Good luck with your portfolio! 🚀**
