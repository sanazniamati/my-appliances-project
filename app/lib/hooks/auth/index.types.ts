/** @format */

export interface IsignInResponce {
  message: string;
  data: {
    code: string;
    expiresAt: string;
    expiresIn: number;
  };
}

export interface IVerifyResponse {
  message: string;
  accessToken: string;
  refreshToken: string;
  accessTokenExpire: string;
  refreshTokenExpire: string;
}
