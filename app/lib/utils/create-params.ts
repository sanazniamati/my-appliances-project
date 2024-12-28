/** @format */

// paramsObject   {category:"یخچال" , limit:"4" , minPrice:"25000000"}
// Object.entries    [ ['category', 'یخچال'], ['limit', 4] ]
// after map ===>  ['fgdjhdhf#hshdf=yyf45jxvh' , 'hdgshd=hfhs']
// after join     'fgdjhdhf#hshdf=yyf45jxvh&hdgshd=hfhs'

export const createParams = (paramsObject: { [key: string]: any }) => {
  return Object.entries(paramsObject)
    .filter(([key, value]) => value !== undefined && value !== null && value !== "")
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&");
};
