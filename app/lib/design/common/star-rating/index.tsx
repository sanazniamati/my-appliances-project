/** @format */

import { MdStar, MdStarHalf, MdStarBorder } from "react-icons/md";
import { StarRatingProps } from "./index.types";
import { cn } from "@/app/lib/utils/cn";

const StarRating: React.FC<StarRatingProps> = ({ rating, className, size = "text-xl" }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className={cn("flex", className)}>
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <MdStar key={index} className={cn("text-yellow-500", size)} />
        ))}
      {halfStar === 1 && <MdStarHalf className={cn("text-yellow-500", size)} />}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <MdStarBorder key={index + fullStars + halfStar} className={cn("text-yellow-500", size)} />
        ))}
    </div>
  );
};

export default StarRating;
