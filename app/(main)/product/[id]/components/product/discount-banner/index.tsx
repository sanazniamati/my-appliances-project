/** @format */

import { cn } from "@/app/lib/utils/cn";
import { FC } from "react";
import { IDisCountBannerProps } from "./index.types";
import Text from "@/app/lib/design/common/text";
import Title from "@/app/lib/design/title";
import { Button } from "@nextui-org/react";

const DisCountBanner: FC<IDisCountBannerProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-md border border-blue-800 shadow-md text-center relative overflow-hidden",
        className
      )}
    >
      <Text size="sm" className="absolute top-0 left-0 bg-blue-600 text-white px-4 py-2 rounded-br-lg shadow-md ">
        تخفیف ویژه!
      </Text>
      <Title level={5} className=" font-extrabold text-blue-800 mb-4">
        فقط ۳۰ روز با تخفیف!
      </Title>

      <Text size="sm" className="text-blue-700 mb-4 leading-relaxed">
        از فرصت محدود استفاده کنید و محصولات منتخب ما را با بهترین قیمت خریداری کنید.
        <br />
        ارسال سریع، پرداخت امن و تضمین کیفیت در انتظار شماست!
      </Text>

      <Button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md mx-auto hover:bg-blue-700 transition-transform transform hover:scale-105">
        مشاهده محصولات تخفیف‌دار
      </Button>
    </div>
  );
};

export default DisCountBanner;
