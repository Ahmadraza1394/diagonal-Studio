// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
};

// Instructions for setting up EmailJS:
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Create a new email service (Gmail, Outlook, etc.)
// 3. Create an email template with the following variables:
//    - {{from_name}} - Sender's full name
//    - {{from_email}} - Sender's email
//    - {{organization}} - Sender's organization
//    - {{region}} - Sender's region
//    - {{subject}} - Message subject
//    - {{message}} - Message content
//    - {{to_email}} - For confirmation emails
// 4. Get your Service ID, Template ID, and Public Key from EmailJS dashboard
// 5. Replace the placeholder values above with your actual credentials
