/** @format */

"use client";
import { useGetBrands } from "@/app/lib/hooks/brands";
import BrandItem from "./brand-item";
import Swiper from "swiper";
import SectionSlider from "@/app/lib/design/common/section-slider";
import { SwiperSlide } from "swiper/react";

const BrandsSlider = () => {
  const { data: getBrands } = useGetBrands();
  return (
    <>
      {/* <div className="grid grid-cols-5 gap-4">
        {getBrands?.data.map((item) => (
          <BrandItem key={item._id} item={item} />
        ))}
      </div> */}

      {getBrands && (
        <SectionSlider autoplayDelay={2000} spaceBetween={20} slidesPerView={6}>
          {getBrands?.data.map((brand) => {
            return (
              <SwiperSlide key={brand._id}>
                <BrandItem item={brand} key={brand._id} />
              </SwiperSlide>
            );
          })}
        </SectionSlider>
      )}
    </>
  );
};

export default BrandsSlider;
