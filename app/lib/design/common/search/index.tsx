/** @format */

import Button from "../button";
import { searchProps } from "./index.types";
import * as Icons from "react-icons/md";

const Search: React.FC<searchProps> = ({ placeholder = "جستجوی محصولات...", buttonLabel, className, onSearch }) => {
  return (
    <form className=" w-[700px] flex items-center relative ">
      <input
        name="search"
        placeholder={placeholder}
        className="w-full p-3 pr-12 rounded-full border border-gray-100 text-gray-800 bg-gray-100 placeholder-gray-500 focus:ring-teal-500 focus:outline-none"
      />
      <Button
        className=" absolute left-2 top-1/2 transform -translate-y-1/2
      flex items-center justify-center px-3 py-2 bg-teal-600 "
      >
        <Icons.MdSearch size={20} />
        {buttonLabel && <span className="ml-2">{buttonLabel}</span>}
      </Button>
    </form>
  );
};

export default Search;
