import Helmet from "react-helmet";

const HomeHelmet = () => {
  return (
    <Helmet>
      <title>Dev Deep Blog</title>
      <meta
        name="description"
        content="Discover insightful blogs on various topics. Explore our latest articles and stay updated!"
      />

      {/* Open Graph (Facebook, LinkedIn, etc.) */}
      <meta property="og:title" content="Welcome to Dev Deep Blog" />
      <meta
        property="og:description"
        content="Explore engaging articles and insightful blogs on various topics."
      />
      <meta property="og:image" content="/default-home.jpg" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://devdeepblog.vercel.app" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Welcome to Dev Deep Blog" />
      <meta
        name="twitter:description"
        content="Explore engaging articles and insightful blogs on various topics."
      />
      <meta name="twitter:image" content="/default-home.jpg" />
    </Helmet>
  );
};

export default HomeHelmet;
