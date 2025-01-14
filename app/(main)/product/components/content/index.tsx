/** @format */

import MainContent from "./main-content";
import SidebarContent from "./sidebar-content";

const Main = () => {
  return (
    <div className=" grid grid-cols-12 gap-5 mt-10 ">
      <SidebarContent className=" col-span-12 xl:col-span-3" />
      <MainContent className="xl:col-span-9  col-span-12" />
    </div>
  );
};
export default Main;
