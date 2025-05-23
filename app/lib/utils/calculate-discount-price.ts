/** @format */

export const calculateDiscountedPrice = (price: number, discount: number) => {
  return price - price * (discount / 100);
};
