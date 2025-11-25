# Diagonal Studio Backend

Backend API server for Diagonal Studio website. Handles EmailJS integration securely with environment variables.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env` file from `.env.example`:

```bash
cp .env.example .env
```

3. Configure your EmailJS credentials in `.env`:
   - `EMAILJS_SERVICE_ID`: Your EmailJS service ID
   - `EMAILJS_TEMPLATE_ID`: Your EmailJS template ID
   - `EMAILJS_PUBLIC_KEY`: Your EmailJS public key
   - `PORT`: Server port (default: 5000)
   - `FRONTEND_URL`: Frontend URL for CORS (default: http://localhost:5173)

## Running the Server

### Development (with auto-reload):

```bash
npm run dev
```

### Production:

```bash
npm start
```

## API Endpoints

### Health Check

- **GET** `/api/health`
- Returns server status

### Send Email

- **POST** `/api/send-email`
- Body:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "org": "Company Name (optional)",
  "region": "Region",
  "subject": "Subject",
  "message": "Message content"
}
```

## EmailJS Template Variables

Your EmailJS template should include these variables:

- `{{from_name}}` - Sender's full name
- `{{from_email}}` - Sender's email
- `{{organization}}` - Sender's organization
- `{{region}}` - Sender's region
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - For confirmation emails

## Security

- API keys are stored in environment variables (never committed to git)
- CORS is configured to only accept requests from the frontend
- Input validation on all endpoints
