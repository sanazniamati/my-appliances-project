/** @format */

import Button from "@/app/lib/design/common/button";
import ImgContainer from "@/app/lib/design/common/img-container";
import Text from "@/app/lib/design/common/text";
import Title from "@/app/lib/design/title";

import { cn } from "@/app/lib/utils/cn";
import Image from "@/public/images/p-25-min.png";
interface Props {
  className?: string;
}

const Banner: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "h-[600px] bg-gradient-to-r from-orange-400 rounded-lg to-yellow-500 flex flex-col  items-center text-center text-white",
        className
      )}
    >
      <ImgContainer classes={"w-[600px] h-[300px]"} src={Image.src} />
      <Title level={1} className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
        محصولات شگفت‌انگیز ما!
      </Title>
      <Text className=" text-lg md:text-xl max-w-[600px] mb-6 drop-shadow-md" as="p">
        از جدیدترین محصولات ما دیدن کنید و بهترین انتخاب‌ها را برای خود داشته باشید.
      </Text>
      <Button className=" bg-white text-orange-500 font-semibold px-6 py-3 shadow-md hover:bg-orange-100 transition-all duration-300 ">
        مشاهده محصولات
      </Button>
    </div>
  );
};

export default Banner;
