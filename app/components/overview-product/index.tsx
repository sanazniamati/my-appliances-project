/** @format */

import Button from "@/app/lib/design/common/button";
import ImageContainer from "@/app/lib/design/common/img-container";
import Text from "@/app/lib/design/common/text";
import Title from "@/app/lib/design/title";
import Image1 from "@/public/images/slider-img-1.png";
import Image2 from "@/public/images/slider-img-2.png";
import { FiCheckCircle } from "react-icons/fi";

const OverViewProduct = () => {
  return (
    <div className=" grid grid-cols-6 grid-rows-6 gap-6 m-2 h-[650px]">
      <section
        className=" row-span-6 col-span-2 bg-gradient-to-r from-gray-600 to-gray-400 p-8 flex flex-col 
       justify-between items-center text-white rounded-lg shadow-lg 
        hover:scale-105 transform  transition-all duration-300 ease-in-out "
      >
        <div className=" text-center mb-4 ">
          <Title level={2} className=" text-sm font-medium text-yellow-300">
            تلویزیون هوشمند
          </Title>
          <Title level={4} className="text-xl font-bold mt-2 text-white">
            صفحه نمایش ۴K
          </Title>
        </div>
        <ImageContainer src={Image1.src} classes=" w-[220px] h-[220px] rounded-md shadow-xl mb-6" />
        <div className="text-center mb-6">
          <Text className="text-sm text-gray-200">
            تلویزیون هوشمند با صفحه نمایش ۴K برای تجربه‌ای بی‌نظیر از تماشای فیلم و برنامه‌های تلویزیونی. مجهز به
            فناوری‌های پیشرفته و قابلیت اتصال به اینترنت برای استفاده از خدمات استریمینگ.
          </Text>
        </div>
        <Button
          className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-full transition hover:bg-blue-600 hover:text-white"
          type="button"
        >
          خرید
        </Button>
      </section>
      <section
        className=" row-span-3 col-span-2 bg-gradient-to-r from-blue-500 to-blue-300 p-8 flex flex-col 
       justify-between items-center text-white rounded-lg shadow-lg 
        hover:scale-105 transform  transition-all duration-300 ease-in-out "
      >
        <div className=" text-center mb-4">
          <Title level={4} className="text-sm font-medium text-yellow-300">
            یخچال فریزر
          </Title>
          <Title level={2} className="text-xl font-bold mt-2 text-white">
            مدل ۶۰۰ لیتری
          </Title>
        </div>
        <div className=" text-center mb-4">
          <Text as="p" size="sm" className="text-gray-200">
            یخچال فریزر با ظرفیت ۶۰۰ لیتری و طراحی مدرن، مناسب برای خانواده‌های بزرگ. مجهز به سیستم‌های سرمایشی پیشرفته
            برای حفظ تازگی مواد غذایی شما.
          </Text>
        </div>
        <div className=" flex items-center space-x-2 space-x-reverse ">
          <FiCheckCircle className="text-green-500" />
          <Text as="span" size="sm" className="text-gray-200"></Text>
        </div>
        <Button
          className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-full transition hover:bg-blue-600 hover:text-white"
          type="button"
        >
          خرید
        </Button>
      </section>
      <section
        className=" row-span-6 col-span-2 bg-gradient-to-r from-yellow-500 to-yellow-300 p-8 flex flex-col 
       justify-between items-center text-white rounded-lg shadow-lg 
        hover:scale-105 transform  transition-all duration-300 ease-in-out "
      >
        <div className=" text-center mb-4 ">
          <Title level={2} className=" text-sm font-medium text-gray-700">
            جاروبرقی رباتیک
          </Title>
          <Title level={4} className="text-xl font-bold mt-2 text-white">
            با تکنولوژی پیشرفته
          </Title>
        </div>
        <ImageContainer src={Image2.src} classes=" w-[220px] h-[220px] rounded-md shadow-xl mb-6" />
        <div className="text-center mb-6">
          <Text size="sm" className=" text-gray-200">
            جاروبرقی رباتیک با توانایی پاکسازی هوشمند و تکنولوژی نقشه‌برداری پیشرفته. قادر به تمیز کردن تمامی سطوح و
            دسترسی به نقاط سخت.
          </Text>
        </div>
        <Button
          className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-full transition hover:bg-blue-600 hover:text-white"
          type="button"
        >
          خرید
        </Button>
      </section>
      <section
        className=" row-span-3 col-span-2 bg-gradient-to-r from-green-500 to-green-300 p-8 flex flex-col 
       justify-between items-center text-white rounded-lg shadow-lg 
        hover:scale-105 transform  transition-all duration-300 ease-in-out "
      >
        <div className=" text-center mb-4">
          <Title level={4} className="text-sm font-medium text-yellow-300">
            یخچال فریزر
          </Title>
          <Title level={2} className="text-xl font-bold mt-2 text-white">
            مدل ۶۰۰ لیتری
          </Title>
        </div>
        <div className=" text-center mb-4">
          <Text as="p" size="sm" className="text-gray-200">
            یخچال فریزر با ظرفیت ۶۰۰ لیتری و طراحی مدرن، مناسب برای خانواده‌های بزرگ. مجهز به سیستم‌های سرمایشی پیشرفته
            برای حفظ تازگی مواد غذایی شما.
          </Text>
        </div>
        <div className=" flex items-center space-x-2 space-x-reverse ">
          <FiCheckCircle className="text-green-500" />
          <Text as="span" size="sm" className="text-gray-200"></Text>
        </div>
        <Button
          className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-full transition hover:bg-blue-600 hover:text-white"
          type="button"
        >
          خرید
        </Button>
      </section>
    </div>
  );
};

export default OverViewProduct;
