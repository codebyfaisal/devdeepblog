const frontendWebsiteUrl = process.env.FRONTEND_WEBSITE_URL;
const welcomeEmailTemplate = (subscriber) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to DevDeepBlog!</title>
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
        color: #333333;
      }
      .email-container {
        max-width: 600px;
        margin: 1rem auto;
        padding: 2rem;
        background-color: #ffffff;
        border-radius: 8px;
        text-align: center;
      }
      .header h1 {
        margin: 0;
        font-size: 2rem;
        color: #333333;
      }
      .content h2 {
        font-size: 1.5rem;
        margin-top: 1rem;
        color: #555555;
      }
      .content p {
        font-size: 1rem;
        line-height: 1.6;
        color: #555555;
      }
      .cta-button {
        display: inline-block;
        background-color: #333333;
        color: #ffffff;
        padding: 0.8rem 1.8rem;
        text-decoration: none;
        border-radius: 0.5rem;
        margin: 1.5rem 0;
        font-size: 1rem;
        transition: background-color 0.3s ease;
      }
      .cta-button:hover {
        background-color: #4a4a4a;
      }
      .footer {
        text-align: center;
        padding: 1.5rem;
        font-size: 0.8rem;
        color: #777777;
      }
      .footer a {
        text-decoration: none;
        color: #4a90e2;
      }
      .footer a:hover {
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <!-- Header Section -->
      <div class="header">
        <h1>Welcome to DevDeepBlog! 🎉</h1>
      </div>

      <!-- Content Section -->
      <div class="content">
        <h2>Hey ${
          subscriber.email.split("@")[0] || "there"
        }, thanks for subscribing!</h2>
        <p>
          I'm really excited to have you on board! 🚀 <br />
          This isn't your typical blog—it's a space where I share <strong>real-world insights, web development experiences, and deep dives</strong> into tech that actually matters.
        </p>
        <p>
          You won't get daily spam from me—only <strong>thoughtful articles, personal coding journeys, and occasional updates</strong> whenever I publish something valuable.
        </p>

        <!-- Call-to-Action Button -->
        <a href="${frontendWebsiteUrl}" class="cta-button">Check Out the Blog</a>

        <p>
          Feel free to reply anytime! I'd love to hear your thoughts, feedback, or just chat about code. 😉
        </p>
      </div>

      <!-- Footer Section -->
      <div class="footer">
        You received this email because you subscribed to DevDeepBlog.<br />
        If you ever want to opt out, you can
        <a href="${frontendWebsiteUrl}/email/unsubscribe">unsubscribe here</a>.
        <br />
        <small>&copy; 2025 DevDeepBlog</small>
      </div>
    </div>
  </body>
</html>`;

export default welcomeEmailTemplate;
