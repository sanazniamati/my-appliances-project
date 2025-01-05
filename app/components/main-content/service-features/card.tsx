/** @format */

import ImageContainer from "@/app/lib/design/common/img-container";
import Text from "@/app/lib/design/common/text";
import { FC } from "react";

const Card: FC<CardProps> = ({ src, subtitle, title, hasBorder = true }) => {
  return (
    <section className=" flex items-center gap-4 ">
      <ImageContainer src={src} classes=" w-20 h-20 " />
      <section className=" flex flex-col gap-2 border-spacing-4 ">
        <Text>{subtitle}</Text>
        <Text>{title}</Text>
      </section>
      {hasBorder && <span className="w-[1px] h-[90px] bg-gray-400 hidden sm:block" />}
    </section>
  );
};

export default Card;
