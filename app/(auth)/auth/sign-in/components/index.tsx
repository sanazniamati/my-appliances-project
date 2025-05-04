/** @format */

import LinkContainer from "@/app/lib/design/common/link-container";
import Logo from "@/app/lib/design/common/logo";
import Title from "@/app/lib/design/title";
import Form from "./form";

const SignIn = () => {
  return (
    <div className=" flex flex-col gap-6 border-2 border-red-400">
      <Logo className=" mx-auto" />
      <Title level={1} className=" text-center text-xl font-semibold to-gray-700">
        ورود به حساب کاربری
      </Title>
      <Form />
      <LinkContainer href={"/auth/forget-password"} classes=" text-sm text-center text-blue-600 hover:text-primary">
        رمز عبور خود را فراموش کرده‌اید؟
      </LinkContainer>

      {/* <Text className="text-center text-gray-600">
        یا از طریق شبکه‌های اجتماعی ادامه دهید
      </Text> */}

      {/* <SocialSignInButtons /> */}

      {/* <SignUpPrompt /> */}
    </div>
  );
};
export default SignIn;
