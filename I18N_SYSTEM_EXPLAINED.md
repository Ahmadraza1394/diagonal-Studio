# i18n Translation System - Complete Architecture

## Overview

The Diagonal Studio website uses **react-i18next** for internationalization with a **separation of concerns** approach:

- **Spanish (es)** is the default language and source of truth
- **English (en)** translations are stored separately
- Original data remains unchanged in `projects.js`

---

## How It Works

### 1. **Configuration (`src/config/i18n.js`)**

The i18n system is configured with:

- **Languages**: Spanish (es - default), English (en)
- **Namespaces**: Separate translation files per page/component
  - `hero`, `about`, `featuredProjects`, `servicesList`, etc.
  - `portfolio` - for portfolio page UI text
- **Language Detection Order**:
  1. localStorage (user's previous selection)
  2. Browser language preference
  3. Default: Spanish (es)

```javascript
// Language switcher saves to localStorage
localStorage.setItem("i18nLanguage", "en"); // or "es"
```

---

### 2. **Project Data Structure**

#### **Source Data** (`src/data/projects.js`)

- Contains ALL project data in **Spanish** (original)
- This is the **single source of truth**
- Structure:

```javascript
{
  id: 1,
  slug: "project-slug",
  title: "Project Title",
  typology: "Residencial", // Spanish
  category: "Residential",
  year: "2022",
  location: "Tulum",
  image: "/path/to/image.jpg",
  description: "Spanish description...", // Spanish
  concept: "Spanish concept...", // Spanish
  images: [...],
  details: [...]
}
```

#### **Translation Data** (`src/data/projectsTranslations.js`)

- Contains **ONLY English translations**
- Mapped by project ID for efficient lookup
- Structure:

```javascript
export const projectTranslations = {
  en: {
    1: {
      // Project ID
      typology: "Residential",
      description: "English description...",
      concept: "English concept...",
    },
  },
};
```

---

### 3. **Translation Hook** (`src/hooks/useProjectTranslation.js`)

This custom hook handles project translation logic:

```javascript
const { getTranslatedProject } = useProjectTranslation();
const translatedProject = getTranslatedProject(project);
```

**How it works:**

#### **For Spanish (es)**:

- Returns original project data as-is
- No lookup needed

#### **For English (en)**:

1. Looks up translation by project ID in `projectTranslations.en[project.id]`
2. Merges translation with original data
3. Keeps title and location unchanged (proper names)
4. Replaces description, concept, typology with English versions
5. Falls back to Spanish if translation missing

**Key Functions:**

- `getTranslatedProject(project)` - Main translation function
- `getDetailLabel(label)` - Translates detail labels (Client → Cliente)
- `getStatusTranslation(status)` - Translates status values
- `getTypologyTranslation(typology)` - Translates typology values

---

### 4. **Usage in Components**

#### **Portfolio Grid** (`src/components/portfolio/ProjectGrid.jsx`)

```javascript
import { projects } from "../../data/projects";
import { useProjectTranslation } from "../../hooks/useProjectTranslation";

const { getTranslatedProject } = useProjectTranslation();

// Filter which projects to show
const allowedTitles = [
  "Puerto Aventuras Hotel and Beach Club",
  "Casa Romeo",
  // ... more titles
];

const filteredProjects = projects.filter((p) =>
  allowedTitles.includes(p.title)
);

// Translate each project
filteredProjects.map((project) => {
  const translatedProject = getTranslatedProject(project);
  return (
    <div>
      <h3>{translatedProject.title}</h3>
      <p>{translatedProject.description}</p>
      <span>{translatedProject.typology}</span>
    </div>
  );
});
```

#### **Project Details Page** (`src/pages/ProjectDetailsPage.jsx`)

```javascript
const translatedProject = getTranslatedProject(project);

<h1>{translatedProject.title}</h1>
<p>{translatedProject.description}</p>
<p>{translatedProject.concept}</p>
```

---

### 5. **Language Switcher** (`src/components/common/LanguageSwitcher.jsx`)

- Toggle button in header
- Switches between Spanish and English
- Saves preference to localStorage
- Triggers re-render of all translated content

```javascript
const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
  localStorage.setItem("i18nLanguage", lng);
};
```

---

## Adding New Projects - Step by Step

### Step 1: Add to `projects.js` (Spanish data)

```javascript
{
  id: 20, // Next available ID
  slug: "xibak-tulum",
  title: "Xibak", // Keep original name
  typology: "Hospitalidad", // SPANISH
  category: "Commercial",
  year: "2020",
  location: "Tulum",
  image: "/assets/Diagonal fotos/Portafolio/Xibak/xibak.jpeg",
  description: "Proyecto de hospitalidad diseñado para...", // SPANISH
  concept: "Crear un espacio de hospitalidad que...", // SPANISH
  images: [
    "/assets/Diagonal fotos/Portafolio/Xibak/xibak.jpeg",
    // ... more images
  ],
  details: [
    { label: "Client", value: "Xibak" },
    { label: "Location", value: "Tulum" },
    { label: "Year", value: "2020" },
    { label: "Status", value: "Completed" },
  ],
}
```

### Step 2: Add English translation to `projectsTranslations.js`

```javascript
export const projectTranslations = {
  en: {
    // ... existing translations
    20: {
      // Match the project ID
      typology: "Hospitality",
      description: "Hospitality project designed to...", // ENGLISH
      concept: "Create a hospitality space that...", // ENGLISH
    },
  },
};
```

### Step 3: Add to Portfolio Page Filter

Update `ProjectGrid.jsx` to include new project:

```javascript
const allowedTitles = [
  "Puerto Aventuras Hotel and Beach Club",
  // ... existing titles
  "Xibak", // ADD NEW TITLE HERE
];
```

---

## Translation Helpers

### Detail Labels

```javascript
projectDetailLabels = {
  es: { Client: "Cliente", Location: "Ubicación", ... },
  en: { Client: "Client", Location: "Location", ... }
}
```

### Status Values

```javascript
projectStatusTranslations = {
  es: { Completed: "Completado", "In progress": "En progreso", ... },
  en: { Completed: "Completed", "En desarrollo": "In Development", ... }
}
```

### Typology Values

```javascript
projectTypologyTranslations = {
  en: {
    Residencial: "Residential",
    Comercial: "Commercial",
    Hospitalidad: "Hospitality",
    ...
  }
}
```

---

## Key Principles

1. **Spanish First**: Always add Spanish data to `projects.js` first
2. **Separate Translations**: English translations go in `projectsTranslations.js`
3. **ID Mapping**: Translations are mapped by project ID, not slug or title
4. **Proper Names**: Titles and locations typically don't translate
5. **Fallback**: If translation missing, Spanish version is shown
6. **Consistency**: Use existing typology/status values when possible

---

## File Structure

```
src/
├── config/
│   └── i18n.js                    # i18n configuration
├── data/
│   ├── projects.js                # Spanish project data (source of truth)
│   └── projectsTranslations.js    # English translations only
├── hooks/
│   └── useProjectTranslation.js   # Translation logic hook
├── components/
│   ├── common/
│   │   └── LanguageSwitcher.jsx   # Language toggle
│   └── portfolio/
│       ├── ProjectGrid.jsx        # Portfolio page grid
│       └── ProjectInfo.jsx        # Project details display
└── pages/
    └── ProjectDetailsPage.jsx     # Individual project page
```

---

## Testing Translations

1. Start dev server: `npm run dev`
2. Navigate to portfolio page
3. Click language switcher in header (ES/EN)
4. Verify:
   - Project titles remain the same
   - Descriptions change to English
   - Typology translates (Residencial → Residential)
   - Status translates (Completado → Completed)
   - Labels translate (Cliente → Client)

---

## Common Issues & Solutions

### Issue: Translation not showing

**Solution**: Check project ID matches in both files

### Issue: Project not appearing on portfolio page

**Solution**: Add project title to `allowedTitles` array in `ProjectGrid.jsx`

### Issue: Showing Spanish in English mode

**Solution**: Add translation entry in `projectsTranslations.js` with correct ID

### Issue: Language not persisting

**Solution**: Check localStorage is enabled and `i18nLanguage` key is set

---

## Summary

✅ **Spanish data** → `projects.js` (source of truth)
✅ **English translations** → `projectsTranslations.js` (ID-mapped)
✅ **Translation logic** → `useProjectTranslation` hook
✅ **Display filter** → `ProjectGrid.jsx` allowedTitles
✅ **Language switch** → Header toggle with localStorage persistence
