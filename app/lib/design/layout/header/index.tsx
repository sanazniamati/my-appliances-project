/** @format */

import Button from "../../common/button";
import Cart from "../../common/cart";
import LinkContainer from "../../common/link-container";
import Search from "../../common/search";
import Sign from "../../common/sign";
import Text from "../../common/text";
import Title from "../../title";

import * as Icons from "react-icons/md";
import { items } from "./menuItems";
import SearchBar from "./searchbar";

const Header = () => {
  return (
    <header className=" w-full bg-gray-900 p-6 z-20 flex flex-col gap-10 text-white">
      <section className=" flex items-center gap-4  ">
        <div className=" ">
          <Title level={6} className=" text-white xl:text-2xl">
            فروشگاه لوازم خانگی
          </Title>
        </div>

        <div className="  flex items-center ">
          <div className="flex gap-2">
            {items.map((item) => {
              return (
                <LinkContainer key={item.id} href={item.href}>
                  {item.title}
                </LinkContainer>
              );
            })}
          </div>
        </div>

        <SearchBar />

        <div className=" flex  items-center gap-4">
          <Sign />
          <span className=" w-[1px] h-7 bg-white" />
          <Cart />
        </div>
      </section>
    </header>
  );
};

export default Header;
