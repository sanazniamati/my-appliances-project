/** @format */

export interface IDropDownLineProps {
  selectedLabel: string | null;
  isOpen: boolean;
  placeholder: string;
  toggleDropDown: () => void;
  disabled: boolean;
}
