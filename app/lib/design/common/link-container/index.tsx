/** @format */
import React from "react";
import { Props } from "./index";
import Link from "next/link";

const LinkContainer: React.FC<Props> = ({ children, href, classes, id }) => {
  return (
    <Link href={href ?? ""} id={id} className={`${classes ? classes : ""}`} draggable={false}>
      {children}
    </Link>
  );
};

export default LinkContainer;
