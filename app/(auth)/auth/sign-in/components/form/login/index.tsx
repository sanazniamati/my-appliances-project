/** @format */
"use client";
import { EyeClosedIcon } from "@/app/lib/design/common/icons";
import { useSignIn } from "@/app/lib/hooks/auth";
import { useSignInStore } from "@/app/lib/store/sign-in";
import { Button, Input } from "@nextui-org/react";

const Login = () => {
  const { email, password, setEmail, setPassword } = useSignInStore();
  const { mutate: signInMutate, isLoading } = useSignIn();

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const sendData = { email: email, password: password };
    signInMutate(sendData);
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <Input label="ایمیل کاربری" type="email" value={email} onValueChange={(value) => setEmail(value)} />
      <Input
        label="رمز عبور کاربری"
        type="text"
        value={password}
        onValueChange={(value) => setPassword(value)}
        endContent={<EyeClosedIcon />}
      />

      <Button isLoading={isLoading} type="submit" color="success" size="lg">
        ورود کاربری
      </Button>
    </form>
  );
};
export default Login;
