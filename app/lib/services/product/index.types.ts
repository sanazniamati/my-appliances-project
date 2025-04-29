/** @format */

import { BrandState } from "../brands/index.types";
import { CategoriesState } from "../categories/index.types";

// !! Product Id
export interface GetProductByIdResponse {
  data: {
    product: ProductState;
  };
  error: any;
  message: string;
}

export interface GetProductByIdProps {
  id: string;
}

export interface TechnicalSpecificationsState {
  key: string;
  value: string;
  _id: string;
}

// !! Product State
export interface ProductState {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: CategoriesState;
  stock: number;
  discount: number;
  rating: number;
  image: string;
  brand: BrandState;
  sales: number;
  createdAt: string;
  updatedAt: string;
  technicalSpecifications: TechnicalSpecificationsState[];
}

// !! Products

export interface GetProductByIdResponse {
  data: {
    product: ProductState;
  };
  error: any;
  message: string;
}

export interface GetProductsResponse {
  data: {
    totalProducts: number;
    totalPages: number;
    currentPage: number;
    products: ProductState[];
    next: number | null;
    prev: number | null;
  };
  error: any;
  message: "محصولات با موفقیت دریافت شدند";
}
