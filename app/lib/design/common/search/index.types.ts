/** @format */

export interface searchProps {
  placeholder?: string;
  buttonLabel?: string;
  className?: string;
  value: string;
  handleGetValue: (value: any) => void;
  onClick: () => void;
}
