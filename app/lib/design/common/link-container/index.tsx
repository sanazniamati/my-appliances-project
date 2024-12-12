/** @format */
import React from "react";
import Link from "next/link";
import { Props } from "./index.types";

const LinkContainer: React.FC<Props> = ({ children, href, classes, id }) => {
  return (
    <Link href={href ?? ""} id={id} className={`${classes ? classes : ""}`} draggable={false}>
      {children}
    </Link>
  );
};

export default LinkContainer;
