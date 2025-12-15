# EmailJS Setup Guide for Eljaya Trading Co. Contact Form

## Why Emails Weren't Being Received

Your contact form was only simulating the email sending process. Now it will actually send emails using EmailJS.

## Step-by-Step Setup

### 1. Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Add Email Service
1. In your EmailJS dashboard, click "Email Services" → "Add New Service"
2. Choose your email provider (Gmail, Outlook, etc.)
3. Connect your email account (eljayasupplies@gmail.com)
4. Name your service (e.g., "Eljaya Gmail")

### 3. Create Email Template
1. Click "Email Templates" → "Create New Template"
2. Use this template content:

```
Subject: New Contact Form Message - {{from_name}}

Hi Eljaya Team,

You have received a new contact form message:

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Service Interest: {{service}}

Message:
{{message}}

Best regards,
Website Contact Form
```

3. Save the template

### 4. Get Your Credentials
1. Go to "Account" → "General"
2. Copy your **Public Key** (starts with a long string)

3. In Email Services, click on your service and copy the **Service ID**

4. In Email Templates, click on your template and copy the **Template ID**

### 5. Update Your Website Code
1. Open `script.js`
2. Find these lines (around line 260):
```javascript
// EmailJS configuration - Replace with your actual credentials
const serviceID = 'YOUR_SERVICE_ID';
const templateID = 'YOUR_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY';
```

3. Replace the placeholder values:
```javascript
const serviceID = 'your_actual_service_id_here';
const templateID = 'your_actual_template_id_here';
const publicKey = 'your_actual_public_key_here';
```

### 6. Test the Form
1. Upload your updated files to your website
2. Fill out and submit the contact form
3. Check your email (eljayasupplies@gmail.com) for the message

## Troubleshooting

### If emails still don't arrive:
1. Check your spam/junk folder
2. Verify your EmailJS account has remaining quota (free plan: 200 emails/month)
3. Check the browser console for error messages

### Common Issues:
- **"Email service not available"**: EmailJS script failed to load
- **"Error sending message"**: Check your credentials are correct
- **Emails going to spam**: Add EmailJS to your email whitelist

## Alternative: Formspree (Easier Setup)

If EmailJS is too complex, you can use Formspree:

1. Go to https://formspree.io/
2. Create account and verify email
3. Create a new form and get your endpoint URL
4. Replace the EmailJS code with a simple fetch request

Let me know if you need help with Formspree setup instead!

## Security Note

The contact form now sends emails directly from the visitor's browser. For production websites, consider using a backend server for better security and reliability.
