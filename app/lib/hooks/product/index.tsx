/** @format */

import { useQuery } from "@tanstack/react-query";
import { GetProductProps, IGetProductByIdProps } from "./index.types";
import { getProductById, getProducts } from "../../services/product";

const useGetProductById = ({ id }: IGetProductByIdProps) => {
  const queryKeys = ["product", id];
  return useQuery(queryKeys, {
    queryFn: () => {
      return getProductById({ id });
    },
  });
};

const useGetProducts = (params: GetProductProps) => {
  const queryKeys = ["fetch-products", params];
  return useQuery(queryKeys, {
    queryFn: () => {
      return getProducts(params);
    },
  });
};

export { useGetProducts, useGetProductById };
