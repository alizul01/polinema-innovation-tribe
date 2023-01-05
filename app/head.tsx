// import next script
import Script from "next/script";
export default function Head() {
  return (
    <>
      <meta charSet="UTF-8" />
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Description of my website" />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href="URL for this page" />
      <meta property="og:title" content="My Website" />
      <meta property="og:locale" content="en_GB (or other locality code)" />
      <meta property="og:description" content="Description of my website" />
      <meta property="og:image" content="Image URL representing my website" />
      <meta property="og:image:width" content="Image Width" />
      <meta property="og:image:height" content="Image Height" />
      <meta
        property="og:image:alt"
        content="Image alternative text, if the image is missing"
      />
      <meta
        property="og:image:type"
        content="image/png (or other i.e. image/jpeg, image/gif)"
      />
      <meta property="og:url" content="URL for this page" />
      <meta property="og:site_name" content="My Website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="/" />
      <meta name="twitter:title" content="SEO HTML Meta Tag Reference List" />
      <meta name="twitter:creator" content="" />
      <meta
        name="twitter:description"
        content="A list of all the useful meta tags, and a quick start HTML template"
      />
      <meta
        name="twitter:image"
        content="/"
      />
      <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-[[ID HERE]]"
      />
    </>
  );
}
