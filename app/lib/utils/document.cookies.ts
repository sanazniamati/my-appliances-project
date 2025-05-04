/** @format */

export const setCookieWithDays = (name: string, value: string, days: number) => {
  const expires = new Date();
  expires.setDate(expires.getDate() + days);
  document.cookie = `${name}=${value};path=/expires=${expires.toUTCString()};SameSite=Lax; Secure;}`;
};

export const setCookieWithExactDate = (name: string, value: string, expireDate: string) => {
  const expires = new Date(expireDate);
  document.cookie = `${name}=${value};path=/expires=${expires.toUTCString()};SameSite=Lax; Secure;}`;
};

export const deleteCookie = (name: string) => {
  document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax; Secure;`;
};
