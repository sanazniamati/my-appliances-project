/** @format */
"use client";

import React, { useEffect, useRef, useState } from "react";
import SliderTrack from "./slider-track";
import SliderThumb from "./slider-thumb";
import SliderLabels from "./slider-labels";
import RangeLabels from "./range-labels";
import { cn } from "@/app/lib/utils/cn";

interface IPriceRangeSliderProps {
  minRange: number;
  maxRange: number;
  initialMinValue: number;
  initialMaxValue: number;
  currency: "toman" | "rial";
  onChange?: (minValue: number, maxValue: number) => void;
  className: string;
}

const PriceRangeSlider: React.FC<IPriceRangeSliderProps> = ({
  minRange,
  maxRange,
  initialMinValue,
  initialMaxValue,
  currency,
  onChange,
  className,
}) => {
  const [minPrice, setMinPrice] = useState(initialMinValue);
  const [maxPrice, setMaxPrice] = useState(initialMaxValue);
  const [flag, setFlag] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const calculatePosition = (value: number) => {
    return ((value - minRange) / (maxRange - minRange)) * 100;
  };

  const handleMinChange = (newValue: number) => {
    const updatedMin = Math.min(newValue, maxPrice - 1);
    setMinPrice(updatedMin);
    setFlag(true);
  };

  const handleMaxChange = (newValue: number) => {
    const updatedMax = Math.max(newValue, minPrice + 1);
    setMaxPrice(updatedMax);
    setFlag(true);
  };

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      if (onChange && flag) {
        onChange(minPrice, maxPrice);
      }
    }, 1000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [minPrice, maxPrice, onChange]);

  return (
    <div className={cn(" w-full relative max-w-md mx-auto cursor-pointer border-2 border-red-500", className)}>
      <SliderTrack minPrice={minPrice} maxPrice={maxPrice} calculatePosition={calculatePosition} />

      {/* min */}
      <SliderThumb
        position={calculatePosition(minPrice)}
        onMouceDown={(e) => {
          const slider = e.currentTarget.parentElement!;

          const handleMouseMove = (moveEvent: MouseEvent) => {
            console.log(handleMouseMove);
            const rect = slider.getBoundingClientRect();
            const newX = Math.min(Math.max(moveEvent.clientX - rect.left, 0), rect.width);
            const newValue = Math.round((newX / rect.width) * (maxRange - minRange) + minRange);
            handleMinChange(newValue);
          };

          const handleMouseUp = () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
          };

          window.addEventListener("mousemove", handleMouseMove);
          window.addEventListener("mouseup", handleMouseUp);
        }}
      />

      {/* max */}
      <SliderThumb
        position={calculatePosition(maxPrice)}
        onMouceDown={(e) => {
          const slider = e.currentTarget.parentElement!;

          const handleMouseMove = (moveEvent: MouseEvent) => {
            console.log(handleMouseMove);
            const rect = slider.getBoundingClientRect();
            const newX = Math.min(Math.max(moveEvent.clientX - rect.left, 0), rect.width);
            const newValue = Math.round((newX / rect.width) * (maxRange - minRange) + minRange);
            handleMaxChange(newValue);
          };

          const handleMouseUp = () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
          };

          window.addEventListener("mousemove", handleMouseMove);
          window.addEventListener("mouseup", handleMouseUp);
        }}
      />

      <SliderLabels minPrice={minPrice} maxPrice={maxPrice} />

      <RangeLabels minRange={minRange} maxRange={maxRange} currency={currency} />
    </div>
  );
};

export default PriceRangeSlider;
