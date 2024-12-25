/** @format */
"use client";
import Animation from "@/app/lib/design/common/animation";
import LinkContainer from "@/app/lib/design/common/link-container";
import Text from "@/app/lib/design/common/text";
import { useGetCategories } from "@/app/lib/hooks/categories";
import { LeftArrowContainIcon } from "@/app/lib/icons";
import { cn } from "@/app/lib/utils/cn";

const CategorySidebar = () => {
  const { data: getCategories, isLoading } = useGetCategories();
  return (
    <div className={cn("flex flex-col gap-3 max-h-[65vh]")}>
      {isLoading ? (
        <Animation />
      ) : (
        getCategories?.data.categories.map((item) => (
          <LinkContainer
            key={item._id}
            href={`/product?category=${item._id}`}
            classes="flex items-center justify-between border-b p-3 hover:bg-teal-600 
          hover:rounded hover:text-white transition-all"
          >
            <div className="flex items-center">
              <Text as="p" size="lg">
                {item.name}
              </Text>
            </div>
            <LeftArrowContainIcon />
          </LinkContainer>
        ))
      )}
    </div>
  );
};

export default CategorySidebar;
