/** @format */

import api from "..";
import { GetBrandsResponse } from "./index.types";

export const getBrands = async () => {
  const responce = await api<GetBrandsResponse>("/brand");
  return responce.data;
};
