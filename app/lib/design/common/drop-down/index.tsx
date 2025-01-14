/** @format */
"use client";

import React, { useState } from "react";
import Text from "../text";
import DropDownButton from "./dropdown-button";
import DropDownLine from "./dropdown-line";
import DropdownMenu from "./dropdown-menu";
import { IDropDownProps, Option } from "./index.types";
import { cn } from "@/app/lib/utils/cn";

const DropDown: React.FC<IDropDownProps> = ({
  options,
  variant = "line",
  selectedValue = null,
  placeholder = "Select Option",
  disabled = false,
  emptyMessage = "موجودی",
  onSelect,
  className,
  buttonClassName = "",
  dropdownClassName = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    if (!disabled) setIsOpen((prev) => !prev);
  };

  const handleSelect = (option: Option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={cn("relative flex flex-col gap-2", className)}>
      <Text size="xl">{placeholder} </Text>
      {variant === "button" ? (
        <DropDownButton
          toggleDropDown={toggleDropDown}
          placeholder={placeholder}
          isOpen={isOpen}
          selectedLabel={selectedValue?.label || null}
          disabled={disabled}
          buttonClassName={buttonClassName}
        />
      ) : (
        <DropDownLine
          toggleDropDown={toggleDropDown}
          placeholder={placeholder}
          isOpen={isOpen}
          selectedLabel={selectedValue?.label || null}
          disabled={disabled}
        />
      )}
      <DropdownMenu
        handleSelect={handleSelect}
        isOpen={isOpen}
        options={options}
        emptyMessage={emptyMessage}
        dropdownClassName={dropdownClassName}
      />
    </div>
  );
};

export default DropDown;
