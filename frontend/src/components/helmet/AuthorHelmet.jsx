import Helmet from "react-helmet";

const AuthorHelmet = () => {
  return (
    <Helmet>
      <title>Dev Deep Blog - About the Author </title>
      <meta
        name="description"
        content="Learn more about our author, their expertise, and their latest articles."
      />

      {/* Open Graph (Facebook, LinkedIn, etc.) */}
      <meta property="og:title" content="Meet Our Author - Dev Deep Blog" />
      <meta
        property="og:description"
        content="Discover the brilliant minds behind our insightful blogs."
      />
      <meta property="og:image" content="/default-author.jpg" />
      <meta property="og:type" content="profile" />
      <meta property="og:url" content="https://devdeepblog.vercel.app/author" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Meet Our Author - Dev Deep Blog" />
      <meta
        name="twitter:description"
        content="Discover the brilliant minds behind our insightful blogs."
      />
      <meta name="twitter:image" content="/default-author.jpg" />
    </Helmet>
  );
};

export default AuthorHelmet;
