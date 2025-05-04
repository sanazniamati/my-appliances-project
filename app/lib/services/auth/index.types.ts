/** @format */

export interface ISignInProps {
  email: string;
  password: string;
}

export interface IVerifyProps extends ISignInProps {
  code: string;
}
