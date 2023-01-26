// import next script
import Script from "next/script";
import Seo from "~/components/SEO/Seo";

type SeoDataManager = {
  title: string;
};

const seoData: SeoDataManager = {
  title: "Profiles",
};
export default function Head() {
  return (
    <>
      <Seo seoData={seoData} />
    </>
  );
}
