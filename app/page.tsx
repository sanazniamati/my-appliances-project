/** @format */

import BrandsSlider from "./components/brands-slider";
import FeatureProduct from "./components/feature-product";
import MainContent from "./components/main-content";
import SectionSpace from "./lib/design/common/section-space";

export default function Home() {
  return (
    <SectionSpace className="mt-5 flex flex-col gap-4 ">
      <MainContent />
      <FeatureProduct />
      <BrandsSlider />
    </SectionSpace>
  );
}
