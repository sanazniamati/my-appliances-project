/** @format */

import SectionTitle from "@/app/lib/design/common/section-title";
import TechnicalList from "./technical-list";
import RelatedProducts from "../related-product";

const TechnicalSpecifications = () => {
  return (
    <section>
      <SectionTitle title="مشخصات فنی محصول" />
      <TechnicalList />
      <RelatedProducts />
    </section>
  );
};
export default TechnicalSpecifications;
