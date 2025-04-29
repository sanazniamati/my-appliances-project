/** @format */

import api from "..";
import { GetProductProps, IGetProductByIdProps } from "../../hooks/product/index.types";
import { createParams } from "../../utils/create-params";
import { GetProductByIdResponse, GetProductsResponse } from "./index.types";

const getProductById = async ({ id }: IGetProductByIdProps) => {
  const responce = await api.get<GetProductByIdResponse>(`/product/${id}`);
  return responce.data;
};

const getProducts = async (params: GetProductProps) => {
  const newParams = createParams(params);
  const responce = await api.get<GetProductsResponse>(`/product?${newParams}`);
  return responce.data;
};

export { getProductById, getProducts };

//  const newParams = createParams(params);
//  const response = await api.get<GetProductsResponse>(`/product?${newParams}`);
//  return response.data;
