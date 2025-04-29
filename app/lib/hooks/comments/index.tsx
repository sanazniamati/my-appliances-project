/** @format */

import { useQuery } from "@tanstack/react-query";
import { IGetCommentProps } from "./index.types";
import { getCommentByProductId } from "../../services/comments";

const useGetComments = ({ productId, params }: IGetCommentProps) => {
  return useQuery(["fetch-comments", params, productId], {
    queryFn: () => {
      return getCommentByProductId({ productId, params });
    },
  });
};

export { useGetComments };
