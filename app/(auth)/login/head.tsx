import { Seo } from "~/components/Seo";

type SeoDataManager = {
  title: string;
};

const seoData: SeoDataManager = {
  title: "Login to Existing Account",
};

export default function Head() {
  return <Seo seoData={seoData} />;
}
