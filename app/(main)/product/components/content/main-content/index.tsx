/** @format */

"use client";

import { cn } from "@/app/lib/utils/cn";
import { Props } from "./index.types";
import ProductList from "./product-list";
import { Pagination } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCreateQueryStrings } from "@/app/lib/utils/params/useCreateQueryStringParams";
import { useGetProducts } from "@/app/lib/hooks/product";
import { SortByFilterState } from "@/app/lib/hooks/product/index.types";
import { useGetFilters } from "@/app/lib/hooks/filters";

// useGetFilters
// {
//   data: {
//          data: [ {field: "price",maxValue: 100000000,​minValue: 100000 ,...}],
//          error: null,
//          message: "تمامی فیلترها دریافت شدند"
//   }
// }

const MainContent: React.FC<Props> = ({ className }) => {
  //!! Fetch
  const { data: getFilters } = useGetFilters({ field: "price" });
  const getPriceFilter = getFilters && getFilters?.data[0];

  // !! Param Hook
  const searchParam = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const createQueryString = useCreateQueryStrings();

  // !! Get Params
  const page = Number(searchParam.get("page") || 1);
  const sortby = (searchParam.get("sortby") as SortByFilterState) || "";
  const category = searchParam.get("category") || "";
  const search = searchParam.get("search") || "";
  const brand = searchParam.get("brand") || "";
  const limit = 10;
  const minPrice = Number(searchParam.get("minPrice")) || getPriceFilter?.minValue;
  const maxPrice = Number(searchParam.get("maxPrice")) || getPriceFilter?.maxValue;

  //!! Fetch
  const { data: getProduct } = useGetProducts({
    sortby,
    category,
    page,
    name: search,
    brand,
    limit,
    minPrice,
    maxPrice,
  });

  const products = getProduct?.data.products;

  //  Handlers
  const handlePagination = (numberPage: number) => {
    createQueryString({
      pathname,
      router,
      params: [
        {
          name: "page",
          value: String(numberPage),
        },
      ],
    });
  };

  return (
    <div className={cn("flex flex-col gap-10 items-center border-2 border-blue-500  ", className)}>
      {products && <ProductList products={products} />}
      <Pagination
        showControls
        initialPage={page}
        total={getProduct?.data.totalPages || 0}
        onChange={handlePagination}
      />
    </div>
  );
};

export default MainContent;
