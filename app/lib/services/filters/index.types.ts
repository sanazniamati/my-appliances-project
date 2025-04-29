/** @format */
export interface FilterState {
  _id: string;
  field: string;
  operator: string;
  minValue: number;
  maxValue: number;
  createdAt: string;
  updatedAt: string;
}

export interface GetFiltersResponse {
  data: FilterState[];
  error: any;
  message: string;
}
