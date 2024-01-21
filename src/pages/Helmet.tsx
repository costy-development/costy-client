import { Helmet } from "react-helmet";

import { APP_ORIGIN } from "@/config/env";

type HelmetElT = {
  title?: string;
  description: string;
  author?: string;
  type?: "website" | "article" | "video" | "music" | "profile" | "place";
  disAllowCrawler?: boolean;
  imageAlt?: string;
};

const AppHelmet: React.FC<HelmetElT> = ({
  title,
  description,
  author,
  type = "website",
  disAllowCrawler = false,
  imageAlt,
}) => {
  const alt = imageAlt || "costy";
  const path = `${window.location.pathname}${window.location.search}`;
  const url = `${APP_ORIGIN}${path}`;
  const appTitle = `Costy${title ? ` | ${title}` : ""}`;
  const imageURL = `${APP_ORIGIN}/icons/logo.png`;

  return (
    <Helmet>
      {/* TITLE */}
      <title>{appTitle}</title>

      {/* META */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageURL} />
      <meta property="og:image:secure_url" content={imageURL} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content={alt} />
      <meta property="og:card" content={imageURL} />
      <meta property="og:title" content={appTitle} />
      <meta property="og:site_name" content="Costy" />
      <meta property="og:description" content={description} />
      {/* TWITTER */}
      <meta name="twitter:image" content={imageURL} />
      <meta name="twitter:image:alt" content={alt} />
      <meta name="twitter:card" content={imageURL} />
      <meta name="twitter:title" content={appTitle} />
      <meta name="twitter:description" content={description} />

      {/* MetaData For Facebook and WhatsUp */}
      {/* Name, Title , Author, Description and etc... */}
      {author && <meta name="author" content={author} />}
      <meta name="description" content={description} />

      {/* PATH */}
      <link rel="canonical" href={url} />

      {disAllowCrawler && <meta name="robots" content="noindex" />}
    </Helmet>
  );
};

export default AppHelmet;
