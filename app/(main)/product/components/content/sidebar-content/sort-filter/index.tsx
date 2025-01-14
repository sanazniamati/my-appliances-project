/** @format */

"use client";

import DropDown from "@/app/lib/design/common/drop-down";
import { useCreateQueryStrings } from "@/app/lib/utils/params/useCreateQueryStringParams";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Options = [
  {
    label: "همه",
    value: "",
  },
  {
    label: "امتیاز",
    value: "rating",
  },
  {
    label: "فروش",
    value: "sales",
  },
  {
    label: "موجودی",
    value: "stock",
  },
  {
    label: "جدیدترین",
    value: "newest",
  },
  {
    label: "تخفیف",
    value: "discounted",
  },
];

const SortFilter = () => {
  const searchParam = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const createQueryString = useCreateQueryStrings();

  const sortbyParam = searchParam.get("sortby") || "";

  const selectedValue = Options.find(({ value: value }) => value === sortbyParam);

  return (
    <DropDown
      placeholder=""
      variant={"line"}
      selectedValue={selectedValue}
      emptyMessage="وجود"
      options={Options}
      onSelect={(selectOption) =>
        createQueryString({
          pathname,
          router,
          params: [{ name: "sortby", value: String(selectOption.value) }],
        })
      }
      buttonClassName="shadow-none bg-white text-black"
      dropdownClassName="bg-red-500"
    />
  );
};

export default SortFilter;
