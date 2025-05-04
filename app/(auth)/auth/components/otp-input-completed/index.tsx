/** @format */

import { useEffect } from "react";

/** @format */
interface IProps {
  value: string;
  onChange: (newCode: string) => void;
  length: number;
  onComplete?: () => void;
  errorMessage?: string;
}
const OtpInput: React.FC<IProps> = ({ onChange, value, length, errorMessage, onComplete }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = e.target.value;
    if (/^\d{0,1}$/.test(newValue)) {
      const newCode = value.split(""); //[]
      newCode[index] = newValue; //["5"]
      onChange(newCode.join("")); //5

      if (newCode.join("").length === length && onComplete) {
        onComplete();
      }

      if (newValue && index < length - 1) {
        const nextInput = document.getElementById(`otp-input-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedData = e.clipboardData.getData("text");
    if (/^\d{1,6}$/.test(pastedData)) {
      onChange(pastedData);
    }

    const lastInput = document.getElementById(`otp-input-${pastedData.length - 1}`);
    lastInput?.focus();
    e.preventDefault();
  };

  useEffect(() => {
    if (value.length === length && onComplete) {
      onComplete();
    }
  }, [value, length, onComplete]);

  return (
    <div className="flex justify-center gap-4" dir="ltr">
      {Array.from({ length: 6 }).map((_, index) => {
        return (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            maxLength={1}
            value={value[index] || ""}
            onChange={(e) => {
              handleChange(e, index);
            }}
            onKeyDown={(e) => {
              handleKeyDown(e, index);
            }}
            onPaste={(e) => handlePaste(e)}
            className=" w-12 h-12 text-center border-2 border-gray-300 rounded-lg text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus={index === 0}
            style={{ animation: "focusAnimation 0.3s ease" }}
          />
        );
      })}
      {errorMessage && <div className=" text-red-500">{errorMessage}</div>}
    </div>
  );
};
export default OtpInput;
