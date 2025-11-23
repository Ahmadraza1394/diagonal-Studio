# i18n Implementation for Home Page - Setup Guide

## ✅ What's Been Completed

### 1. **Dependencies Added**

- `i18next` (^23.7.6)
- `react-i18next` (^14.0.0)

### 2. **Translation Files Created**

Organized by component in separate files for better maintainability:

```
src/locales/
├── es/home/
│   ├── hero.json
│   ├── about.json
│   ├── trustedPartners.json
│   ├── featuredProjects.json
│   ├── servicesList.json
│   └── sustainability.json
└── en/home/
    ├── hero.json
    ├── about.json
    ├── trustedPartners.json
    ├── featuredProjects.json
    ├── servicesList.json
    └── sustainability.json
```

### 3. **i18n Configuration**

- `src/config/i18n.js` - Main i18n setup
  - Language detection: localStorage → browser language → Spanish (default)
  - Namespace-based organization (one namespace per component)
  - Fallback language: Spanish

### 4. **Components Updated with Translations**

- ✅ `Hero.jsx` - Title and subtitle
- ✅ `About.jsx` - Intro, title, description, button
- ✅ `TrustedPartners.jsx` - Subtitle and title
- ✅ `FeaturedProjects.jsx` - Title, description, button, selected works
- ✅ `ServicesList.jsx` - All text and service cards
- ✅ `Sustainability.jsx` - Title and stats

### 5. **Language Switcher**

- `src/components/common/LanguageSwitcher.jsx` - Dropdown switcher
- Integrated into `Header.jsx`
- Saves language preference to localStorage
- Displays current language with flag emoji

---

## 🚀 Getting Started

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

### Step 3: Test Language Switching

1. Open your website
2. Look for the language switcher in the header (top right)
3. Click to open dropdown
4. Select "English" or "Español"
5. The entire home page should translate instantly

---

## 📁 File Structure

```
src/
├── config/
│   └── i18n.js                          # i18n configuration
├── locales/
│   ├── es/home/                         # Spanish translations
│   │   ├── hero.json
│   │   ├── about.json
│   │   ├── trustedPartners.json
│   │   ├── featuredProjects.json
│   │   ├── servicesList.json
│   │   └── sustainability.json
│   └── en/home/                         # English translations
│       ├── hero.json
│       ├── about.json
│       ├── trustedPartners.json
│       ├── featuredProjects.json
│       ├── servicesList.json
│       └── sustainability.json
├── components/
│   ├── common/
│   │   ├── Header.jsx                   # ✅ Updated
│   │   └── LanguageSwitcher.jsx         # New
│   └── home/
│       ├── Hero.jsx                     # ✅ Updated
│       ├── About.jsx                    # ✅ Updated
│       ├── TrustedPartners.jsx          # ✅ Updated
│       ├── FeaturedProjects.jsx         # ✅ Updated
│       ├── ServicesList.jsx             # ✅ Updated
│       └── Sustainability.jsx           # ✅ Updated
└── main.jsx                             # ✅ Updated (imports i18n)
```

---

## 🌍 How It Works

### Language Detection

1. **First check**: localStorage for saved preference (`i18nLanguage`)
2. **Second check**: Browser language setting
3. **Default**: Spanish (es)

### Translation Keys

Each component has its own namespace:

- `hero` - Hero component translations
- `about` - About component translations
- `trustedPartners` - Trusted Partners component translations
- `featuredProjects` - Featured Projects component translations
- `servicesList` - Services List component translations
- `sustainability` - Sustainability component translations

### Usage in Components

```jsx
import { useTranslation } from "react-i18next";

export default function MyComponent() {
  const { t } = useTranslation("componentName");

  return <h1>{t("key")}</h1>;
}
```

---

## 📝 Current Translations

### Spanish (Default)

All Spanish text from your existing components has been preserved and organized into translation files.

### English

Professional English translations have been created for all home page content:

- Hero: "Supermodernist Architecture Office"
- About: Translated company description
- Services: All 6 services translated
- Featured Projects: Portfolio section translated
- Sustainability: Stats and descriptions translated

---

## 🔧 Adding More Translations

### To Add a New Key to Existing Component

1. **Add to Spanish file** (`src/locales/es/home/component.json`):

```json
{
  "newKey": "Spanish text here"
}
```

2. **Add to English file** (`src/locales/en/home/component.json`):

```json
{
  "newKey": "English text here"
}
```

3. **Use in component**:

```jsx
{
  t("newKey");
}
```

---

## 🌐 Adding a New Language (e.g., French)

### Step 1: Create Translation Files

Create `src/locales/fr/home/` directory with all component JSON files

### Step 2: Update i18n Config

Edit `src/config/i18n.js`:

```jsx
import frHero from "../locales/fr/home/hero.json";
// ... import other French files

const resources = {
  es: {
    /* ... */
  },
  en: {
    /* ... */
  },
  fr: {
    hero: frHero,
    about: frAbout,
    // ... other components
  },
};
```

### Step 3: Update Language Switcher

Edit `src/components/common/LanguageSwitcher.jsx`:

```jsx
const languages = [
  { code: "es", name: "Español", flag: "🇲🇽" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" }, // Add this
];
```

Done! The language switcher will automatically include French.

---

## ✨ Best Practices

1. **Keep translations organized** - One file per component
2. **Use consistent key names** - Use camelCase (e.g., `sidebarDescription`)
3. **Always add to both languages** - Even if one is empty
4. **Test both languages** - Verify translations work correctly
5. **Use interpolation for dynamic values**:

```json
{
  "copyright": "© {{year}} Company"
}
```

```jsx
{
  t("copyright", { year: 2024 });
}
```

---

## 🐛 Troubleshooting

### Translations Not Showing

1. Clear browser cache (Ctrl+Shift+Delete)
2. Refresh the page
3. Check browser console for missing key warnings

### Language Not Switching

1. Open DevTools → Application → Local Storage
2. Check if `i18nLanguage` is being saved
3. Verify language code matches exactly (case-sensitive)

### Missing Translations

Check browser console for warnings like:

```
i18next::translator: key "hero.newKey" for languages "en" missing.
```

Add the missing key to the translation file.

---

## 📚 Next Steps

1. ✅ Run `npm install` to install dependencies
2. ✅ Test language switcher in header
3. ⏭️ Translate remaining pages (Portfolio, Services, About, Contact) using the same pattern
4. ⏭️ Add more languages as needed

---

## 💡 Key Features

- ✅ **Separate files per component** - Easy to maintain and scale
- ✅ **Namespace-based organization** - Clean and organized
- ✅ **Language persistence** - Saves user preference to localStorage
- ✅ **Smart language detection** - Auto-detects browser language
- ✅ **Professional English translations** - All content properly translated
- ✅ **Easy to extend** - Add new languages in minutes

---

**Status**: Home page i18n implementation complete and ready to use! 🎉
