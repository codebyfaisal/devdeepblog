const frontendWebsiteUrl = process.env.FRONTEND_WEBSITE_URL;
const blogEmailTemplate = (blog) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${blog.title}</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
    <style>
      body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #ffffff; color: #333333; }
      .email-container { max-width: 600px; margin: 1rem auto; padding: 2rem; background-color: #ffffff; color: #333333; border-radius: 8px; overflow: hidden; text-align: center; }
      .header h1 { margin: 1rem 0; font-size: 2rem; color: #333333; }
      .content h2 { font-size: 1.5rem; margin-top: 0; }
      .content p { font-size: 1rem; line-height: 1.6; color: #555555; }
      .blog { text-align: center; margin: 1rem 0; }
      .blog img { max-width: 100%; height: auto; animation: fadeIn 2s ease-in-out; }
      .cta-button { display: inline-block; background-color: #333333; color: #ffffff; padding: 0.8rem 1.8rem; text-decoration: none; border-radius: 0.5rem; margin: 1.5rem 0; font-size: 1rem; transition: background-color 0.3s ease; }
      .cta-button:hover { background-color: #4a4a4a; }
      .social-icons { text-align: center; margin-top: 1rem; }
      .social-icons a { display: inline-block; margin: 0 0.2rem; }
      .social-icons img { width: 2rem; height: 2rem; transition: transform 0.3s, color 0.3s; }
      .social-icons img:hover { transform: scale(1.1); }
      .footer { text-align: center; padding: 1.5rem; font-size: 0.8rem; color: #777777; }
      .footer a { text-decoration: none; color: #4a90e2; }
      .footer a:hover { text-decoration: underline; }
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    </style>
  </head>
  <body>
    <div class="email-container">
      <!-- Header Section -->
      <div class="header">
        <h1>${blog.title}</h1>
      </div>

      <!-- Content Section -->
      <div class="content">
        <h2>Discover the Latest Insights from <br/> Muhammad Faisal</h2>
        <p>
          Published on ${blog.publishedDate}<br/>
          ${blog.description}
        </p>

        <!-- Animated Blog Section -->
        <div class="blog">
          <img src="${blog.image}" alt="Blog Image" loading="lazy" />
        </div>

        <!-- Call-to-Action Button -->
        <a href="${frontendWebsiteUrl}/blogs/${blog.slug}" class="cta-button">Read Full Blog</a>

        <p>
          Stay tuned for more updates, and don’t forget to share your thoughts with us!
        </p>

        <!-- Social Icons Section -->
        <div class="social-icons">
          <a href="https://www.linkedin.com/in/codebyfaisal" target="_blank"><img src="https://img.icons8.com/ios-glyphs/30/linkedin.png" alt="LinkedIn" loading="lazy" /></a>
          <a href="https://www.github.com/codebyfaisal" target="_blank"><img src="https://img.icons8.com/ios-glyphs/30/github.png" alt="github" loading="lazy" /></a>
        </div>
      </div>

      <!-- Footer Section -->
      <div class="footer">
        You are receiving this email because you subscribed to our blog.<br />
        If you no longer wish to receive updates, <a href="${frontendWebsiteUrl}/email/unsubscribe">unsubscribe here</a>.<br />
        <small>&copy; 2025 devdeeepblog</small>
      </div>
    </div>
  </body>
</html>`;

export default blogEmailTemplate;
