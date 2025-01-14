/** @format */

export interface SwiperProps {
  slidesPerView?: number;
  spaceBetween?: number;
  autoplayDelay?: number;
  className?: string;
  children: React.ReactNode;
  enableNavigation?: boolean;
  breakpoints?: {
    [key: number]: {
      slidesPerView: number;
      [key: string]: any;
    };
  };
}
