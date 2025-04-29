/** @format */
"use client";
import SectionSlider from "@/app/lib/design/common/section-slider";
import { useGetProductById, useGetProducts } from "@/app/lib/hooks/product";
import { useParams } from "next/navigation";
import { SwiperSlide } from "swiper/react";
import RelatedItem from "./related-item";

const RelatedList = () => {
  // !! Get Param
  const param = useParams();
  const id = param.id;

  // !! Fetch
  const { data: getProductDetail } = useGetProductById({ id: String(id) });
  const categoryId = getProductDetail?.data.product.category._id;
  const { data: getProducts } = useGetProducts({ category: categoryId });
  console.log("getProducts", getProducts?.data.products);

  return (
    <div>
      <SectionSlider>
        {getProducts?.data.products.map((product) => {
          return (
            <SwiperSlide key={product._id}>
              <RelatedItem key={product._id} product={product} />
            </SwiperSlide>
          );
        })}
      </SectionSlider>
    </div>
  );
};
export default RelatedList;
