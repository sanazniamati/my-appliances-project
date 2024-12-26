/** @format */

import Card from "./card";
import { items } from "./cardItems";

const ProductCard = ({}) => {
  return (
    <section className=" flex mt-5">
      {items.map((item) => (
        <Card item={item} />
      ))}
    </section>
  );
};

export default ProductCard;
