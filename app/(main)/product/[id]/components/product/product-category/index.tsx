/** @format */

import React from "react";
import { IProductCategoryProps } from "./index.types";
import Text from "@/app/lib/design/common/text";
import LinkContainer from "@/app/lib/design/common/link-container";

const ProductCategory: React.FC<IProductCategoryProps> = ({ product }) => {
  return (
    <div className=" flex items-center gap-2 text-gray-600">
      <Text as="span" className="">
        دسته بندی:
      </Text>
      <LinkContainer
        classes="font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300"
        href={`/product?category=${product.category._id}`}
      >
        {product.category.name}
      </LinkContainer>
    </div>
  );
};

export default ProductCategory;
