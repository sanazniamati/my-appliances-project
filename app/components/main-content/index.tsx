/** @format */

import Banner from "./banner";
import CategorySidebar from "./category-sidebar";
import ProductCard from "./product-card";
import ServiceFeatures from "./service-features";

const MainContent = () => {
  return (
    <section className=" flex flex-col gap-6">
      <div className=" grid grid-cols-1 xl:grid-cols-5 gap-2">
        <CategorySidebar />
        <div className="flex flex-col col-span-3">
          <Banner />
          <ServiceFeatures />
        </div>
        <ProductCard />
      </div>
    </section>
  );
};

export default MainContent;
