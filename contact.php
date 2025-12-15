<?php
// Eljaya Trading Co. Contact Form Handler
// Simple PHP email sender - replace with your actual email

header('Content-Type: application/json');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get form data
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$company = trim($_POST['company'] ?? '');
$service = trim($_POST['service'] ?? '');
$message = trim($_POST['message'] ?? '');

// Validate required fields
$errors = [];
if (empty($name)) $errors[] = 'Name is required';
if (empty($email)) $errors[] = 'Email is required';
if (empty($phone)) $errors[] = 'Phone is required';
if (empty($message)) $errors[] = 'Message is required';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Invalid email format';

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['errors' => $errors]);
    exit;
}

// Email configuration
$to = 'eljayasupplies@gmail.com'; // Replace with your email
$subject = 'New Contact Form Message - Eljaya Trading Co.';

$emailBody = "
New Contact Form Submission

From: $name
Email: $email
Phone: $phone
Company: $company
Service Interest: $service

Message:
$message

--
This message was sent from the Eljaya Trading Co. website contact form.
";

// Email headers
$headers = [
    'From: Eljaya Trading Co. Website <noreply@eljaya-trading-co.com>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion()
];

// Send email
$success = mail($to, $subject, $emailBody, implode("\r\n", $headers));

if ($success) {
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your message has been sent successfully. We\'ll respond within 2 hours during business hours.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'error' => 'Sorry, there was a problem sending your message. Please try again or contact us directly.'
    ]);
}
?>
