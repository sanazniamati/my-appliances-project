/** @format */
"use client";
import { Button, Textarea } from "@nextui-org/react";
import { useState } from "react";

const SubmitComment = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className=" flex flex-col gap-6 border-2 border-blue-500">
      <Button
        onPress={() => setIsActive((prev) => !prev)}
        size="md"
        className=" w-fit mr-auto bg-gradient-to-r  from-blue-500 to-indigo-500 text-white
       hover:bg-gradient-to-l hover:from-indigo-500 hover:to-blue-500 shadow-lg transition duration-300 ease-in-out rounded-xl "
      >
        {isActive ? "بستن دیدگاه" : "ارسال دیدگاه"}
      </Button>

      {isActive && (
        <div className=" flex flex-col gap-4 bg-white p-6 rounded-lg shadow-xl ">
          <Textarea />
          <Button
            onPress={() => {}}
            className=" w-fit bg-gradient-to-r from-green-400 to-teal-500 text-white shadow-lg transition duration-300 ease-in-out rounded-xl
        hover:bg-gradient-to-l hover:from-teal-500 hover:to-green-400"
          >
            ثبت دیدگاه
          </Button>
        </div>
      )}
    </div>
  );
};

export default SubmitComment;
