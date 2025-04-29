/** @format */

import { formatToIranianCurrency } from "@/app/lib/utils/currency";
import React from "react";

interface ISliderLabelsProps {
  minPrice: number;
  maxPrice: number;
}
const SliderLabels: React.FC<ISliderLabelsProps> = ({ maxPrice, minPrice }) => {
  return (
    <div className="absolute -top-10 flex justify-between w-full border-2 border-yellow-400">
      <div className=" text-sm font-bold text-indigo-600 ">{formatToIranianCurrency(maxPrice)}</div>
      <div className=" text-sm font-bold text-indigo-600 ">{formatToIranianCurrency(minPrice)}</div>
    </div>
  );
};

export default SliderLabels;
