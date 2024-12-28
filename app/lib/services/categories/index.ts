/** @format */

import api from "..";
import { GetCategoryResponce } from "./index.types";

const getCategories = async () => {
  const responce = await api.get<GetCategoryResponce>("/categories");
  return responce.data;
};

export { getCategories };
