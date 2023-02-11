import Head from "next/head";
import logo from "@/assets/image/logo/logo.svg"

interface SEOProps {
  title: string;
  description: string;
}

const SEO = ({ title, description }: SEOProps) => {
  return (
    <Head>
      <title>{`${title}`}</title>
      <link rel="shortcut icon" href={logo} type="image/x-icon" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
    </Head>
  );
};

export default SEO;