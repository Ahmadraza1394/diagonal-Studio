# Architecture Overview

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER'S BROWSER                          │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │                    FRONTEND (React)                       │ │
│  │                  http://localhost:5173                    │ │
│  │                                                           │ │
│  │  • React 19 + Vite 6                                     │ │
│  │  • TailwindCSS styling                                   │ │
│  │  • Framer Motion animations                              │ │
│  │  • i18next (Spanish/English)                             │ │
│  │  • React Router                                          │ │
│  │                                                           │ │
│  │  Components:                                             │ │
│  │  ├─ Home Page                                            │ │
│  │  ├─ Portfolio Page                                       │ │
│  │  ├─ Services Page                                        │ │
│  │  ├─ About Page                                           │ │
│  │  └─ Contact Page ─────────────────┐                      │ │
│  │                                    │                      │ │
│  └────────────────────────────────────┼──────────────────────┘ │
│                                       │                        │
└───────────────────────────────────────┼────────────────────────┘
                                        │
                                        │ HTTP POST
                                        │ /api/send-email
                                        │ (JSON payload)
                                        │
                                        ▼
┌─────────────────────────────────────────────────────────────────┐
│                    BACKEND (Express API)                        │
│                  http://localhost:5000                          │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │                     API Endpoints                         │ │
│  │                                                           │ │
│  │  GET  /api/health        → Health check                  │ │
│  │  POST /api/send-email    → Send email via EmailJS        │ │
│  │                                                           │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │                  Security Layer                           │ │
│  │                                                           │ │
│  │  • CORS protection                                        │ │
│  │  • Input validation                                       │ │
│  │  • Environment variables                                  │ │
│  │  • Error handling                                         │ │
│  │                                                           │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │              Environment Variables (.env)                 │ │
│  │                                                           │ │
│  │  🔒 EMAILJS_SERVICE_ID     (hidden from browser)         │ │
│  │  🔒 EMAILJS_TEMPLATE_ID    (hidden from browser)         │ │
│  │  🔒 EMAILJS_PUBLIC_KEY     (hidden from browser)         │ │
│  │                                                           │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────┬───────────────────────────┘
                                      │
                                      │ EmailJS API Call
                                      │ (with credentials)
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                      EmailJS Service                            │
│                   https://api.emailjs.com                       │
│                                                                 │
│  • Validates credentials                                        │
│  • Processes email template                                     │
│  • Sends email to recipient                                     │
│                                                                 │
└─────────────────────────────────────┬───────────────────────────┘
                                      │
                                      │ Email sent
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Email Recipient                            │
│                   (your configured email)                       │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔄 Request Flow

### Contact Form Submission

```
1. USER fills contact form
   └─> Frontend (Contact.jsx)

2. Form validation
   └─> Client-side validation

3. Submit button clicked
   └─> fetch() POST request to backend

4. Backend receives request
   └─> Express server (server.js)

5. Input validation
   └─> Validate required fields

6. EmailJS API call
   └─> Send email with hidden credentials

7. Response sent back
   └─> Success or error message

8. Frontend updates UI
   └─> Show success/error message to user
```

---

## 📦 Component Structure

### Frontend (`frontend/src/`)

```
src/
├── components/
│   ├── common/
│   │   ├── Header.jsx           # Navigation bar
│   │   ├── Footer.jsx           # Footer
│   │   ├── ScrollToTop.jsx      # Scroll utility
│   │   └── AnimatedReveal.jsx   # Animation wrapper
│   │
│   ├── home/
│   │   ├── Hero.jsx             # Hero section
│   │   ├── About.jsx            # About section
│   │   ├── FeaturedProjects.jsx # Featured projects
│   │   ├── ServicesList.jsx     # Services list
│   │   └── Sustainability.jsx   # Sustainability section
│   │
│   ├── portfolio/
│   │   └── ProjectGrid.jsx      # Project grid
│   │
│   ├── services/
│   │   ├── ServiceHero.jsx      # Services hero
│   │   └── ServiceTabs.jsx      # Service tabs
│   │
│   ├── about/
│   │   ├── AboutHero.jsx        # About hero
│   │   └── CompanyInfo.jsx      # Company info
│   │
│   └── privacy/
│       └── PrivacyPolicy.jsx    # Privacy policy
│
├── pages/
│   ├── Home.jsx                 # Home page
│   ├── PortfolioPage.jsx        # Portfolio page
│   ├── ServicesPage.jsx         # Services page
│   ├── About.jsx                # About page
│   ├── Contact.jsx              # Contact page ⭐
│   └── PrivacyPolicy.jsx        # Privacy page
│
├── data/
│   ├── projects.js              # Project data
│   └── projectsTranslations.js  # Project translations
│
├── config/
│   └── i18n.js                  # i18n configuration
│
├── locales/
│   ├── en/                      # English translations
│   └── es/                      # Spanish translations
│
└── main.jsx                     # App entry point
```

### Backend (`backend/`)

```
backend/
├── server.js                    # Main server file
│   ├── Express setup
│   ├── CORS configuration
│   ├── Routes:
│   │   ├── GET  /api/health
│   │   └── POST /api/send-email
│   └── Error handling
│
├── package.json                 # Dependencies
├── .env                         # Environment variables (gitignored)
├── .env.example                 # Environment template
└── README.md                    # Documentation
```

