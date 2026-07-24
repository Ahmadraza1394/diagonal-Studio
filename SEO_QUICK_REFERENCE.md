# SEO Quick Reference - Diagonal Studio

## 🎯 Quick Access Guide

### Where to Update SEO Content

#### **1. Update Keywords**

📁 `frontend/src/config/seoConfig.js`

```javascript
// Change keywords for any page:
pages: {
  home: {
    en: {
      keywords: ["your", "new", "keywords", "here"];
    }
  }
}
```

#### **2. Update Image Alt Text**

📁 `frontend/src/utils/seoAltText.js`

```javascript
// Add new alt text:
export const seoAltText = {
  newImage: {
    es: "Descripción en español",
    en: "Description in English",
  },
};
```

#### **3. Add SEO to New Pages**

```jsx
import SEOHead from "../components/common/SEOHead";

function NewPage() {
  return (
    <>
      <SEOHead page="pageName" />
      {/* Your content */}
    </>
  );
}
```

---

## 📊 Current Target Keywords

### **Top Priority Keywords**

#### English:

1. architecture Riviera Maya
2. architects in Tulum
3. construction company Tulum
4. architecture firm Riviera Maya
5. real estate development Tulum
6. luxury villa construction Tulum
7. hotel construction Mexico

#### Spanish:

1. arquitectura Riviera Maya
2. arquitectos en Tulum
3. construcción Riviera Maya
4. estudio de arquitectura Tulum
5. desarrollo inmobiliario Tulum
6. construcción de villas Tulum
7. construcción de hoteles México

---

## 🔍 How to Check SEO

### **1. View Page Source**

- Right-click on any page → "View Page Source"
- Look for `<meta>` tags in the `<head>` section
- Check for structured data `<script type="application/ld+json">`

### **2. Google Tools**

- **Search Console:** https://search.google.com/search-console
- **Rich Results Test:** https://search.google.com/test/rich-results
- **PageSpeed Insights:** https://pagespeed.web.dev/

### **3. Browser Extensions**

- **SEO Meta in 1 Click** (Chrome/Firefox)
- **Detailed SEO Extension** (Chrome)

---

## 📱 What Each Page Targets

| Page          | Primary Focus                       | Main Keywords                                                         |
| ------------- | ----------------------------------- | --------------------------------------------------------------------- |
| **Home**      | General architecture & construction | architecture Riviera Maya, architects Tulum                           |
| **Services**  | Service offerings                   | architectural design, project management, turnkey construction        |
| **Portfolio** | Project showcase                    | luxury villa construction, hotel construction, architectural projects |
| **About**     | Company credibility                 | 35 years experience, architecture firm, construction company          |
| **Contact**   | Local search                        | architects near me, contact architects Tulum                          |

---

## ✅ SEO Checklist for New Content

When adding new content, ensure:

- [ ] Page has `<SEOHead page="..." />` component
- [ ] Images have SEO-optimized alt text
- [ ] Keywords are relevant to Riviera Maya/Tulum
- [ ] Meta description is under 160 characters
- [ ] Title is under 60 characters
- [ ] Content includes location keywords naturally

---

## 🚨 Common Issues & Fixes

### Issue: Meta tags not showing

**Fix:** Check that `<HelmetProvider>` wraps the app in `main.jsx`

### Issue: Wrong language in meta tags

**Fix:** SEO automatically uses current i18n language - check language switcher

### Issue: Images missing alt text

**Fix:** Use `getAltText()` utility or add custom alt text with keywords

---

## 📈 Expected Results Timeline

- **Week 1-2:** Google starts crawling new meta tags
- **Week 3-4:** Pages appear in search results
- **Month 2-3:** Rankings improve for target keywords
- **Month 4+:** Stable rankings, increased organic traffic

---

## 🎯 Next Steps After Implementation

1. **Submit to Google Search Console**

   - Add property: https://diagonalstudio.mx
   - Submit sitemap: https://diagonalstudio.mx/sitemap.xml

2. **Set Up Google My Business**

   - Claim business listing for Tulum
   - Add "Riviera Maya" as service area

3. **Monitor Performance**

   - Check Search Console weekly
   - Track keyword rankings monthly
   - Review organic traffic trends

4. **Content Strategy**
   - Blog about Riviera Maya architecture
   - Create project case studies
   - Add client testimonials

---

## 📞 Quick Commands

### Test the site locally:

```bash
cd frontend
npm run dev
```

### Build for production:

```bash
npm run build
```

### Check for broken links:

```bash
npm run lint
```

---

## 🔗 Important URLs

- **Sitemap:** https://diagonalstudio.mx/sitemap.xml
- **Robots.txt:** https://diagonalstudio.mx/robots.txt
- **Google Search Console:** https://search.google.com/search-console
- **Rich Results Test:** https://search.google.com/test/rich-results

---

## 💡 Pro Tips

1. **Use keywords naturally** - Don't stuff keywords, use them in context
2. **Update regularly** - Fresh content helps SEO
3. **Mobile-first** - Most searches happen on mobile
4. **Local focus** - Always mention Riviera Maya, Tulum, or Playa del Carmen
5. **Image optimization** - Compress images, use descriptive filenames

---

## 📝 Files Modified

```
✅ frontend/src/main.jsx (added HelmetProvider)
✅ frontend/src/pages/Home.jsx (added SEOHead)
✅ frontend/src/pages/ServicesPage.jsx (added SEOHead)
✅ frontend/src/pages/PortfolioPage.jsx (added SEOHead)
✅ frontend/src/pages/AboutPage.jsx (added SEOHead)
✅ frontend/src/pages/Contact.jsx (added SEOHead + alt text)
✅ frontend/src/components/home/Hero.jsx (updated alt text)
✅ frontend/src/components/home/ShowcaseImage.jsx (updated alt text)
```

## 📝 Files Created

```
✅ frontend/src/components/common/SEOHead.jsx
✅ frontend/src/config/seoConfig.js
✅ frontend/src/utils/seoAltText.js
✅ SEO_IMPLEMENTATION.md
✅ SEO_QUICK_REFERENCE.md
```

---

**Last Updated:** December 2024  
**Status:** ✅ Production Ready
