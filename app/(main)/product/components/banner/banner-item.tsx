/** @format */

import { Button } from "@nextui-org/react";
import ImageContainer from "@/app/lib/design/common/img-container";
import Title from "@/app/lib/design/title";
import Text from "@/app/lib/design/common/text";

/** @format */
interface IBannerProps {
  item: {
    src: string;
    title: string;
    description: string;
  };
}

const BannerItem: React.FC<IBannerProps> = ({ item }) => {
  const { title, src, description } = item;
  return (
    <div className=" h-300px lg:h-[550px] text-white flex flex-col justify-center items-center relative">
      <ImageContainer src={src} classes="w-full h-full rounded-xl  -z-1 object-fill" />
      <div className="absolute flex flex-col bg-opacity-70 justify-center items-center z-10 p-6 bg-black rounded-lg ">
        <Title level={3} className="font-bold mb-4  text-white">
          {title}
        </Title>
        <Text size="md" className="mb-6 text-justify  text-white leading-loose">
          {description}
        </Text>
        <Button size="lg" variant="shadow">
          خرید
        </Button>
      </div>
    </div>
  );
};

export default BannerItem;
