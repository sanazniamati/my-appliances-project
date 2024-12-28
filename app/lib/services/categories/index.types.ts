/** @format */

export interface CategoriesState {
  _id: string;
  name: string;
  description: string;
}

export interface GetCategoryResponce {
  data: {
    categories: CategoriesState[];
    error: string;
    message: string;
  };
}
