/** @format */
"use client";

import { useGetCategories } from "@/app/lib/hooks/categories";
import Caategory from "./Category";
import { usePathname, useRouter } from "next/navigation";
import { useCreateQueryStrings } from "@/app/lib/utils/params/useCreateQueryStringParams";
import Text from "@/app/lib/design/common/text";

const CategoriesFilter = () => {
  const pathname = usePathname();
  const router = useRouter();
  const createQueryString = useCreateQueryStrings();

  const { data: getCategories } = useGetCategories();

  return (
    <section className="flex flex-col gap-4">
      <section
        className="p-2 cursor-pointer"
        onClick={() => {
          createQueryString({
            pathname,
            router,
            params: [
              {
                name: "category",
                value: "",
              },
            ],
          });
        }}
      >
        <Text size="xl" className="text-gray-800">
          همه
        </Text>
      </section>

      {getCategories?.data.categories.map((category) => {
        return <Caategory key={category._id} item={category} />;
      })}
    </section>
  );
};

export default CategoriesFilter;
