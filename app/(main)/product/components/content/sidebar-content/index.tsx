/** @format */

import { cn } from "@nextui-org/react";
import { Props } from "./index.type";
import SideFilter from "./side-filter";
import SortFilter from "./sort-filter";

const SidebarContent: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        " flex flex-col gap-8 px-6 py-3 h-fit rounded-lg  bg-opacity-50 backdrop-blur-lg bg-white border border-white border-opacity-20", //  تنظیمات شیشه‌ای,
        className
      )}
    >
      <SideFilter title="مرتب سازی">
        <SortFilter />
      </SideFilter>
      <SideFilter title="دسته بندی">
        <div>دسته</div>
      </SideFilter>
    </div>
  );
};

export default SidebarContent;
