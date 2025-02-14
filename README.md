# DevDeepBlog

DevDeepBlog is a full-stack personal blog website with a modern, responsive design and robust features. It allows users to create, read, update, and delete blog posts, manage subscribers, and handle email notifications seamlessly.

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS v4
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Cloud Storage**: Cloudinary
- **Email Service**: Nodemailer

## 🚀 Features

- **CRUD Operations**: Full CRUD functionality for blog posts and subscribers.
- **Email Subscription**: Users can subscribe to receive email notifications for new blog posts.
- **Automated Email Notifications**: Send an email to all subscribers when a new blog post is published.
- **Unsubscribe with Verification**: Securely unsubscribe from the mailing list with email verification.
- **Admin Panel**: Manage blog posts, subscribers, and site settings from an intuitive admin interface.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## 📂 Project Structure

```plaintext
/ - Root Directory
  |-- /admin         # Admin panel for managing the blog
  |-- /backend       # Node.js backend with Express
  |-- /frontend      # React.js frontend for users
  |-- README.md      # Project documentation
```

1. **Environment Variables**
   Create a `.env` file in the admin, backend and frontend directories with the following keys:

- Admin

```bash
VITE_API_URL=http://localhost:3000
```

- Backend

```bash
MONGODB_URI=mongodb_connection_uri
PORT=3000
CLOUDINARY_CLOUD_NAME=cloudinary_cloud_name
CLOUDINARY_API_KEY=cloudinary_api_key
CLOUDINARY_API_SECRET=cloudinary_api_secret
CLOUDINARY_FOLDER=cloudinary_folder
ADMIN_SECRET=admin_secret
ADMIN_EMAIL=youmail@gmail.com
ADMIN_PASS=your_password
GOOGLE_CLIENT_ID=google_client_id
GOOGLE_CLIENT_SECRET=google_client_secret
GOOGLE_REFRESH_TOKEN=google_refresh_token
GOOGLE_USER_EMAIL=gmail_for_nodemailer
FRONTEND_WEBSITE_URL=http://localhost:5173
ADMIN_WEBSITE_URL=http://localhost:5174
SERVER_URL=http://localhost:3000
```

- Frontend

```bash
VITE_API_URL=http://localhost:3000
VITE_PROFILE_URL=your_profile_url
```

2. **Access the application**

- Frontend: `http://localhost:5173`
- Admin Panel: `http://localhost:5174`
- Backend: `http://localhost:3000`

## 🧪 API Endpoints Overview

### Blog Posts

- `GET /api/blogs/all` - Get all blog posts
- `GET /api/blogs/:slug` - Get a specific blog post
- `POST /api/blogs` - Create a new blog post (Auth required)
- `PUT /api/blogs` - Update a blog post (Auth required)
- `DELETE /api/blogs/:slug` - Delete a blog post (Auth required)

### Email & Subscribers

- `GET /api/email/subscribers` - Get all subscribers (Admin only)
- `POST /api/email/subscribe` - Subscribe to the blog
- `POST /api/email/unsubscribe` - Request unsubscription
- `GET /api/email/unsubscribe/:code` - Confirm unsubscription
- `DELETE /api/email/subscriber` - Delete a subscriber (Auth required)
- `POST /api/email/send` - Send email to admin

### Authentication

- `POST /admin/login` - Admin login

## 📧 Email Workflow

1. **Subscription**: User subscribes via email.
2. **New Post**: When a new blog post is published, an email is sent to all subscribers.
3. **Unsubscription**: Users can unsubscribe via an email with a verification link.

## 🎨 UI/UX Design

- Minimalistic and clean interface with Tailwind CSS v4.
- Responsive layout for both desktop and mobile devices.

---

Happy Coding 🚀.