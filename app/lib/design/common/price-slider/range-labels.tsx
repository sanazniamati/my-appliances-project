/** @format */

import { formatToIranianCurrency } from "@/app/lib/utils/currency";
import React from "react";

interface IRangeLabelsProps {
  minRange: number;
  maxRange: number;
  currency: "toman" | "rial";
}

const RangeLabels: React.FC<IRangeLabelsProps> = ({ currency, maxRange, minRange }) => {
  return (
    <div className=" flex justify-between text-sm text-gray-600 mt-8 ">
      <span>{`${formatToIranianCurrency(maxRange, currency)}`}</span>
      <span>{`${formatToIranianCurrency(minRange, currency)}`}</span>
    </div>
  );
};

export default RangeLabels;
