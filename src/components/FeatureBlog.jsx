import React from "react";
import { Helmet } from "react-helmet";

const FeatureBlog = () => {
  const postTitle = "Your Feature Post Title";
  const postDescription = "A brief summary of the feature post content goes here. Ideally around 150-160 characters.";
  const postDate = "January 30, 2025";
  const postAuthor = "Author Name";
  const postImage = "https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/loft-office-with-vintage-decor-PFD2JSL-1.jpg"; // Sample image

  return (
    <article className="feature-post w-full">
      {/* Dynamic meta tags for SEO */}
      <Helmet>
        <title>{postTitle}</title>
        <meta name="description" content={postDescription} />
        <meta property="og:title" content={postTitle} />
        <meta property="og:description" content={postDescription} />
        <meta property="og:image" content={postImage} />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* Feature Post Container */}
      <div className="relative overflow-hidden rounded-md max-h-[70vh] shadow-md font-cabin">
        <img
          src={postImage}
          alt={postTitle}
          className="w-full h-full object-cover object-center min-h-40"
        />

        <div className="sm:absolute sm:inset-0 flex flex-col justify-end p-3 sm:p-6 sm:bg-gradient-to-t from-black via-transparent to-transparent sm:text-white">
          {/* Post Title */}
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-2">{postTitle}</h1>
          
          {/* Post Meta */}
          <div className="text-sm mb-4">
            <time dateTime="2025-01-30" className="mr-2">{postDate}</time>
            <span className="text-gray-300">|</span>
            <span className="ml-2">By <a href="/author-name" className="text-blue-400 hover:underline">{postAuthor}</a></span>
          </div>

          {/* Post Description */}
          <p className="text-md sm:text-lg">{postDescription}</p>
        </div>
      </div>
    </article>
  );
};

export default FeatureBlog;
