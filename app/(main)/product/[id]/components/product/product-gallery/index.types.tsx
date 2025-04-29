/** @format */

import { ProductState } from "@/app/lib/services/product/index.types";
import { ClassNameType } from "@/app/lib/types/classname";

export interface IProductImageGalleryProps extends ClassNameType {
  product: ProductState;
}
