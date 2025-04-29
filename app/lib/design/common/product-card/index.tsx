/** @format */

import { ProductState } from "@/app/lib/services/product/index.types";
import { calculateDiscountedPrice } from "@/app/lib/utils/calculate-discount-price";
import { cn } from "@/app/lib/utils/cn";
import React from "react";
import LinkContainer from "../link-container";
import ImageContainer from "../img-container";
import Text from "../text";
import { convertDateFormat } from "@/app/lib/utils/date.format";
import StarRating from "../star-rating";
import { Button } from "@nextui-org/react";
import { formatToIranianCurrency } from "@/app/lib/utils/currency";

interface IProductCardProps {
  product: ProductState;
  showDescription?: boolean;
  showRating?: boolean;
  showDiscount?: boolean;
  showCreatedDate?: boolean;
  buttonLable?: string;
  onButtonClick?: () => void;
  parrentClassName?: string;
  imgClassName?: string;
  imgLink?: string;
}

const ProductCard: React.FC<IProductCardProps> = ({
  product,
  buttonLable = "مشاعده محصول",
  imgClassName,
  imgLink = `/product/${product._id}`,
  onButtonClick,
  parrentClassName,
  showCreatedDate = true,
  showDescription = true,
  showDiscount = true,
  showRating = true,
}) => {
  const discountedPrice = calculateDiscountedPrice(product.price, product.discount);

  return (
    <div
      className={cn(
        "rounded-xl shadow-lg borde  border-gray-200 relative flex flex-col gap-4 p-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl",
        parrentClassName
      )}
    >
      <LinkContainer classes="relative border-2 border-blue-600" href={imgLink}>
        <ImageContainer
          src={`${process.env.NEXT_PUBLIC_API_IMG}${product.image}`}
          classes={cn("h-60 w-60 rounded-t-xl mx-auto object-fill")}
        />
      </LinkContainer>

      <div className="flex flex-col items-start px-2 gap-3 border-2 border-red-600">
        <Text className=" font-semibold text-gray-800">{product.name}</Text>
        {showDescription && (
          <Text className="text-sm text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap max-w-[100%]">
            {product.description ||
              " محصولاتی با کیفیت بالا و ویژگی‌های منحصر به فرد که تجربه‌ای عالی برای شما به ارمغان می‌آورند"}
          </Text>
        )}

        {showCreatedDate && <Text>محصول جدید از تاریخ : {convertDateFormat(product.createdAt, "fa")}</Text>}
      </div>

      {showRating && (
        <div className=" flex justify-between items-center  border-2 border-green-600">
          <span className="text-sm mr-2 text-blue-500 font-semibold">امتیاز مشتریان:</span>
          <StarRating rating={product.rating} className="px-2" size="text-lg" />
        </div>
      )}

      <div className=" flex justify-between items-center px-2">
        <div className=" flex flex-col">
          {showDiscount && product.discount > 0 && (
            <div className="flex items-center space-x-2">
              <Text>{formatToIranianCurrency(product.price, "toman")}</Text>
              <Text className="text-sm text-red-500 font-semibold">{product.discount}% تخفیف خورده</Text>
            </div>
          )}
          <Text
            className={`text-lg font-bold  border-2 border-blue-600 ${
              product.discount > 0 ? "text-teal-500" : "text-red-500"
            }`}
          >
            {formatToIranianCurrency(discountedPrice, "toman")}
          </Text>
        </div>
      </div>

      <Button
        variant="shadow"
        className="px-4 py-2 text-sm bg-teal-500 text-white rounded-lg hover:bg-teal-600"
        onClickCapture={onButtonClick}
      >
        {buttonLable}
      </Button>
    </div>
  );
};

export default ProductCard;
