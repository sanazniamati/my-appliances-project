/** @format */

import api from "..";
import { IGetCommentProps } from "../../hooks/comments/index.types";
import { createParams } from "../../utils/create-params";
import { GetCommentsResponse } from "./index.types";

const getCommentByProductId = async (data: IGetCommentProps) => {
  const { params, productId } = data;
  const createQuery = createParams(params);

  const responce = await api.get<GetCommentsResponse>(`/comment/${productId}?${createQuery}`);
  return responce.data;
};

export { getCommentByProductId };
