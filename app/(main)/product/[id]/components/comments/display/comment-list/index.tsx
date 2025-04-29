/** @format */
"use client";
import { useGetComments } from "@/app/lib/hooks/comments";
import SortBy from "../../action/sort-by";
import SubmitComment from "../../action/submit-comment";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import Text from "@/app/lib/design/common/text";
import CommentItem from "../comment-item";
import { Pagination } from "@nextui-org/react";
import { useCreateQueryStrings } from "@/app/lib/utils/params/useCreateQueryStringParams";

const CommentList = () => {
  // !! Hooks
  const param = useParams();
  const searchParams = useSearchParams();
  const createQueryParam = useCreateQueryStrings();
  const router = useRouter();
  const pathname = usePathname();

  // !! Param Variable
  const productId = param.id;
  const page = Number(searchParams.get("page")) || 1;
  const sortby = searchParams.get("sortby") || "";
  const limit = 5;

  // !! Fetch

  const { data } = useGetComments({
    productId: String(productId),
    params: {
      page,
      limit,
      sortby,
    },
  });

  const comments = data?.data.comments;
  const isRender = comments && comments.length > 0;

  const handlePagination = (numberPagination: number) => {
    createQueryParam({ router, pathname, params: [{ name: "page", value: String(numberPagination) }] });
  };
  return (
    <div className=" flex flex-col gap-6 p-6 shadow rounded-2xl border-2 border-green-500">
      <SubmitComment />
      {isRender ? (
        <>
          <SortBy />
          {comments?.map((comment) => {
            return <CommentItem key={comment._id} comment={comment} />;
          })}
          <Pagination showControls onChange={handlePagination} page={page} total={data?.data.totalPages || 0} />
        </>
      ) : (
        <Text size="lg">دیدگاهی ثبت نشده</Text>
      )}
    </div>
  );
};

export default CommentList;
