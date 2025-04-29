/** @format */

export const createFilter = (paramsObject: Record<string, string>): boolean => {
  const result = Object.values(paramsObject).some((value) => value !== null && value !== undefined && value !== "");
  return result;
};
