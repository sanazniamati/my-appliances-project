/** @format */

import Text from "@/app/lib/design/common/text";
import { CategoriesState } from "@/app/lib/services/categories/index.types";
import { useCreateQueryStrings } from "@/app/lib/utils/params/useCreateQueryStringParams";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

interface ICategoryProps {
  item: CategoriesState;
}

const Category: React.FC<ICategoryProps> = ({ item }) => {
  const pathname = usePathname();
  const router = useRouter();
  const createQueryString = useCreateQueryStrings();
  const searchParams = useSearchParams();
  const categoryIdParam = searchParams.get("category") || "";

  return (
    <section
      className=" p-2 cursor-pointer"
      onClick={() => {
        createQueryString({
          pathname,
          router,
          params: [
            {
              name: "category",
              value: item._id,
            },
          ],
        });
      }}
    >
      <Text size="xl" className={`${item._id === categoryIdParam ? "text-blue-400" : ""}`}>
        {item.name}
      </Text>
    </section>
  );
};

export default Category;
