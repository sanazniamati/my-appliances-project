/** @format */

import { StaticImageData } from "next/image";

export interface Props {
  src: string | StaticImageData;
  classes?: string;
  style?: any;
}

export type LoadImage = {
  src: any;
  quality?: any;
  width: any;
};

export type LoadPartialImage = Partial<LoadImage>;
