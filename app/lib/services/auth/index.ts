/** @format */

import api from "..";
import { IVerifyResponse, IsignInResponce } from "../../hooks/auth/index.types";
import { ISignInProps, IVerifyProps } from "./index.types";

const signIn = async (data: ISignInProps) => {
  const response = await api.post<IsignInResponce>("/auth/signin", data);
  return response.data;
};

const verifyCode = async (data: IVerifyProps) => {
  const response = await api.post<IVerifyResponse>("/auth/verify-code", data);
  return response.data;
};

export { signIn, verifyCode };
