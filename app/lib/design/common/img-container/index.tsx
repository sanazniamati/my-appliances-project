/** @format */
"use client";

import Image from "next/image";
import { LoadImage, Props } from "./index.types";

const imageLoader = ({ src, width, quality }: LoadImage) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ImageContainer: React.FC<Props> = ({ src, classes }) => {
  return (
    <div className={` relative ${classes}`}>
      <Image
        loader={imageLoader}
        src={src}
        alt={"image"}
        fill
        loading="lazy"
        // sizes="(max-width: 1200px) 100vw"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default ImageContainer;
