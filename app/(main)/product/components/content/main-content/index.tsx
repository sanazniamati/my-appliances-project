/** @format */

import { cn } from "@/app/lib/utils/cn";
import { Props } from "./index.types";

const MainContent: React.FC<Props> = ({ className }) => {
  return <div className={cn("flex flex-col gap-10  ", className)}>MainContent</div>;
};

export default MainContent;
