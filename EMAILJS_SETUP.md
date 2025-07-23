# EmailJS Setup Instructions

## Overview
The contact form has been updated to use EmailJS for sending confirmation emails with PDF attachments. Follow these steps to complete the setup.

## Changes Made

### 1. Color Adjustments
- Changed the contact section background from `bg-pantone-7515` (darker brown) to `bg-pantone-719` (lighter brown)
- Updated checkbox accent color to match the lighter brown theme

### 2. Typography Consistency
- Applied `font-supreme` class to "DIAGONAL" text in the contact section header
- This ensures consistent logo-type usage throughout the contact section

### 3. EmailJS Integration
- Added EmailJS functionality for form submission
- Implemented loading states and success/error messages
- Form automatically resets after successful submission
- Added confirmation email capability

## EmailJS Setup Steps

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account

### Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID**

### Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use the following template structure:

```html
Subject: Thank you for contacting Diagonal Studio

Hello {{from_name}},

Thank you for reaching out to Diagonal Studio! We have received your message and will get back to you shortly.

Here are the details we received:
- Name: {{from_name}}
- Email: {{from_email}}
- Organization: {{organization}}
- Region: {{region}}
- Subject: {{subject}}
- Message: {{message}}

We appreciate your interest and will respond within 24 hours.

Best regards,
Diagonal Studio Team
```

4. Note down your **Template ID**

### Step 4: Get Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)

### Step 5: Update Configuration
1. Open `src/config/emailjs.js`
2. Replace the placeholder values:
   ```javascript
   export const EMAILJS_CONFIG = {
     SERVICE_ID: 'your_actual_service_id',
     TEMPLATE_ID: 'your_actual_template_id', 
     PUBLIC_KEY: 'your_actual_public_key',
   };
   ```

### Step 6: Add PDF Attachment (Optional)
To include PDF brochure/catalog as attachment:
1. In your EmailJS template, add an attachment field
2. Upload your PDF to a public URL (like AWS S3, Google Drive, etc.)
3. Reference the PDF URL in your template

## Testing
1. Run your development server: `npm run dev`
2. Navigate to the contact form
3. Fill out and submit the form
4. Check that:
   - Loading state appears during submission
   - Success message shows after submission
   - Form resets after successful submission
   - Confirmation email is received

## Troubleshooting
- Ensure all EmailJS credentials are correct
- Check browser console for any errors
- Verify your email service is properly configured in EmailJS
- Make sure your template variables match the ones used in the code

## Security Note
The EmailJS public key is safe to use in frontend code as it's designed for client-side usage. However, consider implementing rate limiting on your EmailJS account to prevent abuse.
