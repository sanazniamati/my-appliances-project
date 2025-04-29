/** @format */

"use client";

import { getAllSearchParams } from "@/app/lib/utils/params/get-all-search-params";
import { createFilter } from "@/app/lib/utils/params/has-filter";
import { Button } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import { MdClose } from "react-icons/md";

const ResetFilter = () => {
  const router = useRouter();
  const searchParam = useSearchParams();

  const getAllParams = getAllSearchParams(searchParam);
  const hasFilter = createFilter(getAllParams); //true or false

  return (
    <>
      {hasFilter && (
        <Button
          endContent={<MdClose />}
          color="danger"
          onPress={() => router.push("")}
          className="w-fit flex items-center gap-2"
        >
          حذف فیلتر
        </Button>
      )}
    </>
  );
};

export default ResetFilter;
