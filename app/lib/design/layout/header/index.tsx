/** @format */

import Button from "../../common/button";
import Cart from "../../common/cart";
import LinkContainer from "../../common/link-container";
import Search from "../../common/search";
import Sign from "../../common/sign";
import Text from "../../common/text";
import Title from "../../title";
import { linksArray } from "./linksArray";
import * as Icons from "react-icons/md";

const Header = () => {
  return (
    <header className=" w-full bg-gray-900 p-6 z-20 flex flex-col gap-10 text-white">
      <section className=" flex justify-around items-center">
        <section className=" flex gap-10 items-center ">
          <Button isOutline className="px-6 py-4 border-teal-400">
            سایت لوازم خانگی
          </Button>
          <div className=" flex gap-6">
            {linksArray.map((item) => (
              <LinkContainer href={item.href}>{item.title}</LinkContainer>
            ))}
          </div>
        </section>
        <section className=" flex items-center gap-4">
          <div className=" flex items-center gap-2">
            <Text className="text-white">{"Info@example.com"}</Text>
            <Icons.MdOutlineEmail />
          </div>
          <span className="w-[1px] h-7 bg-white"></span>
          <div className=" flex items-center gap-2">
            <Text className=" text-white">{"021 2522441"}</Text>
            <Icons.MdPhone />
          </div>
        </section>
      </section>
      <section className="flex items-center justify-evenly">
        <Title level={3} className=" text-white">
          {"فروشگاه لوازم خانگی"}
        </Title>
        <Search />
        <div className="flex items-center gap-4">
          <Sign />
          <span className="w-[1px] h-7 bg-white"></span>
          <Cart />
        </div>
      </section>
    </header>
  );
};

export default Header;
