/** @format */

interface CategoryState {
  _id: string;
  name: string;
  description: string;
}

export interface GetCategoryResponce {
  data: {
    categories: CategoryState[];
    error: string;
    message: string;
  };
}
