/** @format */

import { Option } from "../index.types";

export interface IDropdownMenuProps {
  isOpen: boolean;
  options: Option[];
  emptyMessage: string;
  handleSelect: (option: Option) => void;
  dropdownClassName: string;
}
