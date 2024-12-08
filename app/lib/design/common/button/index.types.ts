/** @format */

import { ButtonHTMLAttributes, ReactNode } from "react";
export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  isOutline?: boolean;
  isDisabeld?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
}
