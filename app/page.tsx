/** @format */

import BrandsSlider from "./components/brands-slider";
import DiscountProduct from "./components/dicount-product";
import FeatureProduct from "./components/feature-product";
import MainContent from "./components/main-content";
import NewestProduct from "./components/newest-product";
import OverViewProduct from "./components/overview-product";
import RattingProduct from "./components/ratting-product";
import UserComments from "./components/user-comments";
import SectionSpace from "./lib/design/common/section-space";

export default function Home() {
  return (
    <SectionSpace className="mt-5 flex flex-col gap-4 ">
      <MainContent />
      <FeatureProduct />
      <BrandsSlider />
      <NewestProduct />
      <DiscountProduct />
      <OverViewProduct />
      <RattingProduct />
      <UserComments />
    </SectionSpace>
  );
}
