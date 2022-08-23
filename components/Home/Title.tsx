import React, { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

const Title = ({ className, ...rest }: ComponentPropsWithoutRef<"h2">) => {
  return (
    <h2
      className={twMerge(
        "my-10 text-center text-xl font-medium text-main-blue md:text-3xl",
        className
      )}
      {...rest}
    ></h2>
  );
};

export default Title;
