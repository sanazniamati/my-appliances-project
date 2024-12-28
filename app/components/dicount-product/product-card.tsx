/** @format */

import Button from "@/app/lib/design/common/button";
import ImageContainer from "@/app/lib/design/common/img-container";
import Text from "@/app/lib/design/common/text";
import { ProductCardProps } from "./index.types";
import { calculateDiscountedPrice } from "@/app/lib/utils/calculate-discount-price";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discountedPrice = calculateDiscountedPrice(product.price, product.discount);
  return (
    <div
      className="flex flex-col gap-4 p-4 rounded-xl shadow-lg border border-gray-200 
    hover:shadow-xl hover:scale-105 transform transition duration-300 relative"
    >
      <ImageContainer
        src={`${process.env.NEXT_PUBLIC_API_IMG}${product.image}`}
        classes="w-[300px] h-[300px] rounded-t-xl overflow-hidden"
      />
      <div className=" flex flex-col items-start gap-3 px-2 ">
        <Text className=" text-gray-800" size="lg" weight="semibold">
          {product.name}
        </Text>
        <Text className=" text-gray-500 max-w-[100%] overflow-hidden text-ellipsis whitespace-nowrap" size="sm">
          {product.description}
        </Text>
      </div>
      <div className=" flex justify-between items-center px-2">
        <div className=" flex flex-col">
          <div className=" flex items-center space-x-2 space-x-reverse">
            <Text size="sm" className=" text-gray-400 line-through">
              {product.price.toLocaleString()}
            </Text>
            <Text size="sm" weight="semibold" className="text-red-500">
              {product.discount}% تخفیف خورده
            </Text>
          </div>
          <Text className={"text-teal-500"} size="lg" weight="bold">
            {discountedPrice.toLocaleString()}تومان
          </Text>
        </div>
        <Button className="px-4 py-2 text-sm bg-teal-500 text-white rounded-lg hover:bg-teal-600">خرید محصول</Button>{" "}
      </div>
      <div className=" py-[5px] px-[9px] text-white bg-red-500 rounded-lg absolute top-5 right-10 ">
        <span>حراج</span>
      </div>
    </div>
  );
};

export default ProductCard;
