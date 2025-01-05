/** @format */

import ImageContainer from "@/app/lib/design/common/img-container";
import Laundry from "../../../../public/images/p-21-min.png";
import Text from "@/app/lib/design/common/text";
import { formatToIranianCurrency } from "@/app/lib/utils/currency";
import { calculateDiscountedPrice } from "@/app/lib/utils/calculate-discount-price";
import StarRating from "@/app/lib/design/common/star-rating";
import Button from "@/app/lib/design/common/button";

const ProductCard = () => {
  return (
    <section className=" p-6 border border-teal-500 rounded-lg gap-4 flex flex-col items-center h-[600px] ">
      <ImageContainer src={Laundry} classes=" w-full h-[300px]" />
      <Text className="text-xl font-semibold">چای‌ساز تفال مدل BI-460</Text>
      <section>
        <Text className=" text-gray-500 line-through">{formatToIranianCurrency(17000000, "toman")}</Text>
        <Text className=" text-red-500 font-bold ">
          {formatToIranianCurrency(calculateDiscountedPrice(17000000, 30), "toman")}
        </Text>
      </section>
      <StarRating rating={2.8} className="mb-4" size="text-2xl" />

      <Button className="px-4 py-2 bg-teal-400 text-white">افزودن به سبد خرید</Button>
    </section>
  );
};

export default ProductCard;
