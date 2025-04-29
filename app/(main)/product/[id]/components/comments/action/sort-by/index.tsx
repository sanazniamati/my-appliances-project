/** @format */
"use client";
import DropDown from "@/app/lib/design/common/drop-down";
import { OptionState } from "@/app/lib/types/option";
import { useCreateQueryStrings } from "@/app/lib/utils/params/useCreateQueryStringParams";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Options = [
  {
    label: "قدیمی ترین",
    value: "asc",
  },
  {
    label: "جدیدترین",
    value: "desc",
  },
];

const SortBy = () => {
  const searchParams = useSearchParams();
  const createQueryString = useCreateQueryStrings();
  const pathname = usePathname();
  const router = useRouter();

  const sortByParam = searchParams.get("sortby") || "";

  const selectedValue =
    Options.find(({ value }) => {
      return value == sortByParam;
    }) || Options[0];

  return (
    <div className=" mr-auto">
      <DropDown
        onSelect={({ value }: OptionState) => {
          createQueryString({
            pathname,
            router,
            params: [
              {
                name: "sortby",
                value: String(value),
              },
              {
                name: "page",
                value: "1",
              },
            ],
          });
        }}
        options={Options}
        className="w-[300px]"
        variant="button"
        placeholder=""
        selectedValue={selectedValue}
        emptyMessage="گزینه ای موجود نیست"
        buttonClassName="shadow-non bg-primary-50"
        dropdownClassName="bg-red-500"
      />
    </div>
  );
};

export default SortBy;
