import { Seo } from "~/components/Seo";

type SeoDataManager = {
  title: string;
};

const seoData: SeoDataManager = {
  title: "Logging Out...",
};

export default function Head() {
  return <Seo seoData={seoData} />;
}
