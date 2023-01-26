// import next script
import Script from "next/script";
import Seo from "~/components/SEO/Seo";

type SeoDataManager = {
  title: string;
};

const seoData: SeoDataManager = {
  title: "Login to Existing Account",
};
export default function Head() {
  return (
    <>
      <Seo seoData={seoData} />
    </>
  );
}
