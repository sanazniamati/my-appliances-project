/** @format */
"use client";
import SectionTitle from "@/app/lib/design/common/section-title";
import TechnicalSpecList from "./technical-spec-list";
import { useParams } from "next/navigation";
import { useGetProductById } from "@/app/lib/hooks/product";
import { useState } from "react";

const TechnicalList = () => {
  // Get Product By Id Params
  const param = useParams();
  const id = param.id;
  const { data } = useGetProductById({ id: String(id) });
  const product = data?.data.product;

  // state
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-white p-6 rounded-lg border-2 border-purple-500">
      {product && (
        <TechnicalSpecList
          specifications={product.technicalSpecifications}
          showMore={showMore}
          onToggleShowMore={() => setShowMore((prev) => !prev)}
        />
      )}
    </section>
  );
};
export default TechnicalList;
