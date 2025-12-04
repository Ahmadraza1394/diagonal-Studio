# Deployment Guide for Hostinger

## Issues Fixed for Production Deployment

### 1. **i18n localStorage Access Issue**

**Problem:** The translation feature wasn't working because `localStorage` and `navigator` were accessed during build time, causing errors in production.

**Solution:** Updated `src/config/i18n.js` to:

- Check if `window` exists before accessing browser APIs
- Add try-catch error handling
- Disable React Suspense for better SSR/build compatibility

### 2. **SPA Routing Configuration**

**Problem:** Direct URL access to routes (e.g., `/services`, `/about`) would fail on Hostinger.

**Solution:** Created `public/.htaccess` file to handle client-side routing for Apache servers.

### 3. **Build Optimization**

**Problem:** Large bundle sizes and unoptimized builds.

**Solution:** Updated `vite.config.js` with:

- Code splitting for vendor libraries
- Minification settings
- Proper asset organization

## Deployment Steps for Hostinger

### Step 1: Build the Application

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Step 2: Upload to Hostinger

#### Option A: Using File Manager

1. Log in to your Hostinger control panel
2. Go to **File Manager**
3. Navigate to `public_html` (or your domain's root directory)
4. Delete all existing files in the directory
5. Upload all contents from the `dist` folder to `public_html`
6. Ensure `.htaccess` file is uploaded (it's hidden by default)

#### Option B: Using FTP

1. Connect to your Hostinger account via FTP (FileZilla, etc.)
2. Navigate to `public_html`
3. Upload all files from the `dist` folder
4. Verify `.htaccess` is uploaded

### Step 3: Verify Deployment

1. **Check Homepage:** Visit your domain (e.g., `https://yourdomain.com`)
2. **Test Language Switcher:** Click the language switcher in the header
3. **Test Routing:** Navigate to different pages:
   - `/services`
   - `/about`
   - `/contact`
   - `/portfolio`
4. **Test Direct URL Access:** Type a route directly in the browser (e.g., `https://yourdomain.com/services`)
5. **Check Browser Console:** Open DevTools and check for errors

### Step 4: Clear Cache

If translations still don't work:

1. Clear your browser cache (Ctrl+Shift+Delete)
2. Try in incognito/private mode
3. Clear Hostinger's cache (if using their caching feature)

## Troubleshooting

### Translation Feature Not Working

**Check 1: Verify Files Are Uploaded**

- Ensure all files in `dist/assets` are uploaded
- Check that JSON translation files are included in the build

**Check 2: Browser Console**

- Open DevTools (F12)
- Look for 404 errors on translation files
- Check for JavaScript errors

**Check 3: localStorage Access**

- Open DevTools > Application > Local Storage
- Verify `i18nLanguage` key can be set
- Some browsers block localStorage in certain modes

### Routes Not Working (404 Errors)

**Check 1: .htaccess File**

- Verify `.htaccess` exists in `public_html`
- Check file permissions (should be 644)

**Check 2: Apache mod_rewrite**

- Ensure mod_rewrite is enabled on your Hostinger account
- Contact Hostinger support if needed

### Assets Not Loading

**Check 1: Base Path**

- Verify all assets are in the correct directory structure
- Check browser DevTools Network tab for 404s

**Check 2: File Permissions**

- Ensure files have correct permissions (644 for files, 755 for directories)

## Environment Variables

If you have environment variables (e.g., API keys):

1. Create `.env.production` file:

```env
VITE_API_URL=https://your-api-url.com
```

2. Rebuild the application:

```bash
npm run build
```

3. Upload the new `dist` folder

## Performance Optimization

### Enable Gzip Compression

Add to `.htaccess`:

```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>
```

### Browser Caching

Add to `.htaccess`:

```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

## Post-Deployment Checklist

- [ ] Homepage loads correctly
- [ ] Language switcher works (ES ↔ EN)
- [ ] All navigation links work
- [ ] Direct URL access works for all routes
- [ ] Images and assets load properly
- [ ] Contact form works (if using EmailJS)
- [ ] Mobile responsive design works
- [ ] No console errors in browser DevTools
- [ ] Translation persists after page reload
- [ ] All pages display correct translated content

## Support

If issues persist:

1. Check browser console for specific errors
2. Verify all files from `dist` are uploaded
3. Contact Hostinger support for server-specific issues
4. Check that mod_rewrite is enabled on your hosting plan

## Files Modified for Deployment

1. `src/config/i18n.js` - Fixed localStorage access
2. `src/components/common/LanguageSwitcher.jsx` - Safe localStorage handling
3. `vite.config.js` - Build optimization
4. `public/.htaccess` - SPA routing support (NEW)
