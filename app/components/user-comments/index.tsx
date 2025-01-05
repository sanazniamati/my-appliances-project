/** @format */

import SectionTitle from "@/app/lib/design/common/section-title";
import Item from "./item";

const UserComments = () => {
  return (
    <section className=" flex flex-col gap-2 mt-4">
      <SectionTitle title="نظرات کاربران" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 border-3 border-green-500 ">
        <Item name="علیرضا" description="این محصول بسیار باکیفیت بود و بسته‌بندی مناسبی داشت. پیشنهاد می‌کنم." />
        <Item name="محمد" description="قیمت این محصول بسیار مناسب است و کیفیت بالایی دارد. خرید خوبی بود." />
        <Item name="سامان" description="این محصول از نظر عملکرد عالی است. خیلی سریع به دستم رسید." />
      </div>
    </section>
  );
};
export default UserComments;
