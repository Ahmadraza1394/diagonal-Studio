# Diagonal Studio Frontend

React + Vite frontend for Diagonal Studio architecture portfolio website.

## Tech Stack

- **Framework**: React 19.1.0 with Vite 6.3.5
- **Routing**: React Router DOM 7.6.3
- **Styling**: TailwindCSS 3.4.4
- **Animations**: Framer Motion 12.23.0
- **i18n**: react-i18next 14.0.0
- **Icons**: React Icons 5.5.0

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env` file from `.env.example`:

```bash
cp .env.example .env
```

3. Configure the backend API URL in `.env`:

```
VITE_API_URL=http://localhost:5000
```

## Running the App

### Development:

```bash
npm run dev
```

### Build for Production:

```bash
npm run build
```

### Preview Production Build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── common/          # Shared components (Header, Footer, etc.)
│   ├── home/            # Home page components
│   ├── portfolio/       # Portfolio components
│   ├── services/        # Services page components
│   ├── about/           # About page components
│   └── privacy/         # Privacy policy components
├── pages/               # Page components
├── data/                # Project data and translations
├── config/              # Configuration files
├── locales/             # i18n translation files
└── assets/              # Static assets
```

## Features

- **Bilingual Support**: Spanish (default) and English
- **Responsive Design**: Mobile-first approach
- **Smooth Animations**: Framer Motion integration
- **Portfolio System**: Dynamic project filtering and display
- **Contact Form**: Integrated with backend API
- **SEO Optimized**: Meta tags and structured data

## Environment Variables

- `VITE_API_URL`: Backend API URL (default: http://localhost:5000)

## Notes

- The frontend communicates with the backend API for email functionality
- EmailJS credentials are securely stored in the backend
- All translations are managed through i18next
