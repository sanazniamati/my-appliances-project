/** @format */

"use client";

import { LikeEmptyIcon, ShoppingCartFullIcon } from "@/app/lib/design/common/icons";
import ImageContainer from "@/app/lib/design/common/img-container";
import { Button } from "@nextui-org/react";
import ProductImageGallery from "./product-gallery";
import { useParams } from "next/navigation";
import { useGetProductById } from "@/app/lib/hooks/product";
import DisCountBanner from "./discount-banner";
import Title from "@/app/lib/design/title";
import Text from "@/app/lib/design/common/text";
import ProductPrice from "./product-price";
import PurchaseBenefits from "./purchase-benefits";
import ProductStock from "./product-stock";
import ProductCategory from "./product-category";

const Product = () => {
  // !! Fetch Product By Id
  const params = useParams();
  const id = params.id;

  const { data } = useGetProductById({ id: String(id) });
  const product = data?.data.product;

  return (
    <>
      {product && (
        <div className=" flex flex-wrap gap-6 p-8 bg-white rounded-xl shadow-lg relative border-2 border-red-500">
          <section className=" flex flex-col relative items-center w-full flex-1 border-2 border-blue-500 ">
            <Button
              size="sm"
              className=" absolute top-4 left-4 z-10 text-3xl opacity-50 hover:opacity-100 bg-transparent"
            >
              <LikeEmptyIcon />
            </Button>
            <ImageContainer
              src={`${process.env.NEXT_PUBLIC_API_IMG}${product.image}`}
              classes=" w-full h-80 object-contain border rounded-lg"
            />
            <div className=" flex gap-3 mt-4 justify-center flex-wrap">
              <ProductImageGallery product={product} />
            </div>
            <PurchaseBenefits />
          </section>
          <section className=" flex flex-col gap-5 w-full md:w-[55%] border-2 border-orange-500">
            <DisCountBanner />
            <Title level={5} className=" font-bold text-gray-800 border-b p-2">
              {product.name}
            </Title>
            <ProductCategory product={product} />
            <Text size="sm" className="text-gray-600 mb-6">
              {product.description ||
                "محصولاتی با کیفیت بالا و ویژگی‌های منحصر به فرد که تجربه‌ای عالی برای شما به ارمغان می‌آورند"}
            </Text>
            <ProductPrice product={product} />
            <ProductStock product={product} />

            <Button
              endContent={<ShoppingCartFullIcon />}
              className="flex items-center gap-2  transition duration-200 transform mt-6 px-6 py-3 bg-teal-600 rounded-md hover:scale-105 hover:bg-teal-700"
            ></Button>
          </section>
        </div>
      )}
    </>
  );
};

export default Product;
