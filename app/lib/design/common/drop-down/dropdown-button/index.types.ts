/** @format */

export interface IDropDownButtonProps {
  selectedLabel: string | null;
  isOpen: boolean;
  placeholder: string;
  toggleDropDown: () => void;
  disabled: boolean;
  buttonClassName: string;
}
