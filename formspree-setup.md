# Formspree Setup Guide for Eljaya Trading Co. Contact Form

## Why We Switched to Formspree

Formspree is much simpler than EmailJS - you don't need to set up email services or templates. Just create an account and get a form endpoint URL.

## Step-by-Step Setup

### 1. Create Formspree Account
1. Go to https://formspree.io/
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Create a New Form
1. In your dashboard, click "Create a new form"
2. Name it "Eljaya Contact Form"
3. Copy the form endpoint URL (looks like: `https://formspree.io/f/xxxxxxxx`)

### 3. Update Your Website Code
1. Open `index.html`
2. Find this line in the contact form:
```html
<form id="contactForm" class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

3. Replace `YOUR_FORM_ID` with your actual Form ID from the endpoint URL

### 4. Customize Form Settings (Optional)
1. In Formspree dashboard, click on your form
2. Go to "Integrations" → "Email Notifications"
3. Set the recipient email to: `eljayasupplies@gmail.com`
4. Customize the email subject and message template

### 5. Test the Form
1. Upload your updated files to your website
2. Fill out and submit the contact form
3. Check your email (eljayasupplies@gmail.com) for the message

## Formspree Features

- ✅ **Free tier**: 50 submissions per month
- ✅ **No setup required**: Works immediately
- ✅ **Spam protection**: Built-in spam filtering
- ✅ **Email notifications**: Automatic emails to you
- ✅ **File uploads**: Can handle attachments
- ✅ **Custom redirects**: Can redirect users after submission

## Email Format

You'll receive emails like this:
```
Subject: New submission from your contact form

Name: John Doe
Email: john@example.com
Phone: +1234567890
Company: ABC Company
Service: Brand Identity Development
Message: I need help with branding...

--
This email was sent via Formspree.io
```

## Troubleshooting

### If emails don't arrive:
1. Check your spam/junk folder
2. Verify the form endpoint URL is correct
3. Make sure you've set up email notifications in Formspree

### Common Issues:
- **Wrong endpoint URL**: Double-check you copied the correct URL
- **Form not submitting**: Check browser console for JavaScript errors
- **Emails going to spam**: Add Formspree to your email whitelist

## Upgrade Options

When you get more form submissions, you can upgrade to paid plans for:
- More submissions per month
- Custom domains
- Advanced integrations
- Priority support

That's it! Your contact form should now work immediately after you update the endpoint URL. 🎉
