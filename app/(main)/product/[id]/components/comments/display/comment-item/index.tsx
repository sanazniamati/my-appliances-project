/** @format */
"use client";
import { ReplyCommentIcon } from "@/app/lib/design/common/icons";
import Text from "@/app/lib/design/common/text";
import { convertDateFormat } from "@/app/lib/utils/date.format";
import { Avatar } from "@nextui-org/react";
import { ICommentItemProps } from "./index.types";
import { useState } from "react";
import SubmitReplyComment from "../../action/submit-reply-comment";
import ReplyCommentItem from "../reply-comment-item";

const CommentItem: React.FC<ICommentItemProps> = ({ comment }) => {
  // !! Variable
  const user = comment.user;
  const role = user.role === "user" ? "کاربر" : user.role === "admin" ? "ادمین" : "مهمان";
  const username = `${user.firstName} ${user.lastName}`;
  const replies = comment.replies;

  // !! State
  const [isActiveReply, setIsActiveReply] = useState(false);

  return (
    <div className=" flex flex-col gap-8 p-6  rounded-xl shadow-lg border border-red-500">
      <section className="">
        <Text className="mr-auto">{convertDateFormat("12", "fa")}</Text>
        <div className=" flex items-center justify-between">
          <div className=" flex items-center gap-3">
            <Avatar size="lg" />
            <div className=" flex items-center gap-1">
              <Text size="lg" className="text-sm text-gray-600">
                {role}
              </Text>
              :<Text className=" text-xl font-semibold text-gray-800">{username}</Text>
            </div>
          </div>
          <span
            onClick={() => setIsActiveReply((prev) => !prev)}
            className=" cursor-pointer text-indigo-600 hover:text-indigo-800 transition duration-300  "
          >
            <ReplyCommentIcon />
          </span>
        </div>
        <div className=" flex  items-center">
          <Text className="text-gray-800 text-lg">{comment.text}</Text>
        </div>
      </section>

      <SubmitReplyComment isActiveReply={isActiveReply} />

      {replies.map((reply) => {
        return <ReplyCommentItem key={reply._id} reply={reply} />;
      })}
    </div>
  );
};

export default CommentItem;
