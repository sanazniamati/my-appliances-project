/** @format */

import { cn } from "@/app/lib/utils/cn";
import { ISideFilterProps } from "./index.type";
import SectionTitle from "@/app/lib/design/common/section-title";
import { Divider } from "@nextui-org/react";

const SideFilter: React.FC<ISideFilterProps> = ({ children, title, className, isBorderBottom = false }) => {
  return (
    <div className={cn("flex flex-col gap-8", className)}>
      <SectionTitle title={title} isActiveLine={false} />
      {children}
      {isBorderBottom && <Divider className="h-[1px] w-[98%] bg-gray-400 " />}
    </div>
  );
};

export default SideFilter;
