/** @format */

import SectionTitle from "@/app/lib/design/common/section-title";
import CommentList from "./display/comment-list";

const Comments = () => {
  return (
    <div className=" flex flex-col gap-4">
      <SectionTitle title="نظرات کاربران" />
      <CommentList />
    </div>
  );
};

export default Comments;
