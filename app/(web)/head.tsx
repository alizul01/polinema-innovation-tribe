import Seo from "~/components/SEO/Seo";

type SeoDataManager = {
  title: string;
};

const seoData: SeoDataManager = {
  title: "Home",
};

export default function Head() {
  return (
    <>
      <Seo seoData={seoData} />
    </>
  );
}
