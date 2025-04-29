/** @format */

export interface IGetCommentProps {
  productId: string;
  params: Partial<{
    page: number;
    limit: number;
    sortby: string;
  }>;
}
