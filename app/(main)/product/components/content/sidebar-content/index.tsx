/** @format */

import { cn } from "@nextui-org/react";
import { Props } from "./index.type";
import SideFilter from "./side-filter";
import SortFilter from "./sort-filter";
import CategoriesFilter from "./categories-filter";
import Brand from "./brand";
import PriceFilter from "./price-filter";
import ResetFilter from "./reset-filter";

const SidebarContent: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        " flex flex-col gap-8 px-6 py-3 h-fit rounded-lg  bg-opacity-50 backdrop-blur-lg bg-white border border-white border-opacity-20", //  تنظیمات شیشه‌ای,
        className
      )}
    >
      <SideFilter title="">
        <ResetFilter />
      </SideFilter>
      <SideFilter title="مرتب سازی">
        <SortFilter />
      </SideFilter>
      <SideFilter title="دسته بندی">
        <CategoriesFilter />
      </SideFilter>
      <SideFilter title="برند محصول">
        <Brand />
      </SideFilter>
      <SideFilter title="فیلتر بر اساس قیمت ">
        <PriceFilter />
      </SideFilter>
    </div>
  );
};

export default SidebarContent;
