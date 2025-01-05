/** @format */

"use client";

import SectionTitle from "@/app/lib/design/common/section-title";
import { useGetCategories } from "@/app/lib/hooks/categories";
import { useGetProducts } from "@/app/lib/hooks/product";
import { useState } from "react";
import ProductCard from "./product-card";

const RattingProduct = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("");

  const { data: getProducts } = useGetProducts({
    sortBy: "rating",
    limit: 4,
    category: activeCategoryId,
  });
  return (
    <section className=" flex flex-col justify-center gap-4 mt-20">
      <SectionTitle title="برترین محصولات" />
      <div></div>
      <section className=" grid grid-cols-4 gap-6 p-2">
        {getProducts?.data.products.map((product) => {
          return <ProductCard product={product} key={product._id} />;
        })}
      </section>
    </section>
  );
};

export default RattingProduct;
