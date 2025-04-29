/** @format */

import React from "react";

interface ISliderTrack {
  minPrice: number;
  maxPrice: number;
  calculatePosition: (value: number) => number;
}

const SliderTrack: React.FC<ISliderTrack> = ({ minPrice, maxPrice, calculatePosition }) => {
  return (
    <div className="bg-gray-300 relative h-1 rounded-full w-full">
      <div
        className=" h-1 absolute rounded-full bg-green-600"
        style={{
          left: `${calculatePosition(minPrice)}%`,
          width: `${calculatePosition(maxPrice) - calculatePosition(minPrice)}%`,
        }}
      ></div>
    </div>
  );
};
export default SliderTrack;
