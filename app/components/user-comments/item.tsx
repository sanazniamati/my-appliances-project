/** @format */

import Text from "@/app/lib/design/common/text";
import Title from "@/app/lib/design/title";
import { CommentIcon } from "@/app/lib/icons";
import { ItemProps } from "./index.types";

const Item: React.FC<ItemProps> = ({ name, description }) => {
  return (
    <div
      className=" flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out
    transform hover:scale-105  "
    >
      <section className=" flex items-start gap-1 ">
        <CommentIcon />
        <div className=" flex items-center">
          <Title level={4} className="text-teal-600 font-semibold text-lg">
            {name}
          </Title>
        </div>
      </section>
      <Text className=" text-gray-600 text-base border-3 border-red-700">{description}</Text>
    </div>
  );
};
export default Item;
