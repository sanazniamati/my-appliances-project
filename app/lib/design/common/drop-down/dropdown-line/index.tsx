/** @format */

import { ArrowDownIcon } from "../../icons";
import Text from "../../text";
import { IDropDownLineProps } from "./index.types";

const DropDownLine: React.FC<IDropDownLineProps> = ({
  selectedLabel,
  isOpen,
  placeholder,
  toggleDropDown,
  disabled,
}) => {
  return (
    <div
      onClick={toggleDropDown}
      className={` relative cursor-pointer flex items-center justify-between border-b-2
      ${disabled ? "opacity-50 cursor-not-allowed border-gray-300" : "border-indigo-500"}`}
    >
      <Text>{selectedLabel || placeholder}</Text>
      <span className={`transform transition-transform duration-300  ${isOpen ? "rotate-180" : "rotate-0"}`}>
        <ArrowDownIcon width={20} height={20} />
      </span>
    </div>
  );
};

export default DropDownLine;
