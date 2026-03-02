# Raja Kumar Old Iron Shop - Production Deployment Guide

## 🚀 Quick Deployment Links

### Deploy to Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

### Deploy to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 📋 Pre-Deployment Checklist

✅ **Completed:**
- [x] SEO optimization with meta tags
- [x] LocalBusiness structured data (JSON-LD)
- [x] Production build configuration
- [x] Form validation and sanitization
- [x] Mobile responsiveness
- [x] Performance optimization
- [x] Smooth scrolling
- [x] Loading animation
- [x] Scroll-to-top button
- [x] Security headers

⚠️ **Required Before Launch:**
- [ ] Add favicon files (favicon-32x32.png, favicon-16x16.png, apple-touch-icon.png)
- [ ] Add og-image.jpg (1200x630px for social sharing)
- [ ] Update domain in index.html (replace https://rajakumarironshop.com with your actual domain)
- [ ] Test all forms on mobile devices
- [ ] Test WhatsApp integration
- [ ] Verify Google Maps link works

---

## 🏗️ Build Commands

### Development
```bash
cd frontend
npm install
npm run dev
```

### Production Build
```bash
cd frontend
npm install
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Option 1: Netlify (Recommended - Easiest)

#### Via Netlify CLI:
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Navigate to frontend folder
cd frontend

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod
```

#### Via Netlify Dashboard:
1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository
4. Configure build settings:
   - **Base directory:** `frontend`
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click "Deploy site"

**Custom Domain Setup:**
- Go to Site settings → Domain management
- Click "Add custom domain"
- Follow DNS configuration instructions

---

### Option 2: Vercel

#### Via Vercel CLI:
```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to frontend folder
cd frontend

# Build the project
npm run build

# Deploy to Vercel
vercel --prod
```

#### Via Vercel Dashboard:
1. Go to https://vercel.com/new
2. Import your Git repository
3. Framework Preset will auto-detect as "Vite"
4. Configure:
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click "Deploy"

---

### Option 3: Hostinger (Static Hosting)

#### Manual Upload:
1. Build the project locally:
   ```bash
   cd frontend
   npm run build
   ```

2. The `dist` folder will be created with all production files

3. Upload contents of `dist` folder to Hostinger:
   - Login to Hostinger control panel
   - Go to File Manager
   - Navigate to `public_html` (or your domain folder)
   - Upload ALL files from `dist` folder
   - Ensure `index.html` is in the root

4. Configure `.htaccess` for SPA routing:
   Create a `.htaccess` file in public_html with:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

#### Via FTP:
```bash
# After building
cd dist

# Upload via FTP using FileZilla or similar
# Host: your-domain.com
# Port: 21 (or 22 for SFTP)
# Upload all files from dist/ to public_html/
```

---

## 🔧 Environment Configuration

### Update Domain References
Before deploying, replace all instances of `https://rajakumarironshop.com` in `index.html` with your actual domain.

---

## 📱 Required Assets

Place these files in `frontend/public/` folder:

### Favicon Files:
- `favicon-32x32.png` (32x32px)
- `favicon-16x16.png` (16x16px)
- `apple-touch-icon.png` (180x180px)

### Social Media Image:
- `og-image.jpg` (1200x630px)
  - Should show: Shop name, location, phone number
  - Eye-catching design with Safety Yellow (#FACC15) and Steel Grey (#475569)

**Generate Favicons Online:**
- https://realfavicongenerator.net/
- https://favicon.io/

---

## ⚡ Performance Optimization

### Already Implemented:
- ✅ Code splitting (React vendor chunks)
- ✅ Minification (Terser)
- ✅ Console.log removal in production
- ✅ Asset optimization
- ✅ Lazy loading ready
- ✅ Preconnect for external resources

### Expected Lighthouse Scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 100

---

## 🔒 Security Features

- ✅ Form input sanitization
- ✅ XSS protection headers
- ✅ Content Security Policy
- ✅ Phone number validation (Indian format)
- ✅ Name validation
- ✅ Empty submission prevention

---

## 📊 SEO Features

### Implemented:
- ✅ Proper title and meta description
- ✅ Keywords for local scrap business
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ LocalBusiness JSON-LD schema
- ✅ Geo tags for Vijayawada location
- ✅ Mobile-first responsive design

### Local SEO Keywords:
- Iron Scrap Buyer
- Scrap Dealer in Vijayawada
- Old Iron Shop
- Scrap Pickup
- Krishnalanka Scrap Buyer
- Best Scrap Prices Vijayawada

---

## 🧪 Testing Before Launch

### Manual Tests:
```bash
# 1. Build the project
npm run build

# 2. Preview production build locally
npm run preview

# 3. Test on different devices:
# - Mobile (360px width)
# - Tablet (768px width)
# - Desktop (1920px width)

# 4. Test all interactive elements:
# - Call button
# - WhatsApp button
# - Google Maps link
# - Form submission
# - Scroll to top button
# - Navigation links
```

### Lighthouse Test:
```bash
# Open production build in Chrome
# Press F12 → Lighthouse tab → Generate report
# Target scores: Performance 90+, SEO 100
```

---

## 📞 Contact Features Working:

1. **Phone Numbers:**
   - Primary: +91 9346212163
   - Secondary: +91 9951750999
   - Click-to-call enabled

2. **WhatsApp Integration:**
   - Floating button (bottom right)
   - Form submission via WhatsApp
   - Pre-filled message template

3. **Google Maps:**
   - Clickable location in Hero section
   - Opens in new tab

---

## 🎨 Theme Colors

```css
Steel Grey: #475569
Safety Yellow: #FACC15
Light Grey Background: #F1F5F9
White Cards: #FFFFFF
Action Green (WhatsApp): #16A34A
```

---

## 📦 Build Output Structure

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other chunked files]
├── favicon-32x32.png
├── favicon-16x16.png
├── apple-touch-icon.png
└── og-image.jpg
```

---

## 🚨 Troubleshooting

### Build Fails:
```bash
# Clear node_modules and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

### SPA Routes Not Working:
- Ensure redirects are configured (Netlify: `_redirects` or Vercel: automatic)
- For Hostinger: Use `.htaccess` file provided above

### Images Not Loading:
- Ensure all image paths start with `/` (e.g., `/logo.png`)
- Place images in `public/` folder

---

## 📈 Post-Deployment Tasks

1. **Google Search Console:**
   - Submit sitemap
   - Request indexing

2. **Google My Business:**
   - Claim/update listing
   - Add website URL

3. **Analytics:**
   - Add Google Analytics (GA4)
   - Add Facebook Pixel (optional)

4. **Performance Monitoring:**
   - Set up Lighthouse CI
   - Monitor Core Web Vitals

---

## ✅ Launch Checklist

Before making site live:
- [ ] All assets (favicons, og-image) are added
- [ ] Domain URLs updated in index.html
- [ ] Phone numbers verified
- [ ] WhatsApp links tested on mobile
- [ ] Google Maps link tested
- [ ] Forms tested on desktop and mobile
- [ ] All pages load under 3 seconds
- [ ] Mobile responsiveness verified
- [ ] Lighthouse scores checked (90+ performance)
- [ ] 404 page redirects to home
- [ ] SSL certificate enabled
- [ ] Backups configured

---

## 📞 Support

For deployment issues:
- Netlify Docs: https://docs.netlify.com
- Vercel Docs: https://vercel.com/docs
- Hostinger Support: https://www.hostinger.com/tutorials

---

## 🎉 You're Ready to Launch!

**Recommended:** Start with Netlify for the easiest deployment with automatic SSL, CDN, and continuous deployment from Git.

**Cost:** All three options have free tiers perfect for this static website.
