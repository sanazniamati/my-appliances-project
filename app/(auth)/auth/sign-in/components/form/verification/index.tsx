/** @format */

import CountDownTimer from "@/app/(auth)/auth/components/count-down-timer";
import OtpInput from "@/app/(auth)/auth/components/otp-input-completed";
import { useVerifyCode } from "@/app/lib/hooks/auth";
import { useSignInStore } from "@/app/lib/store/sign-in";
import { Button } from "@nextui-org/react";

const Verification = () => {
  const { code, setCode, email, password, expireAt } = useSignInStore();
  const { mutate: verifyMutate, isLoading } = useVerifyCode();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sendData = { email: email, password: password, code: code };
    verifyMutate(sendData);
  };
  return (
    <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
      <OtpInput value={code} onChange={(value) => setCode(value)} length={6} errorMessage="" />
      <Button isLoading={isLoading} type="submit" color="success" size="lg">
        تایید کد
      </Button>
      <CountDownTimer expiresAt={expireAt} />
    </form>
  );
};
export default Verification;
