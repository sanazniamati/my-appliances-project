/** @format */

import ImageContainer from "@/app/lib/design/common/img-container";
import LinkContainer from "@/app/lib/design/common/link-container";
import Text from "@/app/lib/design/common/text";
import { FC } from "react";
import { BrandsItemProps } from "./index.types";

const BrandItem: FC<BrandsItemProps> = ({ item }) => {
  return (
    <LinkContainer
      href={`/product?brand=${item._id}`}
      classes="flex flex-col justify-center items-center gap-2 bg-white rounded-xl transform transition-all duration-300
      hover:scale-105 hover:shadow-xl "
    >
      <ImageContainer src={`${process.env.NEXT_PUBLIC_API_IMG}${item.image}`} classes="w-28 h-28 object-fill" />
      <Text className="transition duration-300 hover:text-primary">{item.name}</Text>
    </LinkContainer>
  );
};

export default BrandItem;
