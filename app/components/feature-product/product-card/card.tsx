/** @format */

import Text from "@/app/lib/design/common/text";
import { Props } from "./index.types";
import LinkContainer from "@/app/lib/design/common/link-container";
import Button from "@/app/lib/design/common/button";

const Card: React.FC<Props> = ({ item }) => {
  return (
    <div className=" flex items-center relative basis-1/4">
      <div className={`w-full h-full mx-[15px] py-10 pr-6 rounded-lg flex flex-col gap-2 ${item.bgColor}`}>
        <div
          className={`overlay w-full h-full absolute right-0 top-0 bg-transparent bg-custom-position bg-no-repeat bg-contain ${item.imagePath}`}
        ></div>
        {item.title.map((text, index) => (
          <Text key={index} as="p" size="lg" className={` text-white relative ${index === 1 && `text-2xl font-bold`}`}>
            {text}
          </Text>
        ))}
        <LinkContainer href={""} classes="relative ">
          <Button isOutline className=" px-4 py-2 text-white">
            {item.buttonText}
          </Button>
        </LinkContainer>
      </div>
    </div>
  );
};

export default Card;
