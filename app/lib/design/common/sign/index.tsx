/** @format */

import LinkContainer from "../link-container";
import * as Icons from "react-icons/md";
import Text from "../text";
import { SignInSquareIcon } from "../icons";

const Sign = () => {
  return (
    <LinkContainer href={"/sign"}>
      {/* <section className="flex items-center gap-2 ">
        <Icons.MdPerson size={30} />
        <Text as="span" className="text-white">
          ورود / ثبت نام
        </Text>
      </section> */}

      <section className="flex items-center gap-2">
        <SignInSquareIcon width={30} height={30} />
        <Text as="span" className="text-white">
          ورود / ثبت نام
        </Text>
      </section>
    </LinkContainer>
  );
};

export default Sign;
