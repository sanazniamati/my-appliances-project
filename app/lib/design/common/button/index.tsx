/** @format */

import { FC } from "react";
import { Props } from "./index.types";
import { FaSpinner } from "react-icons/fa";

const Button: FC<Props> = ({
  children,
  isDisabeld = false,
  isLoading = false,
  isOutline = false,
  leftIcon,
  rightIcon,
  ...rest
}) => {
  return (
    <button>
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
