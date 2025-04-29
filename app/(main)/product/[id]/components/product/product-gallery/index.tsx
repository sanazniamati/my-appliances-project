/** @format */

import { FC } from "react";
import { IProductImageGalleryProps } from "./index.types";
import ImageContainer from "@/app/lib/design/common/img-container";

const ProductImageGallery: FC<IProductImageGalleryProps> = ({ product }) => {
  return (
    <>
      {Array(4)
        .fill(product.image)
        .map((img, index) => {
          return (
            <ImageContainer
              src={`${process.env.NEXT_PUBLIC_API_IMG}${img}`}
              classes="w-40 h-40 object-cover border rounded-md cursor-pointer hover:border-blue-500 "
            />
          );
        })}
    </>
  );
};
export default ProductImageGallery;
