/** @format */

import { FC } from "react";
import { IProductPriceProps } from "./index.types";
import { formatToIranianCurrency } from "@/app/lib/utils/currency";
import Text from "@/app/lib/design/common/text";
import { calculateDiscountedPrice } from "@/app/lib/utils/calculate-discount-price";

const ProductPrice: FC<IProductPriceProps> = ({ product }) => {
  return (
    <div className=" mt-4 bg-gray-50 p-4 rounded-md border border-gray-200  shadow-md text-center">
      {product.discount ? (
        <div className=" mb-2">
          <Text className=" text-lg font-semibold text-red-500 line-through">
            {formatToIranianCurrency(product.price, "toman")}
          </Text>
          <div className=" flex justify-center items-center gap-2 mt-2">
            <Text size="lg" weight="bold" className=" text-gray-700">
              قیمت با تخفیف:
            </Text>
            <Text size="lg" weight="bold" className=" text-green-600">
              {formatToIranianCurrency(calculateDiscountedPrice(product.price, product.discount), "toman")}
            </Text>
          </div>
        </div>
      ) : (
        <Text size="lg" weight="bold" className=" text-green-600 ">
          {formatToIranianCurrency(product.price, "toman")}
        </Text>
      )}
    </div>
  );
};

export default ProductPrice;