---

## 🔐 Security Model

### Before Restructure (Insecure)

```
Browser
  └─> Frontend Code (JavaScript)
      └─> emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY)
          └─> EmailJS API

❌ Problem: All credentials visible in browser
❌ Anyone can extract and abuse API keys
❌ No rate limiting or validation
```

### After Restructure (Secure)

```
Browser
  └─> Frontend Code (JavaScript)
      └─> fetch('/api/send-email', { body: data })
          └─> Backend API (Express)
              ├─> Validate input
              ├─> Check CORS
              ├─> Load credentials from .env
              └─> emailjs.send(credentials, data)
                  └─> EmailJS API

✅ Credentials hidden in backend
✅ Input validation
✅ CORS protection
✅ Rate limiting possible
✅ Logging and monitoring
```

---

## 🌐 Data Flow

### Environment Variables

```
Development:
  backend/.env  ─────┐
                     ├─> Backend Server ─> EmailJS API
  frontend/.env ─────┘

Production:
  Hosting Platform Environment Variables
    ├─> Backend (Render/Railway)
    └─> Frontend (Netlify/Vercel)
```

### API Communication

```
Frontend                    Backend                   EmailJS
────────                    ───────                   ───────

User Input
    │
    ├─> Validate
    │
    ├─> POST /api/send-email
    │       │
    │       ├─> Validate input
    │       │
    │       ├─> Load .env credentials
    │       │
    │       ├─> Call EmailJS API ────────> Process
    │       │                                  │
    │       │                                  │
    │       ├─< Success/Error <────────────────┘
    │       │
    ├─< JSON Response
    │
    └─> Update UI
```

---

## 🚀 Deployment Architecture

### Development

```
Local Machine
├── Frontend (Vite Dev Server)
│   └── http://localhost:5173
│
└── Backend (Node.js)
    └── http://localhost:5000
```

### Production

```
Internet
    │
    ├─> Frontend (Static Hosting)
    │   ├── Netlify / Vercel / GitHub Pages
    │   ├── CDN Distribution
    │   └── https://diagonalstudio.com
    │
    └─> Backend (Node.js Hosting)
        ├── Render / Railway / Heroku
        ├── Environment Variables
        └── https://api.diagonalstudio.com
```

---

## 📊 Technology Stack

### Frontend Stack

| Technology    | Version | Purpose              |
| ------------- | ------- | -------------------- |
| React         | 19.1.0  | UI framework         |
| Vite          | 6.3.5   | Build tool           |
| React Router  | 7.6.3   | Routing              |
| TailwindCSS   | 3.4.4   | Styling              |
| Framer Motion | 12.23.0 | Animations           |
| i18next       | 23.7.6  | Internationalization |
| React Icons   | 5.5.0   | Icons                |

### Backend Stack

| Technology | Version | Purpose               |
| ---------- | ------- | --------------------- |
| Express    | 4.21.2  | Web framework         |
| CORS       | 2.8.5   | Cross-origin requests |
| dotenv     | 16.4.5  | Environment variables |
| EmailJS    | 4.4.1   | Email service         |

---

## 🔄 Development Workflow

```
Developer
    │
    ├─> Edit Frontend Code
    │   └─> Vite Hot Reload (instant updates)
    │
    ├─> Edit Backend Code
    │   └─> Node --watch (auto-restart)
    │
    ├─> Test Contact Form
    │   ├─> Frontend → Backend → EmailJS
    │   └─> Check console logs
    │
    ├─> Build for Production
    │   ├─> npm run build (frontend)
    │   └─> npm start (backend)
    │
    └─> Deploy
        ├─> Push to Git
        ├─> CI/CD Pipeline
        └─> Production Servers
```

---

## 🎯 Key Benefits

### Separation of Concerns

- Frontend focuses on UI/UX
- Backend handles business logic
- Clear API contract between them

### Security

- API keys never exposed to browser
- Environment-based configuration
- CORS protection
- Input validation

### Scalability

- Frontend and backend can scale independently
- Easy to add new API endpoints
- Can deploy to different platforms

### Maintainability

- Clear project structure
- Separate dependencies
- Independent testing
- Better code organization

---

## 📝 Configuration Files

### Frontend Configuration

```
frontend/
├── vite.config.js       # Vite build configuration
├── tailwind.config.js   # TailwindCSS configuration
├── postcss.config.js    # PostCSS configuration
├── eslint.config.js     # ESLint rules
└── .env                 # Environment variables
```

### Backend Configuration

```
backend/
├── eslint.config.js     # ESLint rules
└── .env                 # Environment variables (secrets)
```

### Root Configuration

```
root/
├── package.json         # Workspace manager
└── .gitignore          # Git ignore rules
```

---

## 🔍 Monitoring & Debugging

### Frontend Debugging

- Browser DevTools
- React DevTools
- Console logs
- Network tab (API calls)

### Backend Debugging

- Server console logs
- API response inspection
- Environment variable verification
- EmailJS dashboard

### Health Checks

- Frontend: http://localhost:5173
- Backend: http://localhost:5000/api/health
- EmailJS: Dashboard activity log

---

This architecture provides a solid foundation for a secure, scalable, and maintainable web application! 🚀
