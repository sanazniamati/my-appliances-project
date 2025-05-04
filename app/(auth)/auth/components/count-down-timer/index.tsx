/** @format */

"use client";
import Text from "@/app/lib/design/common/text";
import { getRemainingTime } from "@/app/lib/utils/date.format";
import { FC, useState, useEffect } from "react";

interface ICountDownTimerProps {
  expiresAt: string;
}
const CountDownTimer: FC<ICountDownTimerProps> = ({ expiresAt }) => {
  const [timeLeft, setTimeLeft] = useState<number>(getRemainingTime(expiresAt));

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));

      return () => clearInterval(interval);
    }, 1000);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className=" text-lg font-semibold text-center p-2">
      {timeLeft > 0 ? (
        <Text>
          زمان باقی‌مانده: {minutes > 0 ? `${minutes} دقیقه و ` : ""}
          {seconds} ثانیه
        </Text>
      ) : (
        <Text className=" text-red-500">کد منقضی شد!</Text>
      )}
    </div>
  );
};

export default CountDownTimer;
