/** @format */

import { useMutation } from "@tanstack/react-query";
import { ISignInProps, IVerifyProps } from "../../services/auth/index.types";
import { signIn, verifyCode } from "../../services/auth";
import { useSignInStore } from "../../store/sign-in";
import { setCookieWithDays, setCookieWithExactDate } from "../../utils/document.cookies";

const useSignIn = () => {
  const { setStep, setExpiresAt } = useSignInStore();
  return useMutation({
    mutationFn: (data: ISignInProps) => {
      return signIn(data);
    },
    onSuccess: (response) => {
      setExpiresAt(response.data.expiresAt);
      setStep("verify-code");
    },
    onError: (error) => {},
  });
};

const useVerifyCode = () => {
  return useMutation({
    mutationFn: (data: IVerifyProps) => {
      return verifyCode(data);
    },
    onSuccess: ({ accessToken, accessTokenExpire, refreshToken, refreshTokenExpire }) => {
      setCookieWithExactDate("access", accessToken, accessTokenExpire);
      setCookieWithExactDate("refresh", refreshToken, refreshTokenExpire);
      window.location.href = "/";
    },
    onError: (error) => {
      //
    },
  });
};

export { useSignIn, useVerifyCode };
