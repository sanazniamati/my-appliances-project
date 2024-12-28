/** @format */

import ImageContainer from "@/app/lib/design/common/img-container";
import Text from "@/app/lib/design/common/text";
import { ProductCardProps } from "./index.types";
import { convertDateFormat } from "@/app/lib/utils/date.format";
import Button from "@/app/lib/design/common/button";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div
      className=" border border-gray-200 flex flex-col gap-4 p-4 transition duration-300
        transform hover:scale-105 hover:shadow-xl"
    >
      <ImageContainer
        src={`${process.env.NEXT_PUBLIC_API_IMG}${product.image}`}
        classes=" w-[300px] h-[300px] rounded-t-xl overflow-hidden"
      />
      <div className=" flex flex-col items-start px-2">
        <Text className=" text-gray-800 " size="md" weight="semibold">
          {product.name}
        </Text>
        <Text className=" text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap max-w-[100%] ">
          {product.description}
        </Text>
        <Text className=" text-gray-500 mt-2 " size="sm">
          محصول جدید از تاریخ :{convertDateFormat(product.createdAt, "fa")}
        </Text>
      </div>
      <div className="flex justify-between items-center px-2">
        <Button className="px-4 py-2 text-sm bg-teal-500 text-white rounded-lg hover:bg-teal-600">مشاهده محصول</Button>
      </div>
    </div>
  );
};

export default ProductCard;
