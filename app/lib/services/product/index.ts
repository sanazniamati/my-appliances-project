/** @format */

import api from "..";
import { GetProductProps } from "../../hooks/product/index.types";
import { createParams } from "../../utils/create-params";
import { GetProductsResponse } from "./index.types";

export const getProducts = async (params: GetProductProps) => {
  const newParams = createParams(params);
  const responce = await api.get<GetProductsResponse>(`/product?${newParams}`);
  return responce.data;
};

//  const newParams = createParams(params);
//  const response = await api.get<GetProductsResponse>(`/product?${newParams}`);
//  return response.data;
