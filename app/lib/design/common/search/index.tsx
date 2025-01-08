/** @format */

import { cn } from "@/app/lib/utils/cn";
import Button from "../button";
import { searchProps } from "./index.types";
import * as Icons from "react-icons/md";
import Input from "../input";

const Search: React.FC<searchProps> = ({
  placeholder = "جستجوی محصولات...",
  buttonLabel,
  className,
  value,
  handleGetValue,
  onClick,
}) => {
  return (
    <div className={cn(" flex items-center relative ", className)}>
      <Input
        placeholder={placeholder}
        parentClassName="w-full"
        value={value}
        handleChange={(value) => handleGetValue(value)}
        className="w-full p-3 pr-12 rounded-full border"
      />
      <Button
        onClick={() => {
          onClick();
        }}
        className=" absolute left-2 top-1/2 transform -translate-y-1/2
      flex items-center justify-center px-3 py-2 bg-teal-600 "
      >
        <Icons.MdSearch size={20} />
        {buttonLabel && <span className="ml-2">{buttonLabel}</span>}
      </Button>
    </div>
  );
};

export default Search;
