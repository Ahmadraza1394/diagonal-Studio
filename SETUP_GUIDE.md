# Diagonal Studio - Complete Setup Guide

This guide will walk you through setting up the Diagonal Studio project from scratch.

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Initial Setup](#initial-setup)
4. [EmailJS Configuration](#emailjs-configuration)
5. [Running the Application](#running-the-application)
6. [Testing](#testing)
7. [Deployment](#deployment)
8. [Troubleshooting](#troubleshooting)

## 🎯 Project Overview

Diagonal Studio is split into two main parts:

- **Frontend**: React + Vite application (port 5173)
- **Backend**: Express API server for secure email handling (port 5000)

The backend handles EmailJS integration to keep API keys secure and never expose them to the client.

## ✅ Prerequisites

Before you begin, ensure you have:

- **Node.js** v18 or higher ([Download](https://nodejs.org/))
- **npm** v9 or higher (comes with Node.js)
- **Git** (optional, for version control)
- **EmailJS Account** ([Sign up free](https://www.emailjs.com/))

Verify your installations:

```bash
node --version  # Should show v18.x.x or higher
npm --version   # Should show v9.x.x or higher
```

## 🚀 Initial Setup

### Step 1: Install Dependencies

From the root directory, run:

```bash
npm run install:all
```

This command will:

1. Install root-level dependencies (concurrently)
2. Install frontend dependencies
3. Install backend dependencies

**Alternative**: Install manually

```bash
# Root
npm install

# Frontend
cd frontend
npm install
cd ..

# Backend
cd backend
npm install
cd ..
```

### Step 2: Create Environment Files

#### Backend Environment

```bash
# Windows (PowerShell)
Copy-Item backend\.env.example backend\.env

# macOS/Linux
cp backend/.env.example backend/.env
```

#### Frontend Environment

```bash
# Windows (PowerShell)
Copy-Item frontend\.env.example frontend\.env

# macOS/Linux
cp frontend/.env.example frontend/.env
```

## 📧 EmailJS Configuration

### Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection steps
5. **Copy your Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact from {{from_name}}

From: {{from_name}} ({{from_email}})
Organization: {{organization}}
Region: {{region}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from the Diagonal Studio contact form.
```

4. Add these template variables:

   - `{{from_name}}`
   - `{{from_email}}`
   - `{{organization}}`
   - `{{region}}`
   - `{{subject}}`
   - `{{message}}`
   - `{{to_email}}`

5. **Copy your Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abcdef123456`)
3. Copy it

### Step 5: Configure Backend

Edit `backend/.env`:

```env
EMAILJS_SERVICE_ID=service_abc123      # Your Service ID
EMAILJS_TEMPLATE_ID=template_xyz789    # Your Template ID
EMAILJS_PUBLIC_KEY=abcdef123456        # Your Public Key
PORT=5000                               # Backend port
FRONTEND_URL=http://localhost:5173     # Frontend URL for CORS
```

### Step 6: Configure Frontend

Edit `frontend/.env`:

```env
VITE_API_URL=http://localhost:5000
```

## 🏃 Running the Application

### Option 1: Run Both Servers (Recommended)

From the root directory:

```bash
npm run dev
```

This starts:

- Backend on http://localhost:5000
- Frontend on http://localhost:5173

### Option 2: Run Separately

**Terminal 1 - Backend:**

```bash
npm run dev:backend
```

**Terminal 2 - Frontend:**

```bash
npm run dev:frontend
```

### Verify Everything Works

1. **Backend Health Check**:

   - Open http://localhost:5000/api/health
   - Should see: `{"status":"ok","message":"Backend server is running"}`

2. **Frontend**:
   - Open http://localhost:5173
   - Navigate to the Contact page
   - Fill out and submit the form
   - Check for success message

## 🧪 Testing

### Test Backend API

Using curl or Postman:

```bash
curl -X POST http://localhost:5000/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "org": "Test Company",
    "region": "Test Region",
    "subject": "Test Subject",
    "message": "This is a test message"
  }'
```

Expected response:

```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

### Test Contact Form

1. Go to http://localhost:5173/contact
2. Fill out all required fields
3. Submit the form
4. Check your EmailJS dashboard for the email
5. Verify success message appears

## 🌐 Deployment

### Frontend Deployment (Netlify Example)

1. Build the frontend:

```bash
npm run build
```

2. Deploy `frontend/dist/` folder to Netlify

3. Set environment variable in Netlify:

```
VITE_API_URL=https://your-backend-url.com
```

### Backend Deployment (Render Example)

1. Push code to GitHub

2. Create new Web Service on Render

3. Set environment variables:

```
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key
PORT=5000
FRONTEND_URL=https://your-frontend-url.netlify.app
```

4. Deploy

### Update CORS

After deployment, update `backend/.env` (or hosting environment variables):

```env
FRONTEND_URL=https://your-actual-frontend-url.com
```

## 🐛 Troubleshooting

### Issue: "Port 5000 already in use"

**Solution**: Change the backend port

1. Edit `backend/.env`:

```env
PORT=5001
```

2. Edit `frontend/.env`:

```env
VITE_API_URL=http://localhost:5001
```

3. Restart both servers

### Issue: "CORS Error"

**Symptoms**: Console shows CORS policy errors

**Solution**:

1. Verify `FRONTEND_URL` in `backend/.env` matches your frontend URL exactly
2. Include protocol (`http://` or `https://`)
3. No trailing slash
4. Restart backend server

### Issue: "Email not sending"

**Check**:

1. EmailJS credentials are correct in `backend/.env`
2. Backend console for error messages
3. EmailJS dashboard for quota limits
4. Template variables match exactly

**Test backend directly**:

```bash
curl -X POST http://localhost:5000/api/send-email \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Test","lastName":"User","email":"test@test.com","region":"Test","subject":"Test","message":"Test"}'
```

### Issue: "Module not found"

**Solution**: Reinstall dependencies

```bash
# Clean install
rm -rf node_modules frontend/node_modules backend/node_modules
rm package-lock.json frontend/package-lock.json backend/package-lock.json
npm run install:all
```

### Issue: "Environment variables not loading"

**Check**:

1. `.env` files exist in correct locations
2. No spaces around `=` in `.env` files
3. Restart servers after changing `.env`
4. Frontend variables must start with `VITE_`

### Issue: "Build fails"

**Solution**:

```bash
cd frontend
npm run build
```

Check console for specific errors. Common issues:

- Missing dependencies
- Syntax errors
- Import path issues

## 📞 Support

For issues specific to:

- **EmailJS**: Check [EmailJS Documentation](https://www.emailjs.com/docs/)
- **Vite**: Check [Vite Documentation](https://vitejs.dev/)
- **React**: Check [React Documentation](https://react.dev/)
- **Express**: Check [Express Documentation](https://expressjs.com/)

## ✅ Checklist

Before considering setup complete:

- [ ] Node.js and npm installed
- [ ] All dependencies installed (`npm run install:all`)
- [ ] EmailJS account created
- [ ] Email service connected
- [ ] Email template created
- [ ] `backend/.env` configured with EmailJS credentials
- [ ] `frontend/.env` configured with API URL
- [ ] Backend starts without errors
- [ ] Frontend starts without errors
- [ ] Backend health check returns OK
- [ ] Contact form submits successfully
- [ ] Email received in EmailJS dashboard

## 🎉 Success!

If all checks pass, your Diagonal Studio application is fully set up and ready for development!

Next steps:

- Customize the content
- Add your projects
- Update branding
- Deploy to production
