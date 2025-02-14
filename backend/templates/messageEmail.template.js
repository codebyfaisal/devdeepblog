const frontendWebsiteUrl = process.env.FRONTEND_WEBSITE_URL;
const messageEmailTemplate = ({
  name,
  email,
  subject,
  message,
}) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${name}</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 20px auto; border: 1px solid #ccc; border-radius: 10px; padding: 20px; background-color: #f9f9f9;">
        <h2 style="color: #007BFF;">New Message from <strong>Dev Deep Blog</strong> Contact Page</h2>
        
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        
        <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
        
        <p><strong>Message:</strong></p>
        <p>${message}</p>

        <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
        
        <p style="font-size: 12px; color: #777;">This message was sent from <strong>Dev Deep Blog</strong> contact form. Please do not reply directly to this email if it is sent from a no-reply address.</p>
    </div>
</body>
</html>
`;

export default messageEmailTemplate;
