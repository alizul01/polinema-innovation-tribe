// import next script
import { Seo } from "~/components/Seo";

type SeoDataManager = {
  title: string;
};

const seoData: SeoDataManager = {
  title: "User Setting",
};
export default function Head() {
  return (
    <>
      <Seo seoData={seoData} />
    </>
  );
}
