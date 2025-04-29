/** @format */
"use client";

import { useGetBrands } from "@/app/lib/hooks/brands";
import { useCreateQueryStrings } from "@/app/lib/utils/params/useCreateQueryStringParams";
import { Checkbox } from "@nextui-org/react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export const Brand = () => {
  const { data: getBrands } = useGetBrands();

  const pathname = usePathname();
  const router = useRouter();
  const searchParam = useSearchParams();
  const createQueryString = useCreateQueryStrings();

  const brandIdParam = searchParam.get("brand") || "";

  return (
    <div className="flex flex-col gap-4">
      {getBrands?.data.map((brand) => {
        return (
          <Checkbox
            isSelected={brand._id === brandIdParam}
            size="lg"
            key={brand._id}
            onChange={() => {
              createQueryString({
                pathname,
                router,
                params: [
                  {
                    name: "brand",
                    value: brand._id === brandIdParam ? "" : brand._id,
                  },
                ],
              });
            }}
          >
            {brand.name}
          </Checkbox>
        );
      })}
    </div>
  );
};

export default Brand;
