/** @format */

import React from "react";

interface ISliderThumbProps {
  position: number;
  onMouceDown: (e: React.MouseEvent) => void;
}

const SliderThumb: React.FC<ISliderThumbProps> = ({ position, onMouceDown }) => {
  return (
    <div
      className=" absolute w-6 h-6 bg-indigo-600 cursor-pointer -top-2"
      style={{ left: `${position}%` }}
      onMouseDown={onMouceDown}
    ></div>
  );
};

export default SliderThumb;
