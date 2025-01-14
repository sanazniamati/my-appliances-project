/** @format */

import Button from "../../button";
import { IDropdownMenuProps } from "./index.types";

const DropdownMenu: React.FC<IDropdownMenuProps> = ({
  isOpen,
  options,
  emptyMessage,
  handleSelect,
  dropdownClassName,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="menu"
      className={` absolute right-0 z-10 w-full top-full rounded-md 
      origin-top-right bg-white divide-y divide-gray-100 
      ring-1 ring-black ring-opacity-5 ${dropdownClassName} `}
    >
      {options.length > 0 ? (
        <ul className="py-1 divide-y divide-gray-100">
          {options.map((option) => {
            return (
              <li key={option.value}>
                <Button
                  className="w-full px-4 py-2 text-lg text-gray-700
                hover:text-indigo-600 hover:bg-indigo-100"
                  onClick={() => handleSelect(option)}
                >
                  {option.label}
                </Button>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className=" px-4 py-2 text-sm text-gray-500">{emptyMessage}</div>
      )}
    </div>
  );
};

export default DropdownMenu;
