/** @format */

import { Swiper } from "swiper/react";
import { SwiperProps } from "./index.types";
import { cn } from "@/app/lib/utils/cn";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const SectionSlider: React.FC<SwiperProps> = ({
  children,
  slidesPerView = 5,
  spaceBetween = 15,
  autoplayDelay = 1800,
  className = "",
  enableNavigation = true,
  breakpoints = {
    320: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: slidesPerView },
  },
}) => {
  return (
    <section>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        autoplay={{
          delay: autoplayDelay,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={enableNavigation}
        className={cn(`mySwiper`, className)}
        breakpoints={breakpoints}
      >
        {children}
      </Swiper>
    </section>
  );
};

export default SectionSlider;
