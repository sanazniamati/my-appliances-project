/** @format */

import { cn } from "@/app/lib/utils/cn";

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  isActiveLine = true,
  lineClassName = "",
  className = "",
}) => {
  return (
    <div className={cn("flex items-center gap-5", className)}>
      <h1 className="text-2xl font-bold">{title}</h1>
      {isActiveLine && <span className={cn("h-[1px] flex-1 bg-gray-300 ", lineClassName)}></span>}
    </div>
  );
};

export default SectionTitle;
