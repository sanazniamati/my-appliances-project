/** @format */

import { Button } from "@nextui-org/react";
import { ArrowDownIcon } from "../../icons";
import Text from "../../text";
import { IDropDownButtonProps } from "./index.types";

const DropDownButton: React.FC<IDropDownButtonProps> = ({
  selectedLabel,
  isOpen,
  placeholder,
  toggleDropDown,
  disabled,
  buttonClassName,
}) => {
  return (
    <Button
      onPress={toggleDropDown}
      className={` w-full flex items-center justify-between gap-2 px-4 py-2 text-sm font-medium 
      text-white bg-indigo-600 rounded-md hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500
      ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${buttonClassName}`}
      disabled={disabled}
    >
      <Text size="xl">{selectedLabel || placeholder}</Text>
      <Text
        as="span"
        className={`transform transition-transform duration-300 
      ${isOpen ? "rotate-180" : "rotate-0"} `}
      >
        <ArrowDownIcon width={20} height={20} />
      </Text>
    </Button>
  );
};

export default DropDownButton;
