/** @format */

import { FC } from "react";
import { Props } from "./index.types";
import { FaSpinner } from "react-icons/fa";
import { cn } from "@/app/lib/utils/cn";

const Button: FC<Props> = ({
  children,
  isDisabeld = false,
  isLoading = false,
  isOutline = false,
  leftIcon,
  rightIcon,
  className,
  ...rest
}) => {
  const baseClasses =
    "flex items-center justify-center font-medium rounded transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const outlineClasses = isOutline ? "border-2 bg-transparent" : "";

  const disabledClasses = isLoading ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button className={cn(baseClasses, outlineClasses, disabledClasses, className)}>
      {isLoading ? (
        <FaSpinner className="animate-spin text-lg" />
      ) : (
        <>
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
