import { Seo } from "~/components/Seo";

type SeoDataManager = {
  title: string;
};

const seoData: SeoDataManager = {
  title: "Verified Polinema ID",
};

export default function Head() {
  return <Seo seoData={seoData} />;
}
