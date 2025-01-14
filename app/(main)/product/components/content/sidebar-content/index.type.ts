/** @format */

import { ClassNameType } from "@/app/lib/types/classname";
import { ReactNode } from "react";

export interface Props extends ClassNameType {}

export interface ISideFilterProps {
  children: ReactNode;
  title: string;
  className?: string;
  isBorderBottom?: boolean;
}
