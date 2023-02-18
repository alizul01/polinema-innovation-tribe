import { Seo } from "~/components/Seo";

type SeoDataManager = {
  title: string;
};

const seoData: SeoDataManager = {
  title: "Register New Account",
};

export default function Head() {
  return <Seo seoData={seoData} />;
}
