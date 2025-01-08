/** @format */

"use client";

import { useState, useEffect } from "react";
import Search from "../../../common/search";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCreateQueryStrings } from "@/app/lib/utils/params/useCreateQueryStringParams";

const SearchBar = () => {
  const [value, setValue] = useState("");

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const createQueryString = useCreateQueryStrings();

  const nameParam = searchParams.get("name") || "";

  //save value if refresh
  useEffect(() => {
    setValue(nameParam);
  }, [nameParam]);

  return (
    <Search
      className="flex-1 text-black"
      onClick={() => {
        createQueryString({ pathname, router, params: [{ name: "name", value }] });
      }}
      value={value}
      handleGetValue={(value) => setValue(value)}
    />
  );
};
export default SearchBar;
