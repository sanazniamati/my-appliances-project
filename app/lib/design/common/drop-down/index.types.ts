/** @format */

export interface Option {
  value: string | number;
  label: string;
}

export interface IDropDownProps {
  options: Option[];
  variant?: "button" | "line";
  selectedValue?: Option | null;
  placeholder: string;
  disabled?: boolean;
  emptyMessage?: string;
  onSelect: (option: Option) => void;
  className?: string;
  buttonClassName?: string;
  dropdownClassName?: string;
}
