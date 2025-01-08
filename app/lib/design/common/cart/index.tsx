/** @format */

import { cn } from "@/app/lib/utils/cn";
import LinkContainer from "../link-container";
import { CartProps } from "./index.types";
import { FaShoppingCart } from "react-icons/fa";
import Text from "../text";
import { ShoppingCartFullIcon } from "../icons";

const Cart: React.FC<CartProps> = ({ itemCount = 5, className }) => {
  return (
    <LinkContainer href={"/cart"} classes={cn("relative cursor-pointer", className)}>
      {/* <FaShoppingCart size={24} className="text-white" /> */}
      <ShoppingCartFullIcon width={30} height={30} />
      {itemCount > 0 && (
        <Text
          as="span"
          className="absolute right-0 top-0  bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 
          flex items-center justify-center transform  translate-x-1/2 -translate-y-1/2"
        >
          {itemCount}
        </Text>
      )}
    </LinkContainer>
  );
};
export default Cart;
