/** @format */
"use client";

import SectionTitle from "@/app/lib/design/common/section-title";
import { useGetProducts } from "@/app/lib/hooks/product";
import ProductCard from "./product-card";

const DiscountProduct = () => {
  const { data: discountProducts } = useGetProducts({ limit: 4, sortBy: "discounted" });
  return (
    <section className=" flex flex-col gap-4 mt-20">
      <SectionTitle title="محصولات تخفیف" />
      <section className=" grid grid-cols-4 gap-6 p-2">
        {discountProducts?.data.products.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </section>
    </section>
  );
};

export default DiscountProduct;
