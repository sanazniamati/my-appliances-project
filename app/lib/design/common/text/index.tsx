/** @format */

import { cn } from "@/app/lib/utils/cn";
import { Props } from "./index.types";

const Text: React.FC<Props> = ({ as = "p", size = "md", weight = "normal", children, className }) => {
  const Tag = as as keyof JSX.IntrinsicElements;

  const baseClasses = "text-gray-800";

  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const weightClasses = {
    normal: "font-normal",
    semibold: "font-semibold",
    bold: "font-bold",
  };
  return <Tag className={cn(baseClasses, sizeClasses[size], weightClasses[weight], className)}>{children}</Tag>;
};

export default Text;
