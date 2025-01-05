/** @format */

import { FC } from "react";
import { ProductCardProps } from "./index.types";
import ImageContainer from "@/app/lib/design/common/img-container";
import Text from "@/app/lib/design/common/text";
import StarRating from "@/app/lib/design/common/star-rating";
import Button from "@/app/lib/design/common/button";

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div
      className=" rounded-xl shadow-lg border border-gray-200 flex flex-col gap-4 p-4 
    transition duration-200 transform hover:scale-105 hover:shadow-xl"
    >
      <ImageContainer
        classes="w-[300px] h-[300px] rounded-t-xl overflow-hidden"
        src={`${process.env.NEXT_PUBLIC_API_IMG}${product.image}`}
      />
      <div className=" flex flex-col items-start px-2">
        <Text size="lg" weight="semibold" className=" text-gray-800">
          {product.name}
        </Text>
        <Text size="sm" className=" text-gray-500 overflow-hidden whitespace-nowrap max-w-[100%] text-ellipsis">
          {product.description}
        </Text>
      </div>
      <StarRating rating={product.rating} className=" px-2" size="text-lg" />
      <div className="flex justify-between items-center px-2">
        <Button className="px-4 py-2 text-sm bg-teal-500 text-white rounded-lg hover:bg-teal-600">خرید محصول</Button>
      </div>
    </div>
  );
};

export default ProductCard;
