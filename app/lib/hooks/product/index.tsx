/** @format */

import { useQuery } from "@tanstack/react-query";
import { GetProductProps } from "./index.types";
import { getProducts } from "../../services/product";

const useGetProducts = (params: GetProductProps) => {
  const queryKeys = ["fetch-products", params];
  return useQuery(queryKeys, {
    queryFn: () => {
      return getProducts(params);
    },
  });
};

export { useGetProducts };
