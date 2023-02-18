import Script from "next/script";

type SeoDataManager = {
  title: string;
};

type SeoProps = {
  seoData: SeoDataManager;
};

export function Seo({ seoData }: SeoProps) {
  return (
    <>
      <meta charSet="UTF-8" />
      <link rel="shortcut icon" href="/logo/favicon.png" type="image/x-icon" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Polinema Innovation Tribe adalah wadah yang memberikan kesempatan kepada mahasiswa untuk mengembangkan ide-ide kreatifnya bersama dengan tim yang terdiri dari mahasiswa-mahasiswa yang memiliki visi yang sama."
      />
      <title>{["Politribe", " · ", seoData.title].join(" ")}</title>
      <meta name="robots" content="index,follow" />
      <link
        rel="canonical"
        href="https://polinema-innovation-tribe.vercel.app"
      />
      <meta property="og:title" content="Polinema Innovation Tribe" />
      <meta property="og:locale" content="id_ID" />
      <meta
        property="og:description"
        content="Polinema Innovation Tribe adalah wadah yang memberikan kesempatan kepada mahasiswa untuk mengembangkan ide-ide kreatifnya bersama dengan tim yang terdiri dari mahasiswa-mahasiswa yang memiliki visi yang sama."
      />
      <meta property="og:image" content="/header.png" />
      <meta property="og:image:width" content="1200px" />
      <meta property="og:image:height" content="630px" />
      <meta property="og:image:alt" content="Polinema Innovation Tribe" />
      <meta property="og:image:type" content="image/png" />
      <meta
        property="og:url"
        content="https://polinema-innovation-tribe.vercel.app"
      />
      <meta property="og:site_name" content="Politribe" />
      <meta name="twitter:card" content="Polinema Innovation Tribe" />
      <meta
        name="twitter:site"
        content="https://polinema-innovation-tribe.vercel.app"
      />
      <meta name="twitter:title" content="Polinema Innovation Tribe" />
      <meta name="twitter:creator" content="alizul01" />
      <meta
        name="twitter:description"
        content="Polinema Innovation Tribe adalah wadah yang memberikan kesempatan kepada mahasiswa untuk mengembangkan ide-ide kreatifnya bersama dengan tim yang terdiri dari mahasiswa-mahasiswa yang memiliki visi yang sama."
      />
      <meta name="twitter:image" content="/header.png" />
      <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=GTM-MXJ2P4R"
      />
    </>
  );
}
