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
    <div style="max-width: 600px; box-shadow:  0 0 1px 0 #ccc; border-radius: 1rem; padding: 0.5rem;">
        <h2 style="color: #007BFF;">From <strong>Dev Deep Blog</strong> Contact Page</h2>
        
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        
        <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
        
        <p><strong>Message:</strong></p>
        <p>${message}</p>

        <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
        
        <p style="font-size: 12px; color: #777;">This message was sent from <a href="${frontendWebsiteUrl}"><strong>Dev Deep Blog</strong></a> contact form. Please do not reply directly to this email if it is sent from a no-reply address.</p>
    </div>
</body>
</html>
`;

export default messageEmailTemplate;
