/** @format */

import { cn } from "@/app/lib/utils/cn";
import ImageContainer from "../img-container";
import LogoImg from "@/public/images/logo/website.png";

interface IProps {
  className?: string;
}
const Logo: React.FC<IProps> = ({ className }) => {
  return <ImageContainer src={LogoImg.src} classes={cn("w-14 h-14", className)} />;
};
export default Logo;
