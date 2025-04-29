/** @format */

import SectionSpace from "@/app/lib/design/common/section-space";
import Product from "./components/product";
import TechnicalList from "./components/tecbnical-specification/technical-list";
import TechnicalSpecifications from "./components/tecbnical-specification";
import CommentList from "./components/comments/display/comment-list";

const Page = () => {
  return (
    <SectionSpace className="flex flex-col gap-2 p-2 border-2 border-green-800">
      <Product />
      <TechnicalSpecifications />
      <CommentList />
    </SectionSpace>
  );
};
export default Page;
