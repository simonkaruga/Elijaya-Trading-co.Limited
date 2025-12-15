# PHP Contact Form Setup Guide for Eljaya Trading Co.

## Why Use PHP Instead?

PHP provides reliable email sending directly from your server without third-party dependencies. Your emails will be delivered immediately to your inbox.

## Setup Instructions

### 1. Upload Files to Your Web Server
Make sure your web hosting supports PHP (most hosts do). Upload these files:
- `contact.php`
- `index.html`
- `script.js`
- `style.css`

### 2. Test the Contact Form
1. Open your website
2. Fill out the contact form
3. Submit it
4. Check your email (eljayasupplies@gmail.com)

### 3. Email Format
You'll receive emails like this:
```
Subject: New Contact Form Message - Eljaya Trading Co.

New Contact Form Submission

From: John Doe
Email: john@example.com
Phone: +1234567890
Company: ABC Company
Service Interest: Brand Identity Development

Message:
I need help with branding...

--
This message was sent from the Eljaya Trading Co. website contact form.
```

## How It Works

1. **User submits form** → JavaScript validates and shows loading
2. **Data sent to PHP** → `contact.php` processes the form data
3. **Email sent** → PHP's `mail()` function sends to your email
4. **Response returned** → Success/error message shown to user

## Customization Options

### Change Recipient Email
Edit line 22 in `contact.php`:
```php
$to = 'your-email@example.com'; // Replace with your email
```

### Change Email Subject
Edit line 26 in `contact.php`:
```php
$subject = 'Your Custom Subject Line';
```

### Add More Fields
1. Add input fields to `index.html`
2. Update the PHP script to handle new fields
3. Update the email body template

## Troubleshooting

### Emails not arriving?
1. Check your spam/junk folder
2. Verify your hosting supports PHP `mail()` function
3. Check server error logs
4. Some hosts require SMTP authentication

### Form not submitting?
1. Check browser console for JavaScript errors
2. Verify all files are uploaded correctly
3. Make sure PHP is enabled on your server

### Need SMTP instead of PHP mail()?
Some hosts require SMTP. Here's how to modify:

```php
// Install PHPMailer via Composer or download manually
require 'vendor/autoload.php'; // or path to PHPMailer

use PHPMailer\PHPMailer\PHPMailer;

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->Host = 'your-smtp-server.com';
$mail->SMTPAuth = true;
$mail->Username = 'your-email@domain.com';
$mail->Password = 'your-password';
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

// Then use $mail->send() instead of mail()
```

## Security Notes

- Form includes basic validation
- No file uploads (safer)
- Server-side validation prevents spam
- Email addresses are validated

## Benefits of PHP Solution

- ✅ **Reliable** - Works with any PHP hosting
- ✅ **No third-party services** - Complete control
- ✅ **Instant delivery** - No queues or limits
- ✅ **Customizable** - Full control over email format
- ✅ **Secure** - Server-side processing

Your contact form is now ready to send emails! Test it and let me know if you need any adjustments. 📧
