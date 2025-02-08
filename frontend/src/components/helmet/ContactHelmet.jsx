import Helmet from "react-helmet";

const ContactHelmet = () => {
  return (
    <Helmet>
      <title>Dev Deep Blog - Contact Us</title>
      <meta
        name="description"
        content="Get in touch with us for inquiries, collaborations, and support."
      />

      {/* Open Graph (Facebook, LinkedIn, etc.) */}
      <meta property="og:title" content="Dev Deep Blog - Contact Us" />
      <meta
        property="og:description"
        content="Have questions? Reach out to us for support or collaboration."
      />
      <meta property="og:image" content="/default-contact.jpg" />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://devdeepblog.vercel.app/contact"
      />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Dev Deep Blog - Contact Us" />
      <meta
        name="twitter:description"
        content="Have questions? Reach out to us for support or collaboration."
      />
      <meta name="twitter:image" content="/default-contact.jpg" />
    </Helmet>
  );
};

export default ContactHelmet;
