/** @format */

export type SortByFilterState = "rating" | "sales" | "stock" | "newest" | "discounted";

export interface IGetProductByIdProps {
  id: string;
}
export interface GetProductProps {
  category?: string;
  page?: number;
  limit?: number;
  name?: string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  sortby?: SortByFilterState;
  brand?: string;
}
