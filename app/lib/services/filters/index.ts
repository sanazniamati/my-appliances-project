/** @format */

import api from "..";
import { IGetFilterParams } from "../../hooks/filters/index.types";
import { GetFiltersResponse } from "./index.types";

export const getFilters = async (params: IGetFilterParams) => {
  const responce = await api.get<GetFiltersResponse>(`/filters?field=${params.field}`);
  return responce.data;
};
