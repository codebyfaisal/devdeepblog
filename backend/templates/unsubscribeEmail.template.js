const serverUrl = process.env.SERVER_URL;

const unsubscribeEmailTemplate = (email, code) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Unsubscribe Notice</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f5f5f5;
        color: #333333;
      }
      .email-container {
        max-width: 600px;
        margin: 1rem auto;
        padding: 2rem;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .header {
        text-align: center;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid #eeeeee;
      }
      .header h1 {
        margin: 0;
        font-size: 1.8rem;
        color: #2c3e50;
      }
      .content {
        padding: 2rem 0;
        text-align: center;
      }
      .content h2 {
        font-size: 1.4rem;
        margin-top: 0;
        color: #34495e;
      }
      .content p {
        font-size: 1rem;
        line-height: 1.6;
        color: #666666;
        margin: 1rem 0;
      }
      .notice-box {
        background-color: #f8f9fa;
        border: 1px solid #e9ecef;
        border-radius: 6px;
        padding: 1.5rem;
        margin: 1.5rem 0;
      }
      .ignore-message {
        font-style: italic;
        color: #7f8c8d;
      }
      .contact-support {
        margin-top: 2rem;
        font-size: 0.9rem;
        color: #95a5a6;
      }
      .footer {
        text-align: center;
        padding-top: 1.5rem;
        border-top: 1px solid #eeeeee;
        font-size: 0.8rem;
        color: #95a5a6;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="header">
        <h1>Unsubscribe Request</h1>
      </div>

      <div class="content">
        <h2>Hello ${email.split("@")[0] || "there"}!</h2>
        
        <div class="notice-box">
          <p>We noticed an attempt to unsubscribe this email address from our mailing list.</p>
          <p class="ignore-message">
            <strong>If you did not request to unsubscribe, please disregard this email.</strong>
            Your subscription will continue as normal.
          </p>
        </div>

        <p>
          If you did request to unsubscribe and would like to verify this action,
          you can do so by visiting:
        </p>
        
        <p>
          <a href="${serverUrl}/api/email/unsubscribe/${code}" style="color: white; background: black; padding: 0.5rem 1rem; border-radius:1rem">
            Unsubscribe
          </a>
          <br/>
          <span style="font-size: 1.2rem; margin: 1rem 0; display: inline-block">OR</span>
          <br/>
          <a href="${serverUrl}/api/email/unsubscribe/${code}" style="color: #3498db;">
            ${serverUrl}/api/email/unsubscribe/${code}
          </a>
        </p>

        <div class="contact-support">
          <p>
            If you have any questions or need assistance, please don't hesitate to contact our support team.
          </p>
        </div>
      </div>

      <div class="footer">
        <p>&copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </div>
  </body>
</html>`;

export default unsubscribeEmailTemplate;
